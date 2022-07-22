import React from 'react';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
// import Resume from './components/Resume';
// import Contact from './components/Contact';
// import Project from './components/Project';
// import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App" >
        <Nav></Nav>
        <div className='bg-light' style={{height:"6px"}}></div>
      <Routes>
  <Route path="/" element={<HomePage/>} exact/>
  {/* <Route path="/about" element={<About/>}/>
  <Route path="/portfolio" element={<Project/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/resume" element={<Resume/>}/> */}
    </Routes>
    {/* <Footer/> */}
    </div>
    </Router>
  );
}

export default App;
