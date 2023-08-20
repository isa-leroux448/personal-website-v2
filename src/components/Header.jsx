import '../styles.css'

const Header = ({ hasExit, title, handleClose, currentZ, setCurrentZ, setLocalZ, dragControls }) => {
    const handleHeaderClick = () => {
        setLocalZ(currentZ + 1);
        setCurrentZ(currentZ + 1);
    }

    return (
        <div className='header' style={{ justifyContent: hasExit ? 'space-between' : 'center' }}
            onClick={handleHeaderClick}
            onPointerDown={(e) => {
                setLocalZ(currentZ + 1);
                setCurrentZ(currentZ + 1);
                dragControls.start(e)
            }}
        >
            {hasExit && (<button className="exitButton" onClick={handleClose}>X</button>)}
            {title && (<p className='headerTitle'>{title}</p>)}
            {hasExit && (<div />)}
        </div>
    )
}

export default Header;

// Dragging added with: https://stackoverflow.com/questions/64919883/framer-motion-drag-set-drag-target-as-child-of-draggable-parent