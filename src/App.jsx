import NavBar from "./components/NavBar";
import './App.css';
import About from "./about/About";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Mousewheel } from "swiper/modules";

function App() {
  const swiperRef = useRef();
  window.location.hash = `about`;

  const swiperContainerStyle = {
    height: '100vh',
  };

  const navigateToSlide = (slideIndex) => {
    const divIds = ["about", "experience", "skills", "projects"];
    if (swiperRef.current) {
      swiperRef.current.slideTo(slideIndex);
      window.location.hash = `${divIds[slideIndex]}`;
    }
  };

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <NavBar navigateToSlide={navigateToSlide}/>
      <Swiper
        direction="vertical"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          console.log(swiperRef.current.slides.length);
        }}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel]}
        style={swiperContainerStyle}
      >
        <SwiperSlide id="about" style={{height:"100vh"}}><About /></SwiperSlide>
        <SwiperSlide id="experience" style={{height:"100vh"}}><Experience /></SwiperSlide>
        <SwiperSlide id="skills" style={{height:"100vh"}}><Skills /></SwiperSlide>
        <SwiperSlide id="projects" style={{height:"100vh"}}><Projects /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
