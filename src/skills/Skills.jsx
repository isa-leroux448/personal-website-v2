import SectionTitle from '../components/SectionTitle';
import SkillsWindow from './SkillsWindow';
import './styles.css';
import { useState } from 'react';

const Skills = () => {
    const [currentZIndex, setCurrentZIndex] = useState(0);
    return (
        <div className='background'>
            <SectionTitle title="SKILLS" color="#FF8B8B" setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} top="3%" right="72%"/>
            <SkillsWindow setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} />
        </div>
    )
}

export default Skills;