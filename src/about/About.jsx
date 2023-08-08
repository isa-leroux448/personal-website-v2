import Intro from './Intro';
import './styles.css';
import Name from './Name'
import Welcome from './Welcome';
import Card from './Card';

const About = () => {
    return (
        <div className='background'>
            <Intro/>
            <Name name="ISABELLA" width="32vw" height="10vw" color="#4BBEB9" top="30%" right="40%"/>
            <Name name="LEROUX" width="28vw" height="10vw" color="#FF8B8B" top="49%" right="30%"/>
            <Welcome/>
            <Card text="Developer" top="4%" right="75%"/>
            <Card text="UBC Student" top="60%" right="70%"/>
            <Card text="Design Enthusiast" top="10%" right="5%"/>
        </div>
    )
}

export default About;