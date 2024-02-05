import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Art from './Art';
import Artists from './Artists';
import Museums from './Museums';

function App() {
  return (
    <div className="App">
      <nav className="Navbar">
        <ul className='NavList'>
        <li>
            <Link className='NavLink' to="/Art">Art</Link>
          </li>
          <li>
            <Link className='NavLink' to="/Artists">Artists</Link>
          </li>
          <li>
            <Link className='NavLink' to="/Museums">Museums</Link>
          </li>
        </ul>
        </nav>
      <Routes>
        <Route path="/Art" element={<Art />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/Museums" element={<Museums />} />
      </Routes>
      
    </div>
  );
}

export default App;
