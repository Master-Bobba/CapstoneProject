import React from "react";
import { useMuseum } from "./MuseumContext";
import DisplayMuseumDropdown from "./DisplayMuseumDropdown";

const MuseumDropdown = () => {

    const { museumData } = useMuseum();

    return(
        <div class="form-label-styling">
            Museum:
            { museumData ? (
                <select class="form-input" id="museum" name="museum">
                    <option value="defaultMuseum">
                        <p id="0">-select-</p> 
                    </option>
                    {museumData.map((museum) => (
                        <option>
                        <DisplayMuseumDropdown museum = { museum } />
                        </option>
                    ))}
                </select>
            ) : (
                <div>
                    Loading Museums...
                </div>
            )}
        </div>

    );
};


export default MuseumDropdown;