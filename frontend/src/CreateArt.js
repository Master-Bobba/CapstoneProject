import React from "react";
import './Create.css';
import ArtistDropdown from "./ArtistDropdown";
import MuseumDropdown from "./MuseumDropdown";

const CreateArt = () => {

  const handleSubmit = (event) => {
  
    const artStyle = document.querySelector('#artType').value;
    const endPoint = process.env.REACT_APP_SPRING_URL + '/' + artStyle;
    
    var name = document.querySelector('#artPiece').value;

    const selectElement = document.querySelector('#artist.form-input');
    const selectedIndex = selectElement.selectedIndex;
    const selectedOption = selectElement.options[selectedIndex];
    const selectedId = selectedOption.querySelector('p').getAttribute('id');
    console.log('Selected id:', selectedId);

    fetch(endPoint, {
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            "name": document.querySelector('#artPiece').value,
            "artist": {"id": selectedId},
            "medium": document.querySelector('#medium').value.toUpperCase(),
            "museum": parseInt(document.querySelector('#museum').value),
            "yearCompleted": parseInt(document.querySelector('#yearCompleted').value),
            "backStory": document.querySelector('#backStory').value
        })
    });
    
    document.getElementById("artForm").reset();
    event.preventDefault();
    document.getElementById("artMessageLabel").innerHTML =  name + " successfully created";
}

    return (
      <div>
          <form class="form-card-background" id="artForm" onSubmit={(event) => { handleSubmit(event)}}>
            <div class="form-card">
            <label>
                Art Form:
                <select class="form-input" id="artType">
                  <option value="sculpture">Sculpture</option>
                  <option value="painting">Painting</option>
                </select>
              </label>
              <label>
                Art Piece: 
                <input class="form-input" id="artPiece" name="name" type="text"/>
              </label>
              <br />
              <label>
                Artist:
                <ArtistDropdown />
              </label>
              <br />
              <label>
                Museum:
                <MuseumDropdown />
              </label>
              <br />
              <label>
                Medium:
                <select class="form-input" id="medium">
                  <option value="defaultMedium">-select-</option>
                  <option value="clay">CLAY</option>
                  <option value="marble">MARBLE</option>
                  <option value="steel">STEEL</option>
                  <option value="bronze">BRONZE</option>
                  <option value="oil">OIL</option>
                  <option value="watercolour">WATERCOLOUR</option>
                </select>
              </label>
              <br />
              <label>
                Year Completed:
                <input class="form-input" id="yearCompleted" name="yearCompleted" type="text"/>
              </label>
              <br />
              <label>
                Back Story:
                <input class="form-input" id="backStory" name="backStory" type="text"/>
              </label>
              <br />
              <button class="button">Submit</button>
              </div>
          </form>
          <div>
            <label class="artCreatedLabel" id="artMessageLabel"></label>
          </div>
        </div>
    )

}

export default CreateArt;
