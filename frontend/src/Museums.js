import React from "react";
import MuseumList from "./MuseumList";
import SearchBar from "./SearchBar";

const Museums = () => {

    return (
        <div class="main-div-layout">
            <h3>
                Museums
            </h3>
            <SearchBar searchFor = "museum"/>
            <h5>
                Select a Museum to view opening hours, address & contact details;
                purchase ticket; or find out a little more about the art collections.
            </h5>
            <MuseumList />
        </div>
        
    );
}

export default Museums;