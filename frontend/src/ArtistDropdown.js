import React from "react";
import { useArtist } from "./ArtistContext";
import DisplayArtistDropdown from "./DisplayArtistDropdown";

const ArtistDropdown = () => {

    const {artistData } = useArtist();

    return (
        <div class="form-label-styling">
            Artist: 
            {artistData ? (
                <select class="form-input" id="artist" name="artist">
                    <option value="defaultArtist">-select-</option>
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