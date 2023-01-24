import './App.css';
import Header from './components/Header';
import Btn from './components/Btn';
import ModeToggler from './components/ModeToggler';
import InputComponent from './components/InputComponent';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="nav-item">
          HomePage
        </Link>
        <Link to="/about" className="nav-item">
          AboutMe
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
      <Header name="Ana" />
      <Header name="Shawn" />
      <Btn />
      <ModeToggler />
      <InputComponent />
    </div>
  );
}

export default App;
