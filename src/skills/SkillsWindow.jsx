import Header from "../components/Header";
import { motion, useDragControls } from 'framer-motion'
import { useState, useCallback } from "react";
import { Tooltip } from 'react-tooltip'


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
                    <div className="grid-item"><img src={require('../assets/skill_logos/javascript.png')} alt="Javascript"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Javascript"
                        data-tooltip-place="bottom" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/typescript.png')} alt="Typescript"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Typescript"
                        data-tooltip-place="bottom" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/java.png')} alt="Java"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Java"
                        data-tooltip-place="bottom" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/python.png')} alt="Python"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Python"
                        data-tooltip-place="bottom" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/c.png')} alt="C"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="C"
                        data-tooltip-place="bottom" /></div>
                    <div className="black-line"></div>
                </div>
                <div className="grid-container">
                    <p className="grid-title">Front-end</p>
                    <div className="grid-item"><img src={require('../assets/skill_logos/html.png')} alt="HTML"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="HTML"
                        data-tooltip-place="bottom" /></div>
                    <div className="grid-item"><img style={{ maxWidth: '36%' }} src={require('../assets/skill_logos/css.png')} alt="CSS"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="CSS"
                        data-tooltip-place="bottom" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/react.png')} alt="React"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="React"
                        data-tooltip-place="bottom" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/react-native.png')} alt="React Native"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="React Native"
                        data-tooltip-place="bottom" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/tailwind.png')} alt="Tailwind CSS"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Tailwind CSS"
                        data-tooltip-place="bottom" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/jest.png')} alt="Jest"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Jest"
                        data-tooltip-place="bottom" /></div>
                    <div className="black-line"></div>
                </div>
                <div className="grid-container">
                    <p className="grid-title">Back-end</p>
                    <div className="grid-item"><img src={require('../assets/skill_logos/flask.png')} alt="Flask API"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Flask API"
                        data-tooltip-place="bottom" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/node.png')} alt="Node"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Node"
                        data-tooltip-place="bottom" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/express.png')} alt="Express"/></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/restAPI.png')} alt="Rest API"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Rest API"
                        data-tooltip-place="bottom" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/graphQL.png')} alt="GraphQL"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="GraphQL"
                        data-tooltip-place="bottom" /></div>
                    <div className="black-line"></div>
                </div>
                <div className="grid-container">
                    <p className="grid-title">Other</p>
                    <div className="grid-item"><img src={require('../assets/skill_logos/git.png')} alt="Git"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Git Control"
                        data-tooltip-place="bottom" /></div>
                    <div className="grid-item"><img style={{ maxWidth: '40%' }} src={require('../assets/skill_logos/figma.png')} alt="Figma"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Figma"
                        data-tooltip-place="bottom" /></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/webflow.png')} alt="Webflow"/></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/asana.png')} alt="Asana"/></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/jira.png')} alt="Jira"/></div>
                    <div className="grid-item"><img src={require('../assets/skill_logos/arcGIS.png')} alt="ArcGIS"/></div>
                </div>
                <Tooltip id="tooltip" />
            </motion.div >
        )
    );

}

export default SkillsWindow;
