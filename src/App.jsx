import NavBar from "./components/NavBar";
import './App.css';
import About from "./about/About"
import Skills from "./skills/Skills";

function App() {
  return (
    <div style={{width: '100%'}}>
        <NavBar/>
        {/* <About/> */}
        <Skills/>
    </div>
  )
}

export default App;