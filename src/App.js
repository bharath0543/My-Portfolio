import './App.scss';
import {Routes,Route} from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Skills from './containers/skills';
import Resume from './containers/resume';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Navbar from './components/nav';

function App() {

  
  return (
    <div className="App">


      <Navbar/>
      <div className="App__main-page-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/skills" element={<Skills/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/resume" element={<Resume/>}/>
        <Route  path="/portfolio" element={<Portfolio/>}/>

      </Routes>

      </div>
     
      
    </div>
  );
}

export default App;
