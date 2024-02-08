import React, { useEffect } from "react";
import ManageDisplayArtist from "./ManageDisplayArtist";
import { useArtist } from "./ArtistContext";

const ManageArtistList = () => {

    const { artistData, setArtistData } = useArtist();

    

    return (
        <div class="main-div-layout">
            {artistData ? (
                <div class="display-container">
                    {artistData.map((artist) => (
                        <ManageDisplayArtist artist={artist} />
                    ))}
                </div>
            ) : (
                <div>
                    Loading Artists...
                </div>
            )}
        </div>
    );
};

export default ManageArtistList;