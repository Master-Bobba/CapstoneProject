import React from "react";

function ArtDisplay(artData) {
    
    return(
    artData ? (
        <div>
            <div>
                {artData.map((art) => (
                    <div key={art.id}>
                        <div>
                        <p>ID: {art.id}</p>
                        <p>Name: {art.name}</p>
                        <p>Back story: {art.backstory}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <p>Loading...</p>
    )
    )
}

export default ArtDisplay;