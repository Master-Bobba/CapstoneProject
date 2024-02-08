import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import Dropdown from './Dropdown';
import { useArtist } from "./ArtistContext";
import { useMuseum } from './MuseumContext';
import { useArt } from './ArtContext';

const MenuItems = ({ items, depthLevel }) => {

    let ref = useRef();

    const { updateArtistList } = useArtist();
    const { updateMuseumList } = useMuseum();
    const { updateArtList } = useArt();

    const handleClick = () => { 
        updateArtList(); 
        updateArtistList();
        updateMuseumList();
    };

    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
      const handler = (event) => {
       if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
       }
      };
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);
      return () => {
       // Cleanup the event listener
       document.removeEventListener("mousedown", handler);
       document.removeEventListener("touchstart", handler);
      };
     }, [dropdown]);

     const onMouseEnter = () => {
      setDropdown(true);
     };
     
     const onMouseLeave = () => {
      setDropdown(false);
     };

  return (
    <li class="menu-items"  ref={ref} onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}
      onClick={() => setDropdown((prev) => !prev)}>
            {items.title}{' '}
            {depthLevel > 0 ? <span>&raquo;</span> : <span class="arrow" />}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel}/>
        </>
      ) : (
        <Link class="nav__item__text" className={items.title} to={items.url} onClick={handleClick}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;