// import React from "react";
// import './CreateMuseum.css';

// const CreateMuseum = () => {
//     return (
//         <form class="card-background">
//             <div class="card">
//             <label>
//               Museum name:
//               <input
//                 class="card-input"
//                 name="name"
//                 type="text"/>
//             </label>
//             <br />
//             <label>
//               Curator:
//               <input
//                 class="card-input"
//                 name="curator"
//                 type="text"/>
//             </label>
//             <label>
//               Location:
//               <input
//                 class="card-input"
//                 name="location"
//                 type="text"/>
//             </label>
//             <br />
//             <button class="card-button">Submit</button>
//             </div>
//           </form>
//     )

// }

// export default CreateMuseum;



import React from "react";
import './Create.css';
import { useMuseum } from "./MuseumContext";

const CreateMuseum = () => {

    const { museumData, updateMuseumList } = useMuseum()

    const handleSubmit = (event) => {
        event.preventDefault();
        const endPoint = process.env.REACT_APP_SPRING_URL + '/museum';

        var name = document.querySelector('#museumName').value;

        fetch(endPoint, {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                "name": document.querySelector('#museumName').value,
                "curator": parseInt(document.querySelector('#curator').value),
                "location": parseInt(document.querySelector('#location').value)
            })
        });
        updateMuseumList();
        document.getElementById("museumForm").reset();
        document.getElementById("messageLabel").innerHTML = "Museum " + name + " created";
        
    }

    return (
        <div class="main-div-layout">
            <form class="form-card-background" id="museumForm" onSubmit={(event) => { handleSubmit(event)}}>
                <div class="form-card">
                    <label>
                    Museum Name: 
                    <input class="form-input" id= "museumName" name="name" type="text"/>
                    </label>
                    <br />
                    <label>
                    Curator:
                    <input class="form-input" id= "curator" name="curator" type="text"/>
                    </label>
                    <br />
                    <label>
                    Location:
                    <input class="form-input" id= "location" name="location" type="text"/>
                    </label>
                    <br />
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

