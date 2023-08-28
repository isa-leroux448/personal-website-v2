import NavBar from "./components/NavBar";
import './App.css';
import About from "./about/About"
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";

function App() {
  return (
    <div style={{width: '100%'}}>
        <NavBar/>
        {/* <About/> */}
        <Experience />
        {/* <Skills/> */}
    </div>
  )
}

export default App;