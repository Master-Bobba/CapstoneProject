import React, { useEffect, useState } from 'react';
import ArtDisplay from './DisplayArt';
import './ArtPieceFraming.css';

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
            <div class="frame">
            <img class="img-sizing" src="https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="painting"/>
            <p>"I don't know how to make this smaller..."</p>
            <p>By Van Gogh</p>
            </div>
        </div>
    )
}

export default Art;