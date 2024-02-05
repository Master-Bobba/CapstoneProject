import React from "react";
import MuseumList from "./MuseumList";

const Museums = () => {

    return (
        <div>
            <h3>
                Museums
            </h3>
            <h5>
                Select a Museum to view opening hours, address & contact details;
                purchase ticket; or find out a little more about the art collections.
            </h5>
            <MuseumList />
        </div>
        
    );
}

export default Museums;