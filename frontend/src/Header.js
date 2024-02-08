import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useArtist } from "./ArtistContext";
import { useMuseum } from './MuseumContext';
import { useArt } from './ArtContext';
import account from './images/account.svg';
import groupLogoTwo from './images/groupLogoTwo.svg';
import Navbar from './Navbar'

const Header = () => {
          
    return (
        <header class="header">
        <h2 class="header__logo">
            <Link id='homeButton' to="/"><img class="groupLogo" src={ groupLogoTwo }/>       The Capstone Museum Group</Link> 
        </h2>
        <Navbar />
        
    </header>
    )
}

export default Header;
