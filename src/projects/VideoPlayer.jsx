import { useState, useCallback, useRef} from "react";
import {motion, useDragControls} from 'framer-motion';
import Header from "../components/Header";
import ReactPlayer from 'react-player';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { mediaType } from "./web-projects";

const VideoPlayer = ({ currentZ, setCurrentZ, items, playerFiles, setItems, index }) => {
    const [localZ, setLocalZ] = useState(1);
    const [open, setOpen] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentProject, setCurrentProject] = useState(items[0]);

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
      items[newIndex].selected = true;
      setCurrentIndex(newIndex);
      setCurrentProject(items[newIndex]);
    }

    const swipeNext = () => {
      const newIndex = currentIndex+1;
      currentProject.selected = false;
      items[newIndex].selected = true;
      setCurrentIndex(newIndex);
      setCurrentProject(items[newIndex]);
    }

    const swipeBack = () => {
      const newIndex = currentIndex-1;
      currentProject.selected = false;
      items[newIndex].selected = true;
      setCurrentIndex(newIndex);
      setCurrentProject(items[newIndex]);
    }

    const handleClose = useCallback(() => {
      setOpen(false);
      setLocalZ(currentZ + 1);
      setCurrentZ(currentZ + 1);
      const updatedItems = playerFiles.map(item => {
        if (item === playerFiles[index]) {
            return { ...item, show: false };
        }
        return item;
    });
    setItems(updatedItems);
    }, [playerFiles]);
  
    return (
      open && (
        <motion.div
          drag
          dragControls={dragControls}
          dragMomentum={false}
          dragListener={false}
          className="video-container"
          style={{ zIndex: localZ, left: playerFiles[index].left, top: playerFiles[index].top }}
        >
          <Header
            hasExit={true}
            title={playerFiles[index].heading1}
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
                {items.map((project, index) => (
                  <SwiperSlide key={index}>
                    {project.type === mediaType.VIDEO ? (
                      <ReactPlayer
                        url={project?.link}
                        width='100%'
                        height='100%'
                        controls={true}
                      />
                    ) : project.type === mediaType.FIGMA ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={project?.link}
                        allowFullScreen
                        title="Embedded Video"
                      />
                    ) : project.type === mediaType.IMAGE ? (
                      <div>
                        <img
                        src={require(`../assets/${project?.image}.png`)}
                        width='100%'
                        height='100%'
                        alt="Project Image"
                      />
                      <a href={project?.link} target="_blank"><button className="visit-button">Click to visit</button></a>
                      </div>
                    ) : null}
                  </SwiperSlide>
                ))}
                  <div className="swiper-button-next" onClick={() => swipeNext()} style={{ color: '#ECECEC' }}></div>
                  <div className="swiper-button-prev" onClick={() => swipeBack()} style={{ color: '#ECECEC' }}></div>
                </Swiper>
                </div>
                <div style={{backgroundColor: 'white', display: "flex", flex: 1, flexDirection: "column"}}>
                {items.map((project, index) => (
                <div onClick={() => selectProject(index)} key={index} style={{padding: '3px', paddingLeft: '10px', border: '0.5px solid black', backgroundColor: project.selected ? '#FF8B8B': 'white', cursor: 'pointer'}}>{project.title}</div>))}
                </div>
            </div>
            <div style={{backgroundColor: 'white', width: '25%'}}>
              <h3 style={{padding: '10px', marginTop: '5px'}}>{currentProject?.title}</h3>
              <p className="subtitle">{currentProject?.subtitle}</p>
              <div className="description">{currentProject?.description}</div>
              <p style={{padding: '10px', marginBottom: '0px', marginTop: '0px', fontSize: '16px', fontWeight: '550'}}>Check it out:</p>
              {currentProject?.relatedLink[0] && (<a href = {currentProject?.relatedLink[0]}><p style={{padding: '10px', paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px' }}>GitHub</p></a>)}
              {currentProject?.relatedLink[1] && (<a href = {currentProject?.relatedLink[1]}><p style={{padding: '10px', paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px' }}>Devpost</p></a>)}
              <div>
                <h4 style={{padding: '10px', paddingBottom: '0px', marginBottom: '10px'}}>Tags</h4>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {currentProject?.tags.map((tag, index) => (
                  <div style={{paddingLeft: '7px', paddingRight: '7px', margin: '2px', marginRight: '5px', marginLeft: '5px', backgroundColor: '#FBD6D0', borderRadius: '10px'}}>{tag}</div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    );
  };
  
  export default VideoPlayer;