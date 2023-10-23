import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App bg-bgGray">
      <Navbar />
      <Homepage />
      <Portfolio />
    </div>
  );
}

export default App;
