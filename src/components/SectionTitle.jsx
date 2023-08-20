import Header from "../components/Header";
import { useState } from "react";
import { motion, useDragControls } from "framer-motion"
import "../styles.css";

const SectionTitle = ({ title, color, top, right, currentZ, setCurrentZ }) => {
  const [localZ, setLocalZ] = useState(0);
  const dragControls = useDragControls()
  return (
    <motion.div drag dragControls={dragControls} dragMomentum={false} dragListener={false}
      className="title" style={{ top, right, backgroundColor: color, zIndex: localZ }}>
      <Header hasExit={false} currentZ={currentZ} setCurrentZ={setCurrentZ} setLocalZ={setLocalZ} dragControls={dragControls} />
      <p className="title-text">{title}</p>
    </motion.div>
  );
};

export default SectionTitle;