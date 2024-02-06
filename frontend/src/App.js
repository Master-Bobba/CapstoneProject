import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Art from './Art';
import Artists from './Artists';
import Museums from './Museums';
import CreateArt from './CreateArt';
import CreateArtist from './CreateArtist';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MuseumProvider } from './MuseumContext';



function App() {
  return (
    <MuseumProvider>
      <body class="container">
      <Header />
      <main class="background main">
        <div className="App" class="mainContent">
          <Routes>
            <Route path="/Art" element={<Art />} />
            <Route path="/Artists" element={<Artists />} />
            <Route path="/Museums" element={<Museums />} />
            <Route path="/CreateArt" element={<CreateArt />} />
            <Route path="/CreateArtist" element={<CreateArtist />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </body>
    </MuseumProvider>
    
  );
}

export default App;

