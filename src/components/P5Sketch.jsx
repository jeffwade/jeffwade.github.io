import React, { useRef, useEffect } from "react"
import p5 from 'p5';
import { PlasmicP5Sketch } from "./plasmic/jeffdo_es/PlasmicP5Sketch"

function P5Sketch({ sketch, sketchDiv, ref, ...rest }) {
  const sketchRef = useRef();
  useEffect(() => {
    new p5(sketch, sketchRef.current);
  }, []);

  return (
    <PlasmicP5Sketch sketchDiv={<div ref={sketchRef}></div>} {...rest}/>
  );
}

// const P5Sketch = React.forwardRef(P5Sketch_)

export default P5Sketch
