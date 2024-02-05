import React, { useEffect, useState } from "react";
import DisplayMuseum from "./DisplayMuseum";

const MuseumList = () => {

    const [museumData, setMuseumData] = useState(null);
    const endPoint = 'http://localhost:8080/museum';
    
    useEffect(() =>{
        const fetchMeseums = async() => {
            try {
                setMuseumData(
                    await fetch(endPoint)
                    .then((response) => response.json())
                )
            } catch (error){
                console.log('Some error fetching museums' + error);
            }
        }
        fetchMeseums();
    }, []);


    return (
        <div>
            { museumData ? (
                <div>
                    {museumData.map((museum) => (
                        <DisplayMuseum museum = {museum}/>
                    ))}
                </div>
            ) : (
                <div>
                    Loading Meseums...
                </div>
            )}
        </div>
    );
};

export default MuseumList;