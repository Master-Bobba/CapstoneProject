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
                    View our Museums below
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