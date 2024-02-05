import React from "react";

function DisplayMuseum (props) {

    return (
        <div id={props.museum.id}>
            <img src="" alt={props.museum.name}></img>
            <p>{props.museum.name} [{props.museum.location.city}, {props.museum.location.country}]</p>
            <p> Curator: {props.museum.curator.name} </p>
            <div>
                { props.museum.artList ? (
                    <ul>
                        {props.museum.artList.map((art) =>(
                            <li>{art.name} by {art.artist.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p> No art pieces yet </p>
                )}
            </div>
        </div>
    );
};

export default DisplayMuseum;