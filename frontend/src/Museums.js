import React from "react";
import MuseumList from "./MuseumList";
import SearchBar from "./SearchBar";

const Museums = () => {

    return (
        <div class="main-div-layout">
            <h2>
                Museums
            </h2>
            <SearchBar searchFor = "museum"/>
            <h3>
                Select a Museum to view opening hours, address & contact details;
                purchase tickets; or find out a little more about the art collections.
            </h3>
            <MuseumList />
        </div>
        
    );
}

export default Museums;