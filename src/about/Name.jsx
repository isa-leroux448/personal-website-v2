import Header from "../components/Header";
import { useState } from "react";
import { motion, useDragControls } from "framer-motion"

const Name = ({ name, color, width, height, top, right, currentZ, setCurrentZ }) => {
  const [localZ, setLocalZ] = useState(0);
  const dragControls = useDragControls()
  return (
    <motion.div drag dragControls={dragControls} dragMomentum={false} dragListener={false}
      className="name" style={{ top, right, backgroundColor: color, width, height, zIndex: localZ }}>
      <Header hasExit={false} currentZ={currentZ} setCurrentZ={setCurrentZ} setLocalZ={setLocalZ} dragControls={dragControls} />
      <p className="name-text">{name}</p>
    </motion.div>
  );
};

export default Name;