import React, { useEffect } from "react";
import './Create.css';
import ArtistDropdown from "./ArtistDropdown";
import MuseumDropdown from "./MuseumDropdown";
import { useArt } from "./ArtContext";
import { useLocation } from "react-router-dom";


const EditArt = (props) => {

  const { updateArtList } = useArt();
  const location = useLocation();
  const art = location.state;
  // console.log(document.querySelector('#Painting').value)
  // const artStyle = document.querySelector('#artType').value;
  const endPoint = process.env.REACT_APP_SPRING_URL + '/' + art.type.toLowerCase();
  // var name = document.querySelector('#artPiece').value;
  console.log(endPoint);



  const handleSubmit = (event) => {

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
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "id": art.id,
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

    document.getElementById("artForm").reset();
    event.preventDefault();
    document.getElementById("artMessageLabel").innerHTML = art.name + " successfully updated";

  }

  useEffect(() => {

    document.getElementById(art.type).selected = true;
    {
      art.style ? (
        document.getElementById(art.style).selected = true
      ) : (
        console.log("No style yet!")
      )
    }
    document.getElementById('artPiece').value = art.name;
    document.getElementById('artist').value = art.artist.name;
    {
      art.museum ? (
        document.getElementById('museum').value = art.museum.name
      ) : (
        console.log("No Museum yet!")
      )
    }
    document.getElementById(art.medium).selected = true;
    document.getElementById('yearCompleted').value = art.yearCompleted;
    document.getElementById('backStory').value = art.backStory;
    document.getElementById('url').value = art.url;
  });

  return (
    <div class="main-div-layout">
      <section class="page_title">
        <h2 class="page-title__header">
          Colleague Hub - Art Management Form
        </h2>
        <h3 class="page-title__text">
          Use the form below to edit existing paintings and sculptures within the museum database.
        </h3>
      </section>
      <div class="main-div-layout">
        <form class="form-card-background" id="artForm" onSubmit={(event) => { handleSubmit(event) }}>
          <div class="form-card">
            <label class="form-label-styling-width">
              <div class="form-label-styling">
                Art Form:
                <select class="form-input" id="artType">
                  <option value={art.type} id={art.type}>{art.type}</option>
                </select>
              </div>
            </label>
            <br />
            <label class="form-label-styling-width">
              <div class="form-label-styling">

                Style:
                <select className="form-input" id="style">
                  {art.type === "Sculpture" ? (
                    <>
                      <option value="sculpture" id="SCULPTURE">SCULPTURE</option>
                    </>
                  ) : (
                    <>
                      <option value="other" id="OTHER">-select-</option>
                      <option value="impressionist" id="IMPRESSIONIST">IMPRESSIONIST</option>
                      <option value="abstract" id="ABSTRACT">ABSTRACT</option>
                      <option value="renaissance" id="RENAISSANCE">RENAISSANCE</option>
                      <option value="romanticism" id="ROMANTICISM">ROMANTICISM</option>
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
              <div class="form-label-styling">
                <ArtistDropdown />
              </div>
            </label>
            <br />
            <label class="form-label-styling-width">
              <div class="form-label-styling">
                <MuseumDropdown />
              </div>
            </label>
            <br />
            <label class="form-label-styling-width">
              <div class="form-label-styling">
                Medium:
                <select class="form-input" id="medium">
                  <option value="other">-select-</option>
                  <option value="clay" id="CLAY">CLAY</option>
                  <option value="marble" id="MARBLE">MARBLE</option>
                  <option value="steel" id="STEEL">STEEL</option>
                  <option value="bronze" id="BRONZE">BRONZE</option>
                  <option value="oil" id="OIL">OIL</option>
                  <option value="watercolour" id="WATERCOLOUR">WATERCOLOUR</option>
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
            <button class="button create-form-button">Update</button>
          </div>
        </form>
        <div>
          <label class="artCreatedLabel" id="artMessageLabel"></label>
        </div>
      </div>
    </div>
  );
};

export default EditArt;