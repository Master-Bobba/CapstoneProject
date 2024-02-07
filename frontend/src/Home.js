import React, { useEffect, useState }  from "react";
// import Carousel from "react-bootstrap/Carousel";

// const images = require.context('./CarouselImages', true);
// const imageList = images.keys().map(image => images(image));

const Home = () => {
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

    return(
        <div>
            -- HOME PAGE CAROUSEL UNDER CONSTRUCTION --
        </div>
        
        // artData ? (
        //     <div>
        //         <Carousel>
        //         {artData.map((art) => (
        //             <Carousel.Item>
        //                 <div key={art.id}>
        //                     <div>
        //                     <p>Title: {art.name}</p>
        //                     <img src= {art.url} height={300} width={500} />
        //                     </div>
        //                 </div>
        //             </Carousel.Item>
        //             ))}
        //         </Carousel>
        //     </div>
        // ) : (
        //     <p>Loading...</p>
        // )
    );
};

export default Home;