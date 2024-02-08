import React from "react";
import ERD from './images/ERDDSL.jpg';
import './AboutUs.css';

const EntityRelationshipDiagram = () => {
    return (
        <div class="main-div-layout">
            <div  class="erdDiagram">
            <img class="erdDiagramBorder" src={ERD} width={950} />
            </div>
        </div>
    )
}

export default EntityRelationshipDiagram;