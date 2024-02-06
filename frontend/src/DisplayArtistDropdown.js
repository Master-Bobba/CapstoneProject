import React from "react";
import './display.css';
import { useArtist } from "./ArtistContext";



function DisplayArtistDropdown(props) {

    const { updateArtistList } = useArtist();

    return (
        <div >
            <p id={props.artist.id} >{props.artist.name}</p>
        </div>

    );
};

export default DisplayArtistDropdown;