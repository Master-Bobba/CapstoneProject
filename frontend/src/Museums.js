import React, { useEffect, useState } from "react";

const Museums = () => {

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
            <h3>Museums </h3>
            { museumData ? (
                <div>
                    {museumData.map((museum) => (
                        <div>
                            <p>Museum Name: {museum.name}</p>
                            <p>Location: {museum.location.city}, {museum.location.country}</p>
                        </div>
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

export default Museums;