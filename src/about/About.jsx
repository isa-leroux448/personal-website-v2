import Intro from './Intro';
import './styles.css';
import Name from './Name'
import Welcome from './Welcome';
import Card from './Card';
import { useState } from 'react';

const About = () => {
    const [currentZIndex, setCurrentZIndex] = useState(0);
    return (
        <div className='background'>
            <Intro currentZ={currentZIndex} setCurrentZ={setCurrentZIndex} />
            <Name name="ISABELLA" width="32vw" height="10vw" color="#4BBEB9" top="30%" right="40%" currentZ={currentZIndex} setCurrentZ={setCurrentZIndex} />
            <Name name="LEROUX" width="28vw" height="10vw" color="#FF8B8B" top="49%" right="30%" currentZ={currentZIndex} setCurrentZ={setCurrentZIndex} />
            <Welcome currentZ={currentZIndex} setCurrentZ={setCurrentZIndex}/>
            <Card text="Developer" top="4%" right="75%" currentZ={currentZIndex} setCurrentZ={setCurrentZIndex}/>
            <Card text="UBC Computer Science Student" top="60%" right="70%" currentZ={currentZIndex} setCurrentZ={setCurrentZIndex}/>
            <Card text="Designer" top="10%" right="5%" currentZ={currentZIndex} setCurrentZ={setCurrentZIndex}/>
        </div>
    )
}

export default About;