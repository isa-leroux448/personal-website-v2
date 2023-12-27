import NavBar from "./components/NavBar";
import './App.css';
import About from "./about/About";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Mousewheel } from "swiper/modules";

function App() {
  const swiperRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const swiperContainerStyle = {
    height: '100vh',
  };
  
  const navigateToSlide = (slideIndex) => {
    // const divIds = ["about", "experience", "skills", "projects"];
    if (swiperRef.current) {
      swiperRef.current.slideTo(slideIndex);
            // window.location.hash = `${divIds[slideIndex]}`;
    }
  };

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <NavBar navigateToSlide={navigateToSlide}/>
      <Swiper
        direction="vertical"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel]}
        style={swiperContainerStyle}
        allowTouchMove={false}
        onSlideChange={() => setCurrentSlide(swiperRef.current?.activeIndex)}
      >
        <SwiperSlide style={{height:"100vh"}}><About /></SwiperSlide>
        <SwiperSlide style={{height:"100vh"}}><Experience swiperIndex={currentSlide}/></SwiperSlide>
        <SwiperSlide style={{height:"100vh"}}><Skills /></SwiperSlide>
        <SwiperSlide style={{height:"100vh"}}><Projects /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
