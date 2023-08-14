import Header from "../components/Header";
import { useState, useCallback } from "react";

const Welcome = ({currentZ, setCurrentZ}) => {
    const [localZ, setLocalZ] = useState(0);
    const [open, setOpen] = useState(true);
    const handleClose = useCallback(() => {
        setOpen(false)
    }, [open, setOpen]);
    return (
        open && (
            < div className="welcome" style={{zIndex: localZ}}>
                <Header hasExit={true} handleClose={handleClose} currentZ={currentZ} setCurrentZ={setCurrentZ} setLocalZ={setLocalZ}/>
                <p className="welcome-text">Welcome to my website! Scroll down to learn more about me.</p>
            </div >
        )
    );
}
export default Welcome;