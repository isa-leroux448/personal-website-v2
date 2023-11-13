import { useState, useCallback} from "react";
import {motion, useDragControls} from 'framer-motion';
import Header from "../components/Header";
import ReactPlayer from 'react-player';
import {projects} from './project-data';

const VideoPlayer = ({ currentZ, setCurrentZ }) => {
    const [localZ, setLocalZ] = useState(0);
    const [open, setOpen] = useState(true);
    const handleClose = useCallback(() => {
      setOpen(false);
    }, []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentProject, setCurrentProject] = useState(projects[0]);
    const [loading, setLoading] = useState(false);
  
    const dragControls = useDragControls();

    const selectProject = (index) => {
      setLoading(true);
      currentProject.selected = false;
      projects[index].selected = true;
      setCurrentIndex(index);
      setCurrentProject(projects[index]);
    }

    const handlePlayerReady = () => {
      console.log("hello");
      setLoading(false);
    };
  
    return (
      open && (
        <motion.div
          drag
          dragControls={dragControls}
          dragMomentum={false}
          dragListener={false}
          className="video-container"
          style={{ zIndex: localZ }}
        >
          <Header
            hasExit={true}
            title="Web Projects"
            handleClose={handleClose}
            currentZ={currentZ}
            setCurrentZ={setCurrentZ}
            setLocalZ={setLocalZ}
            dragControls={dragControls}
          />
          <div style={{width: '100%', display: "flex", flexGrow: 1}}>
          <div style={{width: '75%', display: "flex", flexDirection: "column"}}>
              <div style={{backgroundColor: '#121619', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '65%', position: 'relative'}}>
                  {loading && <img style={{maxHeight: '25%', position: 'absolute', top: '40%', left: '45%'}} src={require('../assets/loading.gif')} alt="Loading" />}
                  <ReactPlayer url={currentProject?.videoLink} width='100%' height='100%' controls={true} onReady={handlePlayerReady} style={{visibility: loading ? 'hidden':'visible'}}/>
                </div>
                <div style={{backgroundColor: 'white', display: "flex", flex: 1, flexDirection: "column"}}>
                {projects.map((project, index) => (
                <div onClick={() => selectProject(index)} key={index} style={{padding: '3px', paddingLeft: '10px', border: '0.5px solid black', backgroundColor: project.selected ? '#FF8B8B': 'white'}}>{project.title}</div>))}
                </div>
            </div>
            <div style={{backgroundColor: 'white', width: '25%'}}>
              <h3 style={{padding: '10px', marginBottom: '5px'}}>{currentProject?.title}</h3>
              <div style={{padding: '10px', paddingTop: '0px'}}>{currentProject?.description}</div>
              <div>
                <h4 style={{padding: '10px', paddingBottom: '0px', marginBottom: '10px'}}>Tags</h4>
                {currentProject?.tags.map((tag, index) => (
                  <div style={{paddingLeft: '10px', paddingRight: '10px'}}>{tag}</div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )
    );
  };
  
  export default VideoPlayer;