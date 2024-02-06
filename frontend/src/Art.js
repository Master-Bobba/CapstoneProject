import React from "react";
import SearchBar from "./SearchBar";
import ArtList from "./ArtList";

const Art = () => {

    return(
        <div class="main-div-layout">
            <h3>
                Museums
            </h3>
            <SearchBar searchFor = "art"/>
            <ArtList />
        </div>

    );
}

export default Art;