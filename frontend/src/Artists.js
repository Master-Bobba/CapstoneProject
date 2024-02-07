import React, { useEffect, useState } from "react";
import ArtistList from "./ArtistList";
import SearchBar from "./SearchBar";

const Artists = () => {

   
    return (
        <div class="main-div-layout">
            <section class="page_title">
                <h2 class="page-title__header">
                    Artists
                </h2>
                <h3 class="page-title__text">
                    Learn about the artists featured in our Museums
                </h3>
                <SearchBar searchFor = "artist"/>
            </section>
            <div class="main-div-layout">
                <ArtistList />
            </div>
        </div>
    )
}

export default Artists;