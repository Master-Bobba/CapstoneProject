import React from "react";
import './Create.css';

const CreateArt = () => {
    return (
        <form class="form-card-background">
          <div class="form-card">
            <label>
              Art Title: 
              <input
                class="form-input"
                name="name"
                type="text"/>
            </label>
            <br />
            <label>
              Artist:
              <input
                class="form-input"
                name="artist"
                type="text"/>
            </label>
            <br />
            <label>
              Museum:
              <select class="form-input">
                <option value="louvre">The Louvre</option>
                <option value="accademia">The Accademia Gallery</option>
                <option value="vangogh">The Van Gogh Museum</option>
              </select>
            </label>
            <br />
            <label>
              Medium:
              <input
                class="form-input"
                name="medium"
                type="text"/>
            </label>
            <br />
            <label>
              Year Completed:
              <input
                class="form-input"
                name="yearCompleted"
                type="text"/>
            </label>
            <br />
            <label>
              Back Story:
              <input
                class="form-input"
                name="backStory"
                type="text"/>
            </label>
            <br />
            <button class="button">Submit</button>
            </div>
          </form>
    )

}

export default CreateArt;
