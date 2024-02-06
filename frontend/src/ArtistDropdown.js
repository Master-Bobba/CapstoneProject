import React from "react";
import { useArtist } from "./ArtistContext";
import DisplayArtistDropdown from "./DisplayArtistDropdown";

const ArtistDropdown = () => {

    const {artistData, setArtistData} = useArtist();

    return (
        <div >
            {artistData ? (
                <select class="form-input" id="artist" name="artist">
                    {artistData.map((artist) => (
                        <option>
                        <DisplayArtistDropdown artist={artist} />
                        </option>
                    ))}
                </select>
            ) : (
                <div>
                    Loading Artists...
                </div>
            )}
        </div>
    );
};

export default ArtistDropdown;