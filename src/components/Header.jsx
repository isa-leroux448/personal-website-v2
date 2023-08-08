import '../styles.css'

const Header = ({hasExit, title}) => {
    return(
        <div className='header' style={{justifyContent: hasExit ? 'space-between': 'center' }}>
            {hasExit && (<p className='exitButton'>X</p>)}
            {title && (<p className='headerTitle'>{title}</p>)}
            {hasExit && (<div/>)}
        </div>
    )
}

export default Header;