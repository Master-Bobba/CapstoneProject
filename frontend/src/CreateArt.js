import React from "react";
import './Create.css';
import ArtistDropdown from "./ArtistDropdown";
import MuseumDropdown from "./MuseumDropdown";
import { useState } from "react";

const CreateArt = () => {

  const [selectedArtForm, setSelectedArtForm] = useState("sculpture");

  const handleArtFormChange = (event) => {
    setSelectedArtForm(event.target.value);
  };

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
    console.log(selectElementMuseum);
    const selectedIndexMuseum = selectElementMuseum.selectedIndex;
    const selectedOptionMuseum = selectElementMuseum.options[selectedIndexMuseum];
    console.log(selectedOptionMuseum);
    const selectedIdMuseum = selectedOptionMuseum.querySelector('p').getAttribute('id');
    console.log('Selected Museum id:', selectedIdMuseum);

    if (selectedIdMuseum == 0) {
      fetch(endPoint, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "name": document.querySelector('#artPiece').value,
          "artist": { "id": selectedIdArtist },
          "medium": document.querySelector('#medium').value.toUpperCase(),
          "yearCompleted": parseInt(document.querySelector('#yearCompleted').value),
          "backStory": document.querySelector('#backStory').value,
          "style": document.querySelector('#style').value.toUpperCase(),
          "url": document.querySelector('#url').value
        })
      });
    } else {
      fetch(endPoint, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "name": document.querySelector('#artPiece').value,
          "artist": { "id": selectedIdArtist },
          "medium": document.querySelector('#medium').value.toUpperCase(),
          "museum": { "id": selectedIdMuseum },
          "yearCompleted": parseInt(document.querySelector('#yearCompleted').value),
          "backStory": document.querySelector('#backStory').value,
          "style": document.querySelector('#style').value.toUpperCase(),
          "url": document.querySelector('#url').value
        })
      });
    }
      
    document.getElementById("artForm").reset();
    event.preventDefault();
    document.getElementById("createArtMessageLabel").innerHTML = name + " successfully created";
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
        <form class="form-card-background" id="artForm" onSubmit={(event) => { handleSubmit(event) }}>
          <div class="form-card">
            <label class="form-label-styling-width">
              <div class="form-label-styling">
                Art Form:
                <select className="form-input" id="artType" onChange={handleArtFormChange} value={selectedArtForm}>
                  <option value="sculpture">Sculpture</option>
                  <option value="painting">Painting</option>
                </select>
              </div>
            </label>
            <br />
            <label class="form-label-styling-width">
              <div class="form-label-styling">
                Style:
                <select className="form-input" id="style">
                  {selectedArtForm === "sculpture" ? (
                    <>
                      <option value="sculpture">SCULPTURE</option>
                    </>
                  ) : (
                    <>
                      <option value="other">-select-</option>
                      <option value="impressionist">IMPRESSIONIST</option>
                      <option value="abstract">ABSTRACT</option>
                      <option value="renaissance">RENAISSANCE</option>
                      <option value="romanticism">ROMANTICISM</option>
                    </>
                  )}
                </select>
              </div>
            </label>
            <br />
            <label class="form-label-styling-width">
              <div class="form-label-styling">
                Art Piece:
                <input class="form-input" id="artPiece" name="name" type="text" />
              </div>
            </label>
            <br />
            <label class="form-label-styling-width">
              <ArtistDropdown />
            </label>
            <br />
            <label class="form-label-styling-width">
              <MuseumDropdown />
            </label>
            <br />
            <label class="form-label-styling-width">
              <div class="form-label-styling">
                Medium:
                <select class="form-input" id="medium">
                  <option value="other">-select-</option>
                  <option value="clay">CLAY</option>
                  <option value="marble">MARBLE</option>
                  <option value="steel">STEEL</option>
                  <option value="bronze">BRONZE</option>
                  <option value="oil">OIL</option>
                  <option value="watercolour">WATERCOLOUR</option>
                </select>
              </div>
            </label>
            <br />
            <label class="form-label-styling-width">
              <div class="form-label-styling">
                Year Completed:
                <input class="form-input" id="yearCompleted" name="yearCompleted" type="text" />
              </div>
            </label>
            <br />
            <label class="form-label-styling-width">
              <div class="form-label-styling">
                Back Story:
                <input class="form-input" id="backStory" name="backStory" type="text" />
              </div>
            </label>
            <br />
            <label class="form-label-styling-width">
              <div class="form-label-styling">
                URL:
                <input class="form-input" id="url" name="url" type="text" />
              </div>
            </label>
            <br />
            <button class="button create-form-button">Submit</button>
          </div>
        </form>
        <div>
          <label class="artCreatedLabel" id="createArtMessageLabel"></label>

        </div>
      </div>
    </div>
  )

}

export default CreateArt;
