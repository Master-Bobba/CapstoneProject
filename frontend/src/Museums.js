import React from "react";
import MuseumList from "./MuseumList";
import SearchBar from "./SearchBar";

const Museums = () => {

    return (
        <div class="main-div-layout">
            <section class="page_title">
                <h2 class="page-title__header">
                Museums
                </h2>
                <h3 class="page-title__text">
                    Select a Museum to view opening hours, address & contact details;
                    purchase tickets; or, find out a little more about the art collections.
                </h3>
                <SearchBar searchFor = "museum"/>
            </section>
            <div class="main-div-layout">
                <MuseumList />
            </div>
        </div>
        
    );
}

export default Museums;