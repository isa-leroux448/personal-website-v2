import Header from "../components/Header";
import { useState, useCallback } from "react";
import { motion, useDragControls } from "framer-motion";

const Welcome = ({ currentZ, setCurrentZ }) => {
    const [localZ, setLocalZ] = useState(0);
    const [open, setOpen] = useState(true);
    const handleClose = useCallback(() => {
        setOpen(false)
    }, [open, setOpen]);
    const dragControls = useDragControls()
    return (
        open && (
            <motion.div
                drag dragControls={dragControls} dragMomentum={false} dragListener={false}
                className="welcome" style={{ zIndex: localZ }}>
                <Header hasExit={true} handleClose={handleClose} currentZ={currentZ} setCurrentZ={setCurrentZ} setLocalZ={setLocalZ} dragControls={dragControls} />
                <p className="welcome-text">Welcome to my website! Scroll down to learn more about me.</p>
            </motion.div >
        )
    );
}
export default Welcome;