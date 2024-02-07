import React from "react";
import { useArtist } from "./ArtistContext";
import { useMuseum } from "./MuseumContext";
import { useArt } from "./ArtContext";
import refresh from './images/refresh.svg';
import search from './images/search.svg';
import './SearchBar.css';


const SearchBar = (props) =>{

    const endPoint = process.env.REACT_APP_SPRING_URL + '/' + props.searchFor + '/search?name=';
    const { setArtistData, updateArtistList } = useArtist();
    const { setMuseumData, updateMuseumList } = useMuseum();
    const { setArtData, updateArtList } = useArt();

    const placeholderText = "Search for " + props.searchFor + "...";

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

        // document.getElementById("form").reset();

        if (props.searchFor === 'artist'){
            setArtistData(response);
        } else if (props.searchFor === 'museum'){
            setMuseumData(response);
        } else if (props.searchFor === 'art'){
            setArtData(response);
        }
    }

    const handleClear = (event)=> {
        if (props.searchFor === 'artist'){
            updateArtistList();
        } else if (props.searchFor === 'museum'){
            updateMuseumList();
        } else if (props.searchFor === 'art'){
            updateArtList();
        }
        document.getElementById("form").reset();
    }

    return (
        <div >
            <form class="page_search__controls" id="form" onSubmit={(event) => { handleSubmit(event)}}>
                <div class="search-bar">
                    <label>
                        {/* Search for {props.searchFor}: */}
                        <input class="search-bar__input" id= "artistName" name="name" type="text" placeholder={placeholderText} />
                    </label>
                    <br />
                    <div>
                    <button class="search-bar__button"><img class="nav__svg-logo" src={ search }/></button>
                    <button class="search-bar__button" onClick={(event) => {handleClear(event)}}><img class="nav__svg-logo" src={ refresh }/></button>
                    </div>
                </div>
            </form>
        </div>
    );


};

export default SearchBar;