import React from "react";
import SearchBar from "./SearchBar";
import ArtList from "./ArtList";

const Art = () => {

    return(
        <div class="main-div-layout">
            <h1>
                Art
            </h1>
            <div class="main-div-layout">
                <SearchBar searchFor = "art"/>
                <ArtList />
            </div>
        </div>

    );
}

export default Art;