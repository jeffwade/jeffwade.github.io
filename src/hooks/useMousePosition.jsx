import { useEffect, useState } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.pageX,
      y: e.pageY,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
