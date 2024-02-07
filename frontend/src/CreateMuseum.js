import React from "react";
import './Create.css';
import { useMuseum } from "./MuseumContext";

const CreateMuseum = () => {

    const { museumData, updateMuseumList } = useMuseum()

    const handleSubmit = (event) => {

        const endPoint = process.env.REACT_APP_SPRING_URL + '/museum';
        var name = document.querySelector('#museumName').value;

        fetch(endPoint, {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                "name": document.querySelector('#museumName').value,
                "curator": {
                    "name": document.querySelector('#curatorName').value,
                    "yearBorn": parseInt(document.querySelector('#curatorBirthYear').value)
                },
                "artList": [],
                "location": {
                    "city": document.querySelector('#city').value,
                    "country": document.querySelector('#country').value
                }
            })
        });
        updateMuseumList();

        document.getElementById("museumForm").reset();
        event.preventDefault();
        document.getElementById("messageLabel").innerHTML = "Museum " + name + " successfully created";
    }

    return (
        <div class="main-div-layout">
        <section class="page_title">
                <h2 class="page-title__header">
                    Colleague Hub - New Museum Form
                </h2>
                <h3 class="page-title__text">
                    Use the form below to add new museums to the museum database.
                </h3>
            </section>
        <div class="main-div-layout">
            <form class="form-card-background" id="museumForm" onSubmit={(event) => { handleSubmit(event)}}>
                <div class="form-card">
                    <label class="form-label-styling-width">
                    <div class="form-label-styling">
                    Museum Name: 
                    <input class="form-input" id= "museumName" name="museumName" type="text"/>
                    </div>
                    </label>
                    <br/>
                    <label class="form-label-styling-width">
                    <div class="form-label-styling">
                    Curator Name:
                    <input class="form-input" id= "curatorName" name="curatorName" type="text"/>
                    </div>
                    </label>
                    <br/>
                    <label class="form-label-styling-width">
                    <div class="form-label-styling">
                    Curator Birth Year:
                    <input class="form-input" id= "curatorBirthYear" name="curatoBirthYear" type="text"/>
                    </div>
                    </label>
                    <br/>
                    <label class="form-label-styling-width">
                    <div class="form-label-styling">
                    City:
                    <input class="form-input" id= "city" name="city" type="text"/>
                    </div>
                    </label>
                    <br/>
                    <label class="form-label-styling-width">
                    <div class="form-label-styling">
                    Country:
                    <input class="form-input" id= "country" name="country" type="text"/>
                    </div>
                    </label>
                    <br/>
                    <button class="button create-form-button" >Submit</button>
                </div>
            </form>
            <div>
                <label class="museumCreatedLabel" id="messageLabel"></label>
            </div>
        </div>
        </div>
    );

};

export default CreateMuseum;

