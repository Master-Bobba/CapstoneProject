import React from "react";
import './display.css';


function DisplayArtist(props) {

    return (
            <div id={props.artist.id} class="ArtistCard">
                <p>{props.artist.name}</p>
                <p>Born: {props.artist.yearBorn}</p>

                {props.artist.yearDead === undefined ? (
                    <p>Still Alive</p>
                ) : (
                    <p>Died: {props.artist.yearDead != undefined}</p>
                )}

                <div>
                    {props.artist.artList.length !== 0 ? (
                        <div>
                            <p>Art Pieces:</p>

                            {props.artist.artList.map((art) => (
                                <li>{art.name}</li>
                            ))}
                        </div>
                    ) : (
                        <p> No art pieces yet </p>
                    )}
                </div>

            </div>
    );
};

export default DisplayArtist;