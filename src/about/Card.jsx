import Header from "../components/Header";
import sample from "../assets/sample.png"
import { useState, useCallback } from "react";
import { motion, useDragControls } from "framer-motion"

const Card = ({ image, text, top, right, currentZ, setCurrentZ }) => {
  const [localZ, setLocalZ] = useState(0);
  const [open, setOpen] = useState(true);
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [open, setOpen]);
  const dragControls = useDragControls()
  return (
    open && (
      <motion.div drag dragControls={dragControls} dragMomentum={false} dragListener={false}
        className="card" style={{ position: 'absolute', top, right, zIndex: localZ }}>
        <Header hasExit={true} handleClose={handleClose} currentZ={currentZ} setCurrentZ={setCurrentZ} setLocalZ={setLocalZ} dragControls={dragControls}/>
        <img style={{ height: '180px', marginTop: '5px' }} src={require(`../assets/about_images/${image}.png`)} />
        <p style={{ fontWeight: 600, marginTop: '2px' }}>{text}</p>
      </motion.div>
    )
  );
};

export default Card;