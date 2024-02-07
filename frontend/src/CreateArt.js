import React from "react";
import './Create.css';
import ArtistDropdown from "./ArtistDropdown";
import MuseumDropdown from "./MuseumDropdown";

const CreateArt = () => {

  const handleSubmit = (event) => {
  
    const artStyle = document.querySelector('#artType').value;
    console.log(artStyle);
    const endPoint = process.env.REACT_APP_SPRING_URL + '/' + artStyle;
    console.log(endPoint);
    
    var name = document.querySelector('#artPiece').value;

    const selectElementArtist = document.querySelector('#artist.form-input');
    const selectedIndexArtist = selectElementArtist.selectedIndex;
    const selectedOptionArtist = selectElementArtist.options[selectedIndexArtist];
    const selectedIdArtist = selectedOptionArtist.querySelector('p').getAttribute('id');
    console.log('Selected Artist id:', selectedIdArtist);

    const selectElementMuseum = document.querySelector('#museum.form-input');
    const selectedIndexMuseum = selectElementMuseum.selectedIndex;
    const selectedOptionMuseum = selectElementMuseum.options[selectedIndexMuseum];
    const selectedIdMuseum = selectedOptionMuseum.querySelector('p').getAttribute('id');
    console.log('Selected Museum id:', selectedIdMuseum);

    fetch(endPoint, {
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            "name": document.querySelector('#artPiece').value,
            "artist": {"id": selectedIdArtist},
            "medium": document.querySelector('#medium').value.toUpperCase(),
            "museum": {"id": selectedIdMuseum},
            "yearCompleted": parseInt(document.querySelector('#yearCompleted').value),
            "backStory": document.querySelector('#backStory').value,
            "style": document.querySelector('#style').value.toUpperCase(),
            "url": document.querySelector('#url').value
        })
    });
    
    document.getElementById("artForm").reset();
    event.preventDefault();
    document.getElementById("artMessageLabel").innerHTML =  name + " successfully created";
}

    return (
      <div class="main-div-layout">
        <section class="page_title">
                <h2 class="page-title__header">
                    Colleague Hub - New Art Form
                </h2>
                <h3 class="page-title__text">
                    Use the form below to add new paintings and sculptures to the museum database.
                </h3>
            </section>
        <div class="main-div-layout">
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
                Style:
                <select class="form-input" id="style">
                  <option value="defaultStyle">-select-</option>
                  <option value="sculpture">SCULPTURE</option>
                  <option value="impressionist">IMPRESSIONIST</option>
                  <option value="abstract">ABSTRACT</option>
                  <option value="renaissance">RENAISSANCE</option>
                  <option value="romanticism">ROMANTICISM</option>
                </select>
              </label>
              <br />
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
              <label>
                URL:
                <input class="form-input" id="url" name="url" type="text"/>
              </label>
              <br />
              <button class="button">Submit</button>
              </div>
          </form>
          <div>
            <label class="artCreatedLabel" id="artMessageLabel"></label>
          </div>
          </div>
        </div>
    )

}

export default CreateArt;
