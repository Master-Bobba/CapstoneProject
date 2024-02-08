import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Art from './Art';
import Artists from './Artists';
import Museums from './Museums';
import CreateArt from './CreateArt';
import CreateArtist from './CreateArtist';
import CreateMuseum from './CreateMuseum';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MuseumProvider } from './MuseumContext';
import { ArtistProvider } from './ArtistContext';
import { ArtProvider } from './ArtContext';
import Home from './Home';
import EditArtist from './EditArtist';
import EditMuseum from './EditMuseum';
import EditArt from './EditArt';
import AboutUs from './AboutUs';
import ManageArt from './ManageArt';
import ManageArtists from './ManageArtists';
import ManageMuseums from './ManageMuseums';

function App() {
  return (
    <MuseumProvider>
      <ArtistProvider>
        <ArtProvider>
          <div class="container">
            <Header />
              <main class="background main">
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/CreateMuseum" element={<CreateMuseum />} />
                  <Route path="/Art" element={<Art />} />
                  <Route path="/Artists" element={<Artists />} />
                  <Route path="/Museums" element={<Museums />} />
                  <Route path="/CreateArt" element={<CreateArt />} />
                  <Route path="/CreateArtist" element={<CreateArtist />} />
                  <Route path="/CreateMusuem" element={<CreateMuseum />} />
                  <Route path="/EditArtist" element={<EditArtist /> } />
                  <Route path="/EditMuseum" element={<EditMuseum /> } />
                  <Route path="/EditArt" element={<EditArt /> } />
                  <Route path="/AboutUs" element={<AboutUs />} />
                  <Route path="/ManageArt" element={<ManageArt />} />
                  <Route path="/ManageArtists" element={<ManageArtists />} />
                  <Route path="/ManageMuseums" element={<ManageMuseums />} />
                </Routes>
              </main>
            <Footer />
          </div>
        </ArtProvider>
      </ArtistProvider>
    </MuseumProvider>

  );
}

export default App;

