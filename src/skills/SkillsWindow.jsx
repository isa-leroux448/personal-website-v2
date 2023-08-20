import Header from "../components/Header";
import { motion, useDragControls } from 'framer-motion'
import { useState, useCallback } from "react";

const SkillsWindow = ({ currentZ, setCurrentZ }) => {
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
                className="skills-container" style={{ zIndex: localZ }}>
                <Header hasExit={true} title="Skills" handleClose={handleClose} currentZ={currentZ} setCurrentZ={setCurrentZ} setLocalZ={setLocalZ} dragControls={dragControls} />
                <div className="grid-container">
                    <p className="grid-title">Languages</p>
                    <div className="grid-item"><img src={require('../assets/skill_logos/javascript.png')} alt="Javascript" title="Javascript"/></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/typescript.png')} alt="Typescript" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/java.png')} alt="Java" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/python.png')} alt="Python" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/c.png')} alt="C" /></div>
                    <div className="black-line"></div>
                </div>
                <div className="grid-container">
                    <p className="grid-title">Front-end</p>
                    <div className="grid-item"><img src={require('../assets/skill_logos/html.png')} alt="HTML" /></div>
                    <div className="grid-item"><img style={{maxWidth: '36%'}} src={require('../assets/skill_logos/css.png')} alt="CSS" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/react.png')} alt="React" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/react-native.png')} alt="React Native" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/tailwind.png')} alt="Tailwind CSS" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/jest.png')} alt="Jest" /></div>
                    <div className="black-line"></div>
                </div>
                <div className="grid-container">
                    <p className="grid-title">Back-end</p>
                    <div className="grid-item"><img src={require('../assets/skill_logos/flask.png')} alt="Flask API" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/node.png')} alt="Node" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/express.png')} alt="Express" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/restAPI.png')} alt="Rest API" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/graphQL.png')} alt="GraphQL" /></div>
                    <div className="black-line"></div>
                </div>
                <div className="grid-container">
                    <p className="grid-title">Other</p>
                    <div className="grid-item"><img src={require('../assets/skill_logos/git.png')} alt="Git" /></div>
                    <div className="grid-item"><img style={{maxWidth: '40%'}}src={require('../assets/skill_logos/figma.png')} alt="Figma" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/webflow.png')} alt="Webflow" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/asana.png')} alt="Asana" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/jira.png')} alt="Jira" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/arcGIS.png')} alt="ArcGIS" /></div>
                </div>
            </motion.div >
        )
    );

}

export default SkillsWindow;