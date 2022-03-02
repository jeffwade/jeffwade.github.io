import * as React from 'react';
import useMousePosition from "../hooks/useMousePosition";
import Tooltip from "../components/Tooltip";

const useTooltip = (bg, label, showLabel, showRest) => {
  const mousePosition = useMousePosition();

  let previewStyles = {
    display: "block",
    position: "fixed",
    left: mousePosition.x + 15,
    top: mousePosition.y + 15,
    zIndex: 100,
  };

  const previewLabel = showLabel ? (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem", }}>
      { label }
    </div>
  ) : null;

  const previewRest = showRest
    ? "some extra words"
    : null;

  const previewContent = [previewLabel, previewRest];

  return <Tooltip content={previewContent} bg={bg} style={previewStyles}/>;
};

export default useTooltip;

