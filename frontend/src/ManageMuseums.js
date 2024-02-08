import React from "react";
import ManageMuseumList from "./ManageMuseumList";
import SearchBar from "./SearchBar";

const ManageMuseums = () => {

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
                <ManageMuseumList />
            </div>
        </div>
        
    );
}

export default ManageMuseums;