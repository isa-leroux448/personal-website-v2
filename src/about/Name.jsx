import Header from "../components/Header";
import { useState } from "react";

const Name = ({ name, color, width, height, top, right, currentZ, setCurrentZ }) => {
    const [localZ, setLocalZ] = useState(0);
    return (
      <div className="name" style={{  top, right, backgroundColor: color, width, height, zIndex: localZ }}>
        <Header hasExit={false} currentZ={currentZ} setCurrentZ={setCurrentZ} setLocalZ={setLocalZ}/>
        <p className="name-text">{name}</p>
      </div>
    );
  };
  
export default Name;