import React, { useEffect, useState } from 'react';
import ArtDisplay from './DisplayArt';

const Art = () => {
    const [artData, setArtData] = useState(null);

    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/art');
                const data = await response.json();
                console.log(data);
                setArtData(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []
    );
    
    return (
        <div>
            Art
        </div>
    )
}

export default Art;