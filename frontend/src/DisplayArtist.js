import React from "react";
import './display.css';
import { useArtist } from "./ArtistContext";
import { useNavigate, navigation } from "react-router-dom";



function DisplayArtist(props) {

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
            <p>{props.artist.name}</p>
            <p>Born: {props.artist.yearBorn}</p>

            {props.artist.yearDead === undefined ? (
                <p>Still Alive</p>
            ) : (
                <p>Died: {props.artist.yearDead}</p>
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
                <button id="edit" onClick={(event) => { handleEdit(event, props.artist) }}> Edit </button>
                <button id="delete" onClick={(event) => { handleDelete(event) }}> Delete </button>
            </div>
        </div>

    );
};

export default DisplayArtist;