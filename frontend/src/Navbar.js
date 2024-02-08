import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useArtist } from "./ArtistContext";
import { useMuseum } from './MuseumContext';
import { useArt } from './ArtContext';
import account from './images/account.svg';

const Navbar = () => {

    const { updateArtistList } = useArtist();
    const { updateMuseumList } = useMuseum();
    const { updateArtList } = useArt();

    const handleClick = () => { 
        updateArtList(); 
        updateArtistList();
        updateMuseumList();
    };
        
    
    return(
        <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item">
                        <Link class="nav__item__text" className='Art' to="/Art" onClick={handleClick}>Art </Link>
                    </li>
                    <li class="nav__item">
                        <Link class="nav__item__text" className='Artists' to="/Artists" onClick={handleClick}>Artists</Link>
                    </li>
                    <li class="nav__item">
                        <Link class="nav__item__text" className='Museums' to="/Museums" onClick={handleClick}>Museums</Link>
                    </li>
                    <li class="nav__item">
                        <Link class="nav__item__text" className='CreateArt' to="/CreateArt" onClick={handleClick}>Create Art</Link>
                    </li>
                    <li class="nav__item">
                        <Link class="nav__item__text" className='CreateArtist' to="/CreateArtist" onClick={handleClick}>Create Artist</Link>
                    </li>
                    <li class="nav__item">
                        <Link class="nav__item__text" className='CreateMuseum' to="/CreateMusuem" onClick={handleClick}>Create Museum</Link>
                    </li>
                    <li class="nav__item">
                        <Link class="nav__item__text" className='CreateMuseum' to="/CreateMusuem" onClick={handleClick}><img class="nav__svg-logo" src={ account }/></Link>
                    </li>
                </ul>
            </nav>
    );
}

export default Navbar;
