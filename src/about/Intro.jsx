import Header from "../components/Header";
import { useState, useEffect, useCallback } from "react";
import { motion, useDragControls } from "framer-motion"

const Intro = ({ currentZ, setCurrentZ }) => {
    const [cursorString, setCursorString] = useState('');
    const [localZ, setLocalZ] = useState(0);
    const [open, setOpen] = useState(true);
    const handleClose = useCallback(() => {
        setOpen(false)
    }, [open, setOpen]);
    useEffect(() => {
        setTimeout(() => {
            if (cursorString === '') {
                setCursorString('|');
            } else {
                setCursorString('');
            }
        }, 1000);
    }, [cursorString]);
    const dragControls = useDragControls()

    return (
        open && (
            <motion.div
                drag dragControls={dragControls} dragMomentum={false} dragListener={false}
                className="intro" style={{ zIndex: localZ }}>
                <Header hasExit={true} handleClose={handleClose} currentZ={currentZ} setCurrentZ={setCurrentZ} setLocalZ={setLocalZ} dragControls={dragControls} />
                <div style={{ display: 'flex', height: '20px' }}>
                    <p className="intro-text">Hi my name is&nbsp;&nbsp;</p>
                    <p className="cursor">{cursorString}</p>
                </div>
            </motion.div >
        )
    );
}
export default Intro;