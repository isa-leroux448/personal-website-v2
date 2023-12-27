import './styles.css';
import { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import JobCard from './JobCard';
import { jobs } from './jobs';
import Folder from '../components/Folder';
import Notification from '../components/Notification';

const Experience = ({swiperIndex}) => {
    useEffect (() => {
        setIsCurrentSlide(swiperIndex === 1);
    }, [swiperIndex]) 
    const [currentZIndex, setCurrentZIndex] = useState(0);
    const [items, setItems] = useState(jobs);
    const [isCurrentSlide, setIsCurrentSlide] = useState(false);
    return (
        <div className='background'>
            <SectionTitle title="EXPERIENCE" color="#4BBEB9" setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} top="5%" right="60%" />
            {items.map((item, index) => (
                <JobCard currentZ={currentZIndex} setCurrentZ={setCurrentZIndex} job={item} allJobs={items} setJobs={setItems}/>
            ))}
            <Folder setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} items={items} setItems={setItems} file="text-file" folderTitle="Volunteer positions"/>
            {isCurrentSlide && (<Notification />)}
        </div>
    )
}

export default Experience;