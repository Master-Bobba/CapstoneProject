import React, { useEffect, useState }  from "react";
import Carousel from "react-bootstrap/Carousel";

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
                <Carousel>
                {artData.map((art) => (
                    <Carousel.Item>
                        <div key={art.id}>
                            <div>
                            <p>Title: {art.name}</p>
                            <img src= {art.url} width={500} />
                            </div>
                        </div>
                    </Carousel.Item>
                    ))}
                </Carousel>
                <h2>Welcome to our museum!</h2>
                <h4>Use the options on the top bar on the page</h4> 
                <h4>to create or view art, artists, or museums!</h4>
                <h4>See the "About us" link below for more information</h4>
            </div>
        ) : (
            <p>Loading...</p>
        )
    );
};

export default Home;