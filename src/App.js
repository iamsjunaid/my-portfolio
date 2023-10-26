import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App bg-bgGray">
      <Navbar />
      <Homepage />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
