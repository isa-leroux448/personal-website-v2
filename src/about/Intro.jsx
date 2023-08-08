import Header from "../components/Header";
import { useState, useEffect } from "react";

const Intro = () => {
    const [cursorString, setCursorString] = useState('');
    useEffect(() => {
        setTimeout(() => {
            if (cursorString === '') {
                setCursorString('|');
              } else {
                setCursorString('');
              }
          }, 1000);
      }, [cursorString]);
      
    return (
        <div className="intro">
            <Header hasExit={true} />
            <div style={{ display: 'flex', height: '20px'}}>
                <p className="intro-text">Hi my name is&nbsp;&nbsp;</p>
                <p className="cursor">{cursorString}</p>
            </div>
        </div>
    );
}
export default Intro;