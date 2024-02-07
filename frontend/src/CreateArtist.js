import React from "react";
import './Create.css';
import { useArtist } from "./ArtistContext";

const CreateArtist = () => {

    const { artistData, updateArtistList} = useArtist()

    const handleSubmit = (event) => {
        event.preventDefault();
        const endPoint = process.env.REACT_APP_SPRING_URL + '/artist';

        var name = document.querySelector('#artistName').value;

        fetch(endPoint, {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                "name": document.querySelector('#artistName').value,
                "yearBorn": parseInt(document.querySelector('#yearBorn').value),
                "yearDead": parseInt(document.querySelector('#yearDied').value)
            })
        });
        updateArtistList();
        document.getElementById("artistForm").reset();
        document.getElementById("messageLabel").innerHTML = "Artist " + name + " created";
        
    }

    return (
        <div class="main-div-layout">
        <section class="page_title">
                <h2 class="page-title__header">
                    Colleague Hub - New Artist Form
                </h2>
                <h3 class="page-title__text">
                    Use the form below to add new artists to the museum database.
                </h3>
        </section>
        <div class="main-div-layout">
            <form class="form-card-background" id="artistForm" onSubmit={(event) => { handleSubmit(event)}}>
                <div class="form-card">
                    <label>
                    Artist Name: 
                    <input class="form-input" id= "artistName" name="name" type="text"/>
                    </label>
                    <br />
                    <label>
                    Year Born:
                    <input class="form-input" id= "yearBorn" name="yearborn" type="text"/>
                    </label>
                    <br />
                    <label>
                    Year Died:
                    <input class="form-input" id= "yearDied" name="yeardied" type="text"/>
                    </label>
                    <br />
                    <button class="button" >Submit</button>
                </div>
            </form>
            <div>
                <label class="artistCreatedLabel" id="messageLabel"></label>
            </div>
        </div>
        </div>
    );

};

export default CreateArtist;

