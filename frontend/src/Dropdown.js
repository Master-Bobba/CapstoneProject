import React from 'react';
import { Link } from 'react-router-dom';
import { useArtist } from "./ArtistContext";
import { useMuseum } from './MuseumContext';
import { useArt } from './ArtContext';
import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {

    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

    const { updateArtistList } = useArtist();
    const { updateMuseumList } = useMuseum();
    const { updateArtList } = useArt();

    const handleClick = () => { 
        updateArtList(); 
        updateArtistList();
        updateMuseumList();
    };

    return (
      <ul class={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
        ))}
      </ul>
    );
  };
  
  export default Dropdown;