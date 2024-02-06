import React, { createContext, useState, useContext, useEffect } from "react";

const ArtistContext = createContext();

const ArtistProvider = ({ children }) => {

    const [artistData, setArtistData] = useState(null);
 
    const updateArtistList = async () => {
        try {
            setArtistData(
                await fetch(process.env.REACT_APP_SPRING_URL + '/artists')
                .then((response) => response.json())
            )
        } catch (error) {
            console.log('Some error fetching artists' + error);
        }
    };

    useEffect(() => {
        updateArtistList();
    },[]);

    return (
        <ArtistContext.Provider value={{ artistData, updateArtistList, setArtistData }}>
            {children}
        </ArtistContext.Provider>
    );
};

const useArtist = () => {
    const context = useContext(ArtistContext);
    if (!context) {
        throw new Error('Artist must be used within a ArtistProvider')
    }
    return context;
}

export { ArtistProvider, useArtist };