import React, { createContext, useState, useContext, useEffect } from "react";


const ArtistContext = createContext();

const ArtistProvider = ({ children }) => {

    const [artistData, setArtistData] = useState(null);
    const endPoint = process.env.REACT_APP_SPRING_URL + '/artists';

    const updateArtistList = async () => {
        try {
            setArtistData(
                await fetch(endPoint)
                    .then((response) => response.json())
            )
            console.log(artistData)
        } catch (error) {
            console.log('Some error fetching artists' + error);
        }
    };

    useEffect(() => {
        console.log(process.env.REACT_APP_SPRING_URL)
        updateArtistList();
    }, []);

    return (
        <ArtistContext.Provider value={{ artistData, updateArtistList }}>
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