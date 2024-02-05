import React, { useEffect, useState , useRef} from 'react';
import ArtDisplay from './DisplayArt';
import './ArtPieceFraming.css';

const Art = () => {
    const [artData, setArtData] = useState(null);
    const [deleteClicked, setDeleteClicked] = useState(0);
    const hasPageBeenRendered = useRef(false);
    const [chosenId, setChosenId] = useState(0);
    const toggleDeleteClicked = (id) => {
        setChosenId(id);
        setDeleteClicked(deleteClicked+1);
    };
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
    
    function ArtDisplay(artData) {
    
        return (
        artData ? (
            <div>
                <div>
                    {artData.map((art) => (
                        <div key={art.id}>
                            <div>
                            <p>ID: {art.id}</p>
                            <p>Name: {art.name}</p>
                            <p>Back story: {art.backStory}</p>
                            <button onClick={(e) => toggleDeleteClicked(art.id)}>Delete</button>
                            <button>Edit</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <p>Loading...</p>
        )
        )
    }

    useEffect (() => {
        fetchData();
        if (hasPageBeenRendered.current) {
            const deleteBook = async () => {
                try {
                    const options = {method:'DELETE'};
                    const response = await fetch('http://localhost:8080/art/'+chosenId, options);
                    const data = await response.json();
                    console.log(data);
                } catch (error) {
                    console.error('Error fetching data: ', error);
                }
                fetchData();
            };
            deleteBook();
        }
        hasPageBeenRendered.current = true;
    }, [deleteClicked]
    );

    return (
        <div>

            Art
            <h1>
                Here you can view all the Art
            </h1>
            {ArtDisplay(artData)}
            <div class="frame">
            <img class="img-sizing" src="https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="painting"/>
            <p>"I don't know how to make this smaller..."</p>
            <p>By Van Gogh</p>
            </div>
        </div>
    )
}

export default Art;