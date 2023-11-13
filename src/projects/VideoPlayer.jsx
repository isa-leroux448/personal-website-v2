import { useState, useCallback, useRef} from "react";
import {motion, useDragControls} from 'framer-motion';
import Header from "../components/Header";
import ReactPlayer from 'react-player';
import {projects} from './project-data';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const VideoPlayer = ({ currentZ, setCurrentZ }) => {
    const [localZ, setLocalZ] = useState(0);
    const [open, setOpen] = useState(true);
    const handleClose = useCallback(() => {
      setOpen(false);
    }, []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentProject, setCurrentProject] = useState(projects[0]);

    const dragControls = useDragControls();
    
    const swiperRef = useRef();

    const selectProject = (newIndex) => {
      const difference = newIndex - currentIndex;
      if (difference > 0) {
        for (let i = 0; i < difference; i++) {
          swiperRef.current.slideNext();
        }
      }
      if (difference < 0) {
        for (let i = 0; i < difference*(-1); i++) {
          swiperRef.current.slidePrev();
        }
      }
      currentProject.selected = false;
      projects[newIndex].selected = true;
      setCurrentIndex(newIndex);
      setCurrentProject(projects[newIndex]);
    }

    const swipeNext = () => {
      const newIndex = currentIndex+1;
      currentProject.selected = false;
      projects[newIndex].selected = true;
      setCurrentIndex(newIndex);
      setCurrentProject(projects[newIndex]);
    }

    const swipeBack = () => {
      const newIndex = currentIndex-1;
      currentProject.selected = false;
      projects[newIndex].selected = true;
      setCurrentIndex(newIndex);
      setCurrentProject(projects[newIndex]);
    }
  
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
                  <Swiper
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  modules={[Navigation]}
                  style={{ height: '100%' }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                >
                  {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                      <ReactPlayer
                        url={project?.videoLink}
                        width='100%'
                        height='100%'
                        controls={true}
                      />
                    </SwiperSlide>
                  ))}
                  <div className="swiper-button-next" onClick={() => swipeNext()} style={{ color: '#ECECEC' }}></div>
                  <div className="swiper-button-prev" onClick={() => swipeBack()} style={{ color: '#ECECEC' }}></div>
                </Swiper>
                </div>
                <div style={{backgroundColor: 'white', display: "flex", flex: 1, flexDirection: "column"}}>
                {projects.map((project, index) => (
                <div onClick={() => selectProject(index)} key={index} style={{padding: '3px', paddingLeft: '10px', border: '0.5px solid black', backgroundColor: project.selected ? '#FF8B8B': 'white', cursor: 'pointer'}}>{project.title}</div>))}
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