import React from "react";
import { update } from "./DisplayMuseum";


function DisplayMuseum (props) {
    
    const endPoint = 'http://localhost:8080/museum/';

    const handleDelete = async (event) =>{
        try {
            const options = {method:'DELETE'};
            const response = await fetch(endPoint + props.museum.id, options);
            // const data = await response.json();
            // console.log(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }

    const handleEdit = (event) => {
        console.log("Render Edit component");
    }

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
            <button id="edit" onClick={(event) => { handleEdit(event)}}> Edit </button>
            <button id="delete" onClick={(event) => {handleDelete(event)}}> Delete </button>
        </div>
    );
};

export default DisplayMuseum;