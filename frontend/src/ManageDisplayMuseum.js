import React from "react";
import { useMuseum } from "./MuseumContext";
import louvre from './images/louvre.jpg';
import louvre4 from './images/louvre4.jpeg';
import { useNavigate } from "react-router-dom";
import './display.css';

function ManageDisplayMuseum (props) {
    
    const { updateMuseumList } = useMuseum();
    const navigate = useNavigate();

    const handleDelete = async (event) =>{
        try {
            const options = {method:'DELETE'};
            const response = await fetch(process.env.REACT_APP_SPRING_URL + '/museum/' + props.museum.id, options);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
        updateMuseumList();
    }

    const handleEdit = (event, museum) => {
        navigate("/EditMuseum", { state: museum });
    }

    return (
        <div id={props.museum.id} class="MuseumCard">
            <img src={louvre4} class="imgMuseum" alt={props.museum.name}></img>
            <div class="polaroid">
                <p class="line" >{props.museum.name} [{props.museum.location.city}, {props.museum.location.country}]</p>
                <p class="line" > Curator: {props.museum.curator.name} </p>
                <div>
                    { props.museum.artList ? (
                        <ul>
                            {props.museum.artList.map((art) =>(
                                <li class="line" >{art.name} by {art.artist.name}</li>
                            ))}
                        </ul >
                    ) : (
                        <p class="line" > No art pieces yet </p>
                    )}
                </div>
            </div>
            
            <div class="buttons">
                <button class="buttonArt" id="edit" onClick={(event) => { handleEdit(event, props.museum)}}> Edit </button>
                <button class="buttonArt" id="delete" onClick={(event) => {handleDelete(event)}}> Delete </button>
            </div>
        </div>
    );
};

export default ManageDisplayMuseum;