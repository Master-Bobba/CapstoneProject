import React from "react";
import './display.css';


const DisplayMuseumDropdown = (props) => {
    return(
        <div>
            <p id={props.museum.id}> {props.museum.name}</p>
        </div>
    );
};

export default DisplayMuseumDropdown;