import React, { useEffect, useState } from "react";
import DisplayMuseum from "./DisplayMuseum";
import { useMuseum } from "./MuseumContext";

const MuseumList = () => {

    const { museumData, setMuseumData} = useMuseum();

    return (
        <div class="main-div-layout">
            { museumData ? (
                <div>
                    {museumData.map((museum) => (
                        <DisplayMuseum museum = { museum }/>
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

export default MuseumList;