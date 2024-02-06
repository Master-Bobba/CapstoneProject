import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Art from './Art';
import Artists from './Artists';
import Museums from './Museums';

const Header = () => {
    return (
    
        <header class="header">
            <h2 class="header__logo">
                The Capstone Museum Group
            </h2>
            <nav>
                <ul class="nav__list">
                    <li class="nav__item">
                        <Link className='Art' to="/Art">Art</Link>
                    </li>
                    <li class="nav__item">
                        <Link className='Artists' to="/Artists">Artists</Link>
                    </li>
                    <li class="nav__item">
                        <Link className='Museums' to="/Museums">Museums</Link>
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
