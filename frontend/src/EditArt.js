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


    const handleSubmit = (event) => {
    //   fetch(endPoint, {
    //     method: 'put',
    //     headers: {'Content-Type' : 'application/json'},
    //     body: JSON.stringify({
    //         "id": art.id,
    //         "name": document.querySelector('#artPiece').value,
    //         "artist": {"id": selectedIdArtist},
    //         "medium": document.querySelector('#medium').value.toUpperCase(),
    //         "museum": {"id": selectedIdMuseum},
    //         "yearCompleted": parseInt(document.querySelector('#yearCompleted').value),
    //         "backStory": document.querySelector('#backStory').value,
    //         "style": document.querySelector('#style').value.toUpperCase()
    //     })
    // });

    }

    useEffect(() => {

      document.getElementById(art.type).selected = true;
      { art.style ? (
        document.getElementById(art.style).selected = true
      ) : (
        console.log("No style yet!")
      )}
      document.getElementById('artPiece').value = art.name;
      document.getElementById('artist').value = art.artist.name;
      {art.museum ? (
          document.getElementById('museum').value = art.museum.name
      ): (
          console.log("No Museum yet!")
      )}
      document.getElementById(art.medium).selected = true;
      document.getElementById('yearCompleted').value = art.yearCompleted;
      document.getElementById('backStory').value = art.backStory;
    });

    return (
        <div>
            <form class="form-card-background" id="artForm" onSubmit={(event) => { handleSubmit(event)}}>
              <div class="form-card">
              <label>
                  Art Form:
                  <select class="form-input" id="artType">
                    <option value="sculpture" id="Sculpture">Sculpture</option>
                    <option value="painting" id="Painting">Painting</option>
                  </select>
                </label>
                <label>
                  Style:
                  <select class="form-input" id="style">
                    <option value="defaultStyle">-select-</option>
                    <option value="sculpture" id="SCULPTURE">SCULPTURE</option>
                    <option value="impressionist" id="IMPRESSIONIST">IMPRESSIONIST</option>
                    <option value="abstract" id="ABSTRACT">ABSTRACT</option>
                    <option value="renaissance" id="RENAISSANCE">RENAISSANCE</option>
                    <option value="romanticism" id="ROMANTICISM">ROMANTICISM</option>
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
                    <option value="clay" id="CLAY">CLAY</option>
                    <option value="marble" id="MARBLE">MARBLE</option>
                    <option value="steel" id="STEEL">STEEL</option>
                    <option value="bronze" id="BRONZE">BRONZE</option>
                    <option value="oil" id="OIL">OIL</option>
                    <option value="watercolour" id="WATERCOLOUR">WATERCOLOUR</option>
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
      );
};

export default EditArt;