import React from "react";
import { useArt } from "./ArtContext";
import ManageDisplayArt from "./ManageDisplayArt"

const ManageArtList = () => {

    const { artData } = useArt();

    return(
        <div class="main-div-layout">
            { artData ? (
                <div class="display-container">
                    {artData.map((art) => (
                        <ManageDisplayArt art = { art } />
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


export default ManageArtList;