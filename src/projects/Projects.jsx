import SectionTitle from '../components/SectionTitle';
import './styles.css';
import { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { videoFolders } from './video-folders';
import Folder from '../components/Folder';
import { web_projects } from './web-projects';

const Projects = () => {
    const [currentZIndex, setCurrentZIndex] = useState(0);
    const [items, setItems] = useState(videoFolders);
    return (
        <div className='background'>
            <SectionTitle title="PROJECTS" color="#4BBEB9" setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} top="4%" right="5%"/>
            {items[0].show && (<VideoPlayer setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} items={web_projects} playerFiles={items} setItems={setItems} index={0} />)}
            {items[1].show && (<VideoPlayer setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} items={web_projects} playerFiles={items} setItems={setItems} index={1} />)}
            <Folder setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} items={items} setItems={setItems} file="project-folder" folderTitle="Projects"/>
        </div>
    )
}

export default Projects;