import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useArtist } from "./ArtistContext";
import { useMuseum } from './MuseumContext';
import { useArt } from './ArtContext';



const Header = () => {

    const { updateArtistList } = useArtist();
    const { updateMuseumList } = useMuseum();
    const { updateArtList } = useArt();

    const handleArtClick = () => { updateArtList(); };
    const handleArtistsClick = () => { updateArtistList(); };
    const handleMuseumsClick = () => { updateMuseumList(); };
    
    
    return (
        <header class="header">
        <h2 class="header__logo">
            <Link id='homeButton' to="/">The Capstone Museum Group</Link> 
        </h2>
        <nav>
            <ul class="nav__list">
                <li class="nav__item">
                    <Link className='Art' to="/Art" onClick={handleArtClick}>Art </Link>
                </li>
                <li class="nav__item">
                    <Link className='Artists' to="/Artists" onClick={handleArtistsClick}>Artists</Link>
                </li>
                <li class="nav__item">
                    <Link className='Museums' to="/Museums" onClick={handleMuseumsClick}>Museums</Link>
                </li>
                <li class="nav__item">
                    <Link className='CreateArt' to="/CreateArt">Create Art</Link>
                </li>
                <li class="nav__item">
                    <Link className='CreateArtist' to="/CreateArtist">Create Artist</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;
