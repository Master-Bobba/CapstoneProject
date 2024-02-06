import React from "react";
import './display.css';

function DisplayArtistDropdown(props) {
    return (
        <div >
            <p id={props.artist.id} >{props.artist.name}</p>
        </div>
    );
};

export default DisplayArtistDropdown;