import React from "react";
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div class="main-div-layout" >
            <div>
            <h2 className="teamHeader">
                Our team:
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
            <div class="main-div-layout">
            <h2 className="techHeader">
                Our tech stack:
            </h2>
            <ul className="techList">
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
    )
};

export default AboutUs;