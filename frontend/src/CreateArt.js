import React from "react";

const CreateArt = () => {
    return (
        <form>
            <label>
              Art Title:
              <input
                name="name"
                type="text"/>
            </label>
            <br />
            <label>
              Artist:
              <input
                name="artist"
                type="text"/>
            </label>
            <br />
            <label>
              Museum:
              <select>
                <option value="louvre">The Louvre</option>
                <option value="accademia">The Accademia Gallery</option>
                <option value="vangogh">The Van Gogh Museum</option>
              </select>
            </label>
            <br />
            <label>
              Medium:
              <input
                name="medium"
                type="text"/>
            </label>
            <br />
            <label>
              Year Completed:
              <input
                name="yearCompleted"
                type="text"/>
            </label>
            <br />
            <label>
              Back Story:
              <input
                name="backStory"
                type="text"/>
            </label>
            <br />
          </form>
    )

}

export default CreateArt;
