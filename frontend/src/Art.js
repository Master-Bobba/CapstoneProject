import React from "react";
import SearchBar from "./SearchBar";
import ArtList from "./ArtList";

const Art = () => {

    return(
        <div class="main-div-layout">
            <section class="page_title">
                <h2 class="page-title__header">
                    Art
                </h2>
                <h3 class="page-title__text">
                    Explore our extensive art collections below
                </h3>
                <SearchBar searchFor = "art"/>
            </section>
            <div class="main-div-layout">
                <ArtList />
            </div>
        </div>

    );
}

export default Art;