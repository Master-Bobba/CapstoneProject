import React from "react";
import SearchBar from "./SearchBar";
import ManageArtList from "./ManageArtList";

const ManageArt = () => {

    return(
        <div class="main-div-layout">
            <section class="page_title">
                <h2 class="page-title__header">
                    Colleague Hub - Manage Art
                </h2>
                <h3 class="page-title__text">
                    Manage our collections using this page
                </h3>
                <SearchBar searchFor = "art"/>
            </section>
            <div class="main-div-layout">
                <ManageArtList />
            </div>
        </div>

    );
}

export default ManageArt;