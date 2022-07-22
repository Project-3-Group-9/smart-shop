import React from 'react';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Cart from './components/Cart';
// import Contact from './components/Contact';
// import Project from './components/Project';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SignIN from './components/SignInPage';
function App() {
  return (
    <Router>
      <div className="App" >
        <Nav></Nav>
        <div className='bg-light' style={{height:"6px"}}></div>
      <Routes>
  <Route path="/" element={<HomePage/>} exact/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/login" element={<SignIN/>}/>
  {/* <Route path="/contact" element={<Contact/>}/>
  <Route path="/resume" element={<Resume/>}/> */}
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
