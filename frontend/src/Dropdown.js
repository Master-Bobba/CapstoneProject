import React from 'react';
import { Link } from 'react-router-dom';
import { useArtist } from "./ArtistContext";
import { useMuseum } from './MuseumContext';
import { useArt } from './ArtContext';

const Dropdown = ({ submenus, dropdown }) => {

    const { updateArtistList } = useArtist();
    const { updateMuseumList } = useMuseum();
    const { updateArtList } = useArt();

    const handleClick = () => { 
        updateArtList(); 
        updateArtistList();
        updateMuseumList();
    };

    return (
      <ul class={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <li key={index} class="menu-items">
            <Link class="nav__item__text" className={submenu.title} to={submenu.url} onClick={handleClick}>{submenu.title}</Link>

          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;