import { motion } from "framer-motion"
import '../styles.css';

const Notification = () => {
    return (
        <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="notification-container">
        <div className="notification-exit">
            <p className="notification-exit-text">X</p>
        </div>            
        <img src={require(`../assets/info.png`)} className="notification-info"/>
            <p style={{fontSize: '14px'}}>Many of the components on this website are interactive! You can drag around windows and clear them by clicking on "X".</p>
        </motion.div>
    )
}

export default Notification;