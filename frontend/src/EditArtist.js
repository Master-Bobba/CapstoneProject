import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useArtist } from "./ArtistContext";



const EditArtist = () => {

    const { updateArtistList } = useArtist();
    const location = useLocation();
    const artist = location.state;

    useEffect(()=>{

        document.getElementById('artistName').value = artist.name;
        document.getElementById('yearBorn').value = artist.yearBorn;
        document.getElementById('yearDied').value = artist.yearDead;

    },[]);


    const handleSubmit = (event) => {
        event.preventDefault();
        const endPoint = process.env.REACT_APP_SPRING_URL + '/artist';

        fetch(endPoint, {
            method: 'put',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                "id": artist.id,
                "name": document.querySelector('#artistName').value,
                "yearBorn": parseInt(document.querySelector('#yearBorn').value),
                "yearDead": parseInt(document.querySelector('#yearDied').value)
            })
        });
        updateArtistList();
        document.getElementById("artistForm").reset();
        document.getElementById("artistMessageLabel").innerHTML = "Artist Successfully Updated.";
        
    }

    return (
        <div class="main-div-layout">
        <section class="page_title">
                <h2 class="page-title__header">
                    Colleague Hub - Artist Management Form
                </h2>
                <h3 class="page-title__text">
                    Use the form below to edit existing artists within the museum database.
                </h3>
        </section>
        <div class="main-div-layout">
            <form class="form-card-background" id="artistForm" onSubmit={(event) => { handleSubmit(event)}}>
                <div class="form-card">
                    <label class="form-label-styling-width">
                    <div class="form-label-styling">
                    Artist Name: 
                    <input class="form-input" id= "artistName" name="name" type="text"/>
                    </div>
                    </label>
                    <br />
                    <label class="form-label-styling-width">
                    <div class="form-label-styling">
                    Year Born:
                    <input class="form-input" id= "yearBorn" name="yearborn" type="text"/>
                    </div>
                    </label>
                    <br />
                    <label class="form-label-styling-width">
                    <div class="form-label-styling">
                    Year Died:
                    <input class="form-input" id= "yearDied" name="yeardied" type="text"/>
                    </div>
                    </label>
                    <br />
                    <button class="button create-form-button" >Update</button>
                </div>
                
            </form>
            <div>
                <label class="artistCreatedLabel" id="artistMessageLabel"></label>
            </div>
        </div>
        </div>
    );  

};

export default EditArtist;