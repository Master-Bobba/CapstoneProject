import React, { createContext, useState, useContext, useEffect } from "react";


const MuseumContext = createContext();

const MuseumProvider = ({children}) => {

    const [museumData, setMuseumData] = useState(null);
    const endPoint =process.env.REACT_APP_SPRING_URL + '/museum';

    const updateMuseumList = async () => {
        try {
            setMuseumData(
                await fetch(process.env.REACT_APP_SPRING_URL + '/museum')
                .then((response) => response.json())
            )
        } catch (error){
            console.log('Some error fetching museums' + error);
        }
    };

    useEffect(() =>{
        updateMuseumList();
    }, []);

    return (
        <MuseumContext.Provider value={{museumData, updateMuseumList, setMuseumData}}>
            {children}
        </MuseumContext.Provider>
    );
};

const useMuseum = () => {
    const context = useContext(MuseumContext);
    if (!context){
        throw new Error('Museum must be used within a MuseumProvider')
    }
    return context;
}

export { MuseumProvider, useMuseum};