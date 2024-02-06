import React from "react";
import { useArtist } from "./ArtistContext";
import { useMuseum } from "./MuseumContext";
import { useArt } from "./ArtContext";


const SearchBar = (props) =>{

    const endPoint = process.env.REACT_APP_SPRING_URL + '/' + props.searchFor + '/search?name=';
    const { setArtistData } = useArtist();
    const { setMuseumData } = useMuseum();
    const { setArtData } = useArt();

    async function handleSubmit(event){

        event.preventDefault();
        console.log(endPoint + document.querySelector('#artistName').value);
        var response;
        
        try {
            await fetch(endPoint + document.querySelector('#artistName').value)
                .then((response) => response.json())
                .then((data) => response=data)
        }catch (error){
            console.log('Some error fetching museums' + error);
        }

        document.getElementById("form").reset();

        if (props.searchFor === 'artist'){
            setArtistData(response);
        } else if (props.searchFor === 'museum'){
            setMuseumData(response);
        } else if (props.searchFor === 'art'){
            setArtData(response);
        }
        
    }

    return (
        <div class="main-div-layout">
            <form class="form-card-background" id="form" onSubmit={(event) => { handleSubmit(event)}}>
                <div class="form-card">
                    <label>
                        Search for {props.searchFor}:
                        <input class="form-input" id= "artistName" name="name" type="text"/>
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

export default SearchBar;