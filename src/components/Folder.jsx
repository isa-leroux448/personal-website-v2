import Header from "../components/Header";
import { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import "../styles.css"

const Folder = ({ currentZ, setCurrentZ, items, setItems, file, folderTitle }) => {
    const [localZ, setLocalZ] = useState(0);
    const dragControls = useDragControls()
    let filteredJobs = [];
    (items.length === 2) ? filteredJobs = items : filteredJobs = items.slice(3);

    function handleOpen(itemToShow) {
        const updatedItems = items.map(item => {
            if (item === itemToShow) {
                return { ...item, show: true };
            }
            return item;
        });
        setItems(updatedItems);
    }
    return (
        <motion.div
            drag dragControls={dragControls} dragMomentum={false} dragListener={false}
            className="folder" style={{ zIndex: localZ }}>
            <Header hasExit={false} title={folderTitle} currentZ={currentZ} setCurrentZ={setCurrentZ} setLocalZ={setLocalZ} dragControls={dragControls} />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {filteredJobs.map((item, index) => (
                    <div className="folder-container" onDoubleClick={() => handleOpen(item)}>
                        <img style={{ height: file === "text-file" ? '5vw' : '4vw', cursor: 'pointer'}} src={require(`../assets/${file}.png`)} alt={file} />
                        <p className="folder-text">{item.company}</p>
                    </div>
                ))}
            </div>
        </motion.div >
    );
}
export default Folder;