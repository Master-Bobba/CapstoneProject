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

        document.getElementById("museumForm").reset();
        event.preventDefault();
        document.getElementById("messageLabel").innerHTML = "Museum " + name + " successfully created";
    }

    return (
        <div class="main-div-layout">
            <form class="form-card-background" id="museumForm" onSubmit={(event) => { handleSubmit(event)}}>
                <div class="form-card">
                    <label>
                    Museum Name: 
                    <input class="form-input" id= "museumName" name="museumName" type="text"/>
                    </label>
                    <br/>
                    <label>
                    Curator Name:
                    <input class="form-input" id= "curatorName" name="curatorName" type="text"/>
                    </label>
                    <br/>
                    <label>
                    Curator Birth Year:
                    <input class="form-input" id= "curatorBirthYear" name="curatoBirthYear" type="text"/>
                    </label>
                    <br/>
                    <label>
                    City:
                    <input class="form-input" id= "city" name="city" type="text"/>
                    </label>
                    <br/>
                    <label>
                    Country:
                    <input class="form-input" id= "country" name="country" type="text"/>
                    </label>
                    <br/>
                    <button class="button" >Submit</button>
                </div>
            </form>
            <div>
                <label class="museumCreatedLabel" id="messageLabel"></label>
            </div>
        </div>
    );

};

export default CreateMuseum;

