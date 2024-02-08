import React from "react";
import './display.css';
import { useArtist } from "./ArtistContext";
import { useNavigate } from "react-router-dom";
import artistProfile from './images/artistProfile.jpg';



function ManageDisplayArtist(props) {

    const { updateArtistList } = useArtist();
    const navigate = useNavigate();

    const handleDelete = async (event) => {

        try {
            const options = { method: 'DELETE' };
            const response = await fetch(process.env.REACT_APP_SPRING_URL + '/artist/' + props.artist.id, options);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
        updateArtistList();
    }

    const handleEdit = (event, artist) => {
        navigate("/EditArtist", { state: artist });
    }


    return (
        <div id={props.artist.id} class="ArtistCard">
            <img src= { artistProfile } class="img"></img>
            <div class="polaroid">
                <p class="line" >{props.artist.name}</p>
                <p class="line" >Born: {props.artist.yearBorn}</p>

                {props.artist.yearDead === undefined ? (
                    <p class="line" >Still Alive</p>
                ) : (
                    <p class="line" >Died: {props.artist.yearDead}</p>
                )}

                <div>
                    {props.artist.artList.length !== 0 ? (
                        <div>
                            <p class="line">Art Pieces:</p>

                            {props.artist.artList.map((art) => (
                                <li class="line">{art.name}</li>
                            ))}
                        </div>
                    ) : (
                        <p class="line"> No art pieces yet </p>
                    )}
                </div>
            </div>
                <div class="buttons">
                    <button class="buttonArt" id="edit" onClick={(event) => { handleEdit(event, props.artist) }}> Edit </button>
                    <button class="buttonArt" id="delete" onClick={(event) => { handleDelete(event) }}> Delete </button>
                </div>
                
            
        </div>

    );
};

export default ManageDisplayArtist;