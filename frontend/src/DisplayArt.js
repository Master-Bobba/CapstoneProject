import React from "react";
import './display.css';
import { useArt } from "./ArtContext";
import { useNavigate } from "react-router-dom";

function DisplayArt(props) {

    const { updateArtList } = useArt();
    const navigate = useNavigate();

    const handleDelete = async (event) => {
        try {
            const options = {method:'DELETE'};
            const response = await fetch(process.env.REACT_APP_SPRING_URL + '/art/' + props.art.id, options);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
        updateArtList();
    }

    const handleEdit = (event, art) => {
        console.log('Render edit component!');
        navigate("/EditArt", { state: art });
    }
    
    return (
        <div id={props.art.id}>
            <p>Name: {props.art.name}</p>
            <p>Artist: {props.art.artist.name}</p>
            <p>Back story: {props.art.backStory}</p>
            <button id="edit" onClick={(event) => { handleEdit(event, props.art)}}>Edit</button>
            <button id="delete" onClick={(event) => {handleDelete(event)}}>Delete</button>
        </div>
    );    
}

export default DisplayArt;