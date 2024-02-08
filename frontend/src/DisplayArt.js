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
        navigate("/EditArt", { state: art });
    }
    
    return (
        <div id={props.art.id} class="ArtistCard">
            <img src={props.art.url} class="img"></img>
            <div class="polaroid">
                <p class="line"> {props.art.name}, {props.art.artist.name} </p>
                <p class="line">Displayed in {props.art.museum.name}</p>
                <p class="line">{props.art.backStory}</p>
            </div>
            <div class="buttons">
                <button class="buttonArt" id="edit" onClick={(event) => { handleEdit(event, props.art)}}>Edit</button>
                <button class="buttonArt" id="delete" onClick={(event) => {handleDelete(event)}}>Delete</button>
            </div>
       </div>
    );    
}

export default DisplayArt;