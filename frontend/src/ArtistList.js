import React from "react";
import DisplayArtist from "./DisplayArtist";
import { useArtist } from "./ArtistContext";

const ArtistList = () => {

    const {artistData, setArtistData} = useArtist();

    return (
        <div>
            {artistData ? (
                <div class="display-container">
                    {artistData.map((artist) => (
                        <DisplayArtist artist={artist} />
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

export default ArtistList;