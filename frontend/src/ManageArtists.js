import React, { useEffect, useState } from "react";
import ManageArtistList from "./ManageArtistList";
import SearchBar from "./SearchBar";

const ManageArtists = () => {

   
    return (
        <div class="main-div-layout">
            <section class="page_title">
                <h2 class="page-title__header">
                    Colleague Hub - Manage Artists
                </h2>
                <h3 class="page-title__text">
                    Manage the artists featured in our Museums
                </h3>
                <SearchBar searchFor = "artist"/>
            </section>
            <div class="main-div-layout">
                <ManageArtistList />
            </div>
        </div>
    )
}

export default ManageArtists;