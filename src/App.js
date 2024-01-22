import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import Home from './components/Home';
import Resume from './components/Resume';
import ProjectList from './components/Project';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <ProjectList />
    </BrowserRouter>
  );
}

export default App;
