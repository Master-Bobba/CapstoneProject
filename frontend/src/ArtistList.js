import React, { useEffect, useState } from "react";
import DisplayArtist from "./DisplayArtist";

const ArtistList = () => {

    const [artistData, setArtistData] = useState(null);
    const endPoint = 'http://localhost:8080/artists';
    
    useEffect(() =>{
        const fetchArtists = async() => {
            try {
                setArtistData(
                    await fetch(endPoint)
                    .then((response) => response.json())
                )
            } catch (error){
                console.log('Some error fetching artists' + error);
            }
        }
        fetchArtists();
    }, []);


    return (
        <div >
            { artistData ? (
                <div class="display-container">
                    {artistData.map((artist) => (
                        <DisplayArtist artist= {artist}/>
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