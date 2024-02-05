import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Art from './Art';
import Artists from './Artists';
import Museums from './Museums';
import CreateArt from './CreateArt';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/Art" element={<Art />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/Museums" element={<Museums />} />
        <Route path="/CreateArt" element={<CreateArt />} />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
