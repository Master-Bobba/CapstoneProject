import React from "react";
import './CreateMuseum.css';

const CreateMuseum = () => {
    return (
        <form class="card-background">
            <div class="card">
            <label>
              Museum name:
              <input
                class="card-input"
                name="name"
                type="text"/>
            </label>
            <br />
            <label>
              Curator:
              <input
                class="card-input"
                name="curator"
                type="text"/>
            </label>
            <br />
            <label>
              Art List:
              <input
                class="card-input"
                name="artList"
                type="text"/>
            </label>
            <br />
            <label>
              Location:
              <input
                class="card-input"
                name="location"
                type="text"/>
            </label>
            <br />
            <button class="card-button">Submit</button>
            </div>
          </form>
    )

}

export default CreateMuseum;
