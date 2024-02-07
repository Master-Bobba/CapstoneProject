import React, { useEffect} from "react";
import { useMuseum } from "./MuseumContext";
import { useLocation } from "react-router-dom";

const EditMuseum = () => {


    const { updateMuseumList } = useMuseum();
    const location = useLocation();
    const museum = location.state;

    useEffect(()=>{

        document.getElementById('museumName').value = museum.name;
        document.getElementById('curatorName').value = museum.curator.name;
        document.getElementById('curatorBirthYear').value = museum.curator.yearBorn;
        document.getElementById('city').value = museum.location.city;
        document.getElementById('country').value = museum.location.country;

    },[]);


    const handleSubmit = (event) =>{
        const endPoint = process.env.REACT_APP_SPRING_URL + '/museum';
        
        fetch(endPoint, {
            method: 'put',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                "id": museum.id,
                "name": document.querySelector('#museumName').value,
                "curator": {
                    "id": museum.curator.id,
                    "name": document.querySelector('#curatorName').value,
                    "yearBorn": parseInt(document.querySelector('#curatorBirthYear').value)
                },
                "artList": museum.artList,
                "location": {
                    "id": museum.location.id,
                    "city": document.querySelector('#city').value,
                    "country": document.querySelector('#country').value
                }
            })
        });
        updateMuseumList();

        document.getElementById("museumForm").reset();
        event.preventDefault();
        document.getElementById("messageLabel").innerHTML = "Museum Successfully Updated";

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

export default EditMuseum;