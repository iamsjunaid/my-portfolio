import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';
import About from './components/About';

function App() {
  return (
    <div className="App bg-bgGray">
      <Navbar />
      <Homepage />
      <Portfolio />
      <About />
    </div>
  );
}

export default App;
