import React from "react";
import './Create.css';

const CreateArtist = () => {

    

    const handleSubmit = (event) => {
        console.log("Submit button pressed SUCCESSFULLY");
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
        document.getElementById("artistForm").reset();
        event.preventDefault();
        document.getElementById("messageLabel").innerHTML = "Artist " + name + " created";
    }

    return (
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
    );

};

export default CreateArtist;

