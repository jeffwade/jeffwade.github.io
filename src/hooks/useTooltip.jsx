import * as React from 'react';
import useMousePosition from "../hooks/useMousePosition";
import Tooltip from "../components/Tooltip";

const useTooltip = (bg, label, content, noMouse) => {
  const mousePosition = useMousePosition();

  let previewStyles = !noMouse 
    ? {
      display: "block",
      position: "fixed",
      left: mousePosition.x + 15,
      top: mousePosition.y + 15,
      zIndex: 100,
    } : {
      display: "block",
      position: "absolute",
      left: "auto",
      right: "auto",
      zIndex: 100,
    };

  const previewLabel = label ? (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem", }}>
      { label }
    </div>
  ) : null;

  const previewContent = content
    ? (
      <div>
        { content }
      </div>
    )
    : null;

  const preview = [previewLabel, previewContent];

  return <Tooltip content={preview} bg={bg} style={previewStyles}/>;
};

export default useTooltip;

