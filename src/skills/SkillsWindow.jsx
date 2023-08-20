import { useState, useCallback} from "react";
import {motion, useDragControls} from 'framer-motion';
import Header from "../components/Header";
import SkillCategory from "./SkillCategory";
import { Tooltip } from "react-tooltip";
import { skillsListed as skillCategories } from "./skillsListed";

const SkillsWindow = ({ currentZ, setCurrentZ }) => {
    const [localZ, setLocalZ] = useState(0);
    const [open, setOpen] = useState(true);
    const handleClose = useCallback(() => {
      setOpen(false);
    }, []);
  
    const dragControls = useDragControls();
  
    return (
      open && (
        <motion.div
          drag
          dragControls={dragControls}
          dragMomentum={false}
          dragListener={false}
          className="skills-container"
          style={{ zIndex: localZ }}
        >
          <Header
            hasExit={true}
            title="Skills"
            handleClose={handleClose}
            currentZ={currentZ}
            setCurrentZ={setCurrentZ}
            setLocalZ={setLocalZ}
            dragControls={dragControls}
          />
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
          <Tooltip id="tooltip" />
        </motion.div>
      )
    );
  };
  
  export default SkillsWindow;