import React from "react";
import { useArt } from "./ArtContext";

function DisplayArt(props) {

    const { updateArtList } = useArt();

    const handleDelete = async (event) => {
        try {
            const options = {method:'DELETE'};
            const response = await fetch(process.env.REACT_APP_SPRING_URL + '/art/' + props.art.id, options);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
        updateArtList();
    }

    const handleEdit = (event) => {
        console.log('Render edit component!');
    }
    
    return (
        <div id={props.art.id}>
            <p>Name: {props.art.name}</p>
            <p>Artist: {props.art.artist.name}</p>
            <p>Back story: {props.art.backStory}</p>
            <button id="delete" onClick={(event) => {handleDelete(event)}}>Delete</button>
            <button id="edit" onClick={(event) => { handleEdit(event)}}>Edit</button>

        </div>
    );    
}

export default DisplayArt;