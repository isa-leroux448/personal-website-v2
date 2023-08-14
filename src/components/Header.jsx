import '../styles.css'

const Header = ({ hasExit, title, handleClose, currentZ, setCurrentZ, setLocalZ }) => {
    const handleHeaderClick = () => {
        setLocalZ(currentZ + 1);
        setCurrentZ(currentZ + 1);
    }
    return (
        <div className='header' style={{ justifyContent: hasExit ? 'space-between' : 'center' }} onClick={handleHeaderClick}>
            {hasExit && (<button className="exitButton" onClick={handleClose}>X</button>)}
            {title && (<p className='headerTitle'>{title}</p>)}
            {hasExit && (<div />)}
        </div>
    )
}

export default Header;