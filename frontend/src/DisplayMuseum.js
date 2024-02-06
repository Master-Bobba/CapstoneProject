import React from "react";
import { useMuseum } from "./MuseumContext";
import louvre from './images/louvre.jpg'

function DisplayMuseum (props) {
    
    // const endPoint = 'http://localhost:8080/museum/';
    const { updateMuseumList } = useMuseum();

    const handleDelete = async (event) =>{
        // document.getElementById(''+props.museum.id).remove();
        
        try {
            const options = {method:'DELETE'};
            const response = await fetch(process.env.REACT_APP_SPRING_URL + '/museum/' + props.museum.id, options);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
        updateMuseumList();
    }

    const handleEdit = (event) => {
        console.log("Render Edit component");
    }

    return (
        <div id={props.museum.id}>
            <img src={louvre} height="40px" alt={props.museum.name}></img>
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