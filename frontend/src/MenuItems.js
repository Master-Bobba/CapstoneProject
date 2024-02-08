import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Dropdown from './Dropdown';
import { useArtist } from "./ArtistContext";
import { useMuseum } from './MuseumContext';
import { useArt } from './ArtContext';

const MenuItems = ({ items }) => {

    const { updateArtistList } = useArtist();
    const { updateMuseumList } = useMuseum();
    const { updateArtList } = useArt();

    const handleClick = () => { 
        updateArtList(); 
        updateArtistList();
        updateMuseumList();
    };

    const [dropdown, setDropdown] = useState(false);

  return (
    <li class="menu-items">
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}
      onClick={() => setDropdown((prev) => !prev)}>
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown}/>
        </>
      ) : (
        <Link class="nav__item__text" className={items.title} to={items.url} onClick={handleClick}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;