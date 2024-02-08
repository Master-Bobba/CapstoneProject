import React, { useEffect, useState }  from "react";
import Carousel from "react-bootstrap/Carousel";
import './home.css';

const Home = () => {
    const [artData, setArtData] = useState(null);

    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_SPRING_URL +'/art');
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

    return(
        artData ? (
            <div>
                <h2 class="welcome">Welcome to our museum!</h2>
                <div class="caro">
                    <Carousel>
                    {artData.map((art) => (
                        <Carousel.Item>
                            <div key={art.id}>
                                <div class="mainContent">
                                    <p class="title">{art.name} by { art.artist.name}</p>
                                    <img class="mainContent" src= {art.url} width={500} />
                                    
                                </div>
                                
                            </div>
                        </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                
                <div class="mainContent">
                    <h4 class="frontText"></h4> 
                    <h3 class="frontText">Use the options on the top bar on the page to create or view art, artists, or museums!</h3>
                    <h3 class="frontText"> See the "About us" link below for more information</h3>
                </div>
                
            </div>
        ) : (
            <p>Loading...</p>
        )
    );
};

export default Home;