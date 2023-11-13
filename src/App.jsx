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

  const swiperContainerStyle = {
    height: '100vh',
  };

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <NavBar />
      <Swiper
        direction="vertical"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel]}
        style={swiperContainerStyle}
      >
        <SwiperSlide><About /></SwiperSlide>
        <SwiperSlide><Experience /></SwiperSlide>
        <SwiperSlide><Skills /></SwiperSlide>
        <SwiperSlide><Projects /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
