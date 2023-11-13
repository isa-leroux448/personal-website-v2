import SectionTitle from '../components/SectionTitle';
import './styles.css';
import { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { jobs } from '../experience/jobs';
import Folder from '../components/Folder';

const Projects = () => {
    const [currentZIndex, setCurrentZIndex] = useState(0);
    const [items, setItems] = useState(jobs);
    return (
        <div className='background'>
            <SectionTitle title="PROJECTS" color="#4BBEB9" setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} top="4%" right="5%"/>
            <VideoPlayer setCurrentZ={setCurrentZIndex} currentZ={currentZIndex}/>
            <Folder setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} items={items} setItems={setItems} file="project-folder" folderTitle="Projects"/>
        </div>
    )
}

export default Projects;