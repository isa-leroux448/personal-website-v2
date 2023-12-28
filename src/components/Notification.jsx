import { motion } from "framer-motion"
import '../styles.css';
import { useState } from "react";

const Notification = ({text}) => {
    const [isHidden, setIsHidden] = useState(false);
    if (!isHidden) {
        return (
            <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="notification-container">
            <div className="notification-exit" onClick={() => setIsHidden(true)}>
                <p className="notification-exit-text">X</p>
            </div>            
            <img src={require(`../assets/info.png`)} className="notification-info"/>
                <p style={{fontSize: '14px'}}>{text}</p>
            </motion.div>
        )
    }
}

export default Notification;