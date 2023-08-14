import Header from "../components/Header";
import { useState, useEffect, useCallback } from "react";

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

    return (
        open && (
            < div className="intro" style={{ zIndex: localZ }}>
                <Header hasExit={true} handleClose={handleClose} currentZ={currentZ} setCurrentZ={setCurrentZ} setLocalZ={setLocalZ} />
                <div style={{ display: 'flex', height: '20px' }}>
                    <p className="intro-text">Hi my name is&nbsp;&nbsp;</p>
                    <p className="cursor">{cursorString}</p>
                </div>
            </div >
        )
    );
}
export default Intro;