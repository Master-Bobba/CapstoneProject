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

    const handleClick = () => { 
        updateArtList(); 
        updateArtistList();
        updateMuseumList();
    };
        
    
    return (
        <header class="header">
        <h2 class="header__logo">
            <Link id='homeButton' to="/">The Capstone Museum Group</Link> 
        </h2>
        <nav>
            <ul class="nav__list">
                <li class="nav__item">
                    <Link className='Art' to="/Art" onClick={handleClick}>Art </Link>
                </li>
                <li class="nav__item">
                    <Link className='Artists' to="/Artists" onClick={handleClick}>Artists</Link>
                </li>
                <li class="nav__item">
                    <Link className='Museums' to="/Museums" onClick={handleClick}>Museums</Link>
                </li>
                <li class="nav__item">
                    <Link className='CreateArt' to="/CreateArt" onClick={handleClick}>Create Art</Link>
                </li>
                <li class="nav__item">
                    <Link className='CreateArtist' to="/CreateArtist" onClick={handleClick}>Create Artist</Link>
                </li>
                <li class="nav__item">
                    <Link className='CreateMuseum' to="/CreateMusuem" onClick={handleClick}>Create Museum</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;
