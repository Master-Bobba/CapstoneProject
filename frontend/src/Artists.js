import React, { useEffect, useState } from "react";
import ArtistList from "./ArtistList";

const Artists = () => {
       
    return (
        <div class="main-div-layout">
            <h1>
                Artists
            </h1>
            <div >
            <ArtistList />
            </div>
        </div>
    )
}

export default Artists;