import React, { useEffect, useState } from "react";
import ArtistList from "./ArtistList";
import SearchBar from "./SearchBar";

const Artists = () => {

   
    return (
        <div class="main-div-layout">
            <h1>
                Artists
            </h1>
            <div >
                <SearchBar searchFor = "artist"/>
                <ArtistList />
            </div>
        </div>
    )
}

export default Artists;