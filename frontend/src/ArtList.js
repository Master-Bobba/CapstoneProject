import React from "react";
import { useArt } from "./ArtContext";
import DisplayArt from "./DisplayArt"

const ArtList = () => {

    const { artData } = useArt();

    return(
        <div class="main-div-layout">
            { artData ? (
                <div class="display-container">
                    {artData.map((art) => (
                        <DisplayArt art = { art } />
                    ))}
                </div>
            ) : (
                <div>
                    Loading Art...
                </div>
            )}
        </div>

    );
};


export default ArtList;
