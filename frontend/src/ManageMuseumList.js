import React, { useEffect, useState } from "react";
import ManageDisplayMuseum from "./ManageDisplayMuseum";
import { useMuseum } from "./MuseumContext";

const ManageMuseumList = () => {

    const { museumData, setMuseumData} = useMuseum();

    return (
        <div class="main-div-layout">
            { museumData ? (
                <div class="display-container">
                    {museumData.map((museum) => (
                        <ManageDisplayMuseum museum = { museum }/>
                    ))}
                </div>
            ) : (
                <div>
                    Loading Museums...
                </div>
            )}
        </div>
    );
};

export default ManageMuseumList;