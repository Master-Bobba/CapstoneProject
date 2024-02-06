import React, { createContext, useState, useContext, useEffect } from "react";

const ArtContext = createContext();

const ArtProvider = ({ children }) => {


    const [artData, setArtData] = useState(null);

    const updateArtList = async () => {
        try{
            setArtData(
                await fetch(process.env.REACT_APP_SPRING_URL + '/art')
                .then((response) => response.json())
            )
        } catch (error){
            console.log('Some error fetching art ' + error);
        }
    };  

    useEffect(() => {
        updateArtList();
    },[]);
 
    return(
        <ArtContext.Provider value={{ artData, updateArtList, setArtData}}>
            { children }
        </ArtContext.Provider>
    )
};


const useArt = () => {
    const context = useContext(ArtContext);
    if (!context) {
        throw new Error('Art must be used within a ArtProvider')
    }
    return context;
}

export { ArtProvider, useArt };