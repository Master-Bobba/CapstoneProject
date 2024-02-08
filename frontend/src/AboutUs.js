import React from "react";
import './AboutUs.css';
import './ArtPieceFraming.css';

const AboutUs = () => {
    return (
        <div class="techTeamContainer" >
            <div class="main-div-layout frameArt">
            <div class="AboutUsText">
            <h2 className="teamHeader">
                The Team:
            </h2>
            <ul className="teamList">
                <li>
                    Bilal Khan
                </li>
                <li>
                    Sarah Irvine
                </li>
                <li>
                    Bobby Ayvazov
                </li>
                <li>
                    Zain Sheikh
                </li>
                <li>
                    Daniel MacKay
                </li>
            </ul>
            </div>
            </div>
            <div class="main-div-layout  frameArt">
            <div class="AboutUsText">
            <h2 className="techHeader">
                Tech Stack:
            </h2>
            <ul className="teamList">
                <li>
                    Database: MySQL
                </li>
                <li>
                    Backend: Spring (using JPA to interact with database)
                </li>
                <li>
                    Frontend: React
                </li>
                <li>
                    Containerisation: Docker
                </li>
                <li>
                    Hosting: AWS
                </li>
            </ul>
            </div>
            </div>
        </div>
    )
};

export default AboutUs;