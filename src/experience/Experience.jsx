import './styles.css';
import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import JobCard from './JobCard';
import { jobs } from './jobs';
import Folder from '../components/Folder';

const Experience = () => {
    const [currentZIndex, setCurrentZIndex] = useState(0);
    const [items, setItems] = useState(jobs);
    return (
        <div className='background'>
            <SectionTitle title="EXPERIENCE" color="#4BBEB9" setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} top="5%" right="60%" />
            {items.map((item, index) => (
                <JobCard currentZ={currentZIndex} setCurrentZ={setCurrentZIndex} job={item} allJobs={items} setJobs={setItems}/>
            ))}
            <Folder setCurrentZ={setCurrentZIndex} currentZ={currentZIndex} items={items} setItems={setItems} file="text-file" folderTitle="Volunteer positions"/>

        </div>
    )
}

export default Experience;