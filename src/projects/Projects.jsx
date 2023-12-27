import SectionTitle from '../components/SectionTitle';
import './styles.css';
import { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import { videoFolders } from './video-folders';
import Folder from '../components/Folder';
import { web_projects } from './web-projects';
import Notification from '../components/Notification';

const Projects = ({swiperIndex}) => {
    const [currentZIndex, setCurrentZIndex] = useState(0);
    const [items, setItems] = useState(videoFolders);
    const [isCurrentSlide, setIsCurrentSlide] = useState(false);
    const [isFirstTime, setIsFirstTime] = useState(0);
    useEffect (() => {
        setIsCurrentSlide(swiperIndex === 3);
        if (swiperIndex === 3) {
            setIsFirstTime(isFirstTime + 1);
        }
    }, [swiperIndex]) 
    return (
        <div className='background'>
            <SectionTitle title="PROJECTS" color="#4BBEB9" setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} top="18%" right="7%"/>
            {items[0].show && (<VideoPlayer setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} items={web_projects} playerFiles={items} setItems={setItems} index={0} />)}
            {items[1].show && (<VideoPlayer setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} items={web_projects} playerFiles={items} setItems={setItems} index={1} />)}
            <Folder setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} items={items} setItems={setItems} file="project-folder" folderTitle="Projects"/>
            {isCurrentSlide && isFirstTime < 2 &&(<Notification />)}
        </div>
    )
}

export default Projects;