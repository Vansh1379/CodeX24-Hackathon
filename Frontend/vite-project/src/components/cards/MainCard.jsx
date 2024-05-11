import { Heading } from "./Heading";
import React from 'react';
import "./MainCard.css"
import { px } from "framer-motion";

export function MainCard() {
    return (
        <div className="MainCard">
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">The Web3 News You ant To Know</h2>
                    <div className="card-date">Posted On :- September 14, 2016</div>
                </div>
                <div className="DivImage">
                    <img
                        src="https://imgs.search.brave.com/99ormu6WxhdyZdZ3Eu4lbHCeIeg9mUso-mYt_LpefW8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/MTM1NTU2Ny9waG90/by93ZWItMy0wLW9y/LXdlYjMtbGlnaHRi/b3gtb24tYmxhY2st/YmFja2dyb3VuZC1k/ZWNlbnRyYWxpemF0/aW9uLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz04aXhIdEct/S2xuVTRETmtDUjB3/NkhGLTZ4RHlKdU5p/djR6QjcyaGpfOWFv/PQ"
                        alt="Laptop with Code"
                        className="card-image"
                    />
                </div>
                <div className="card-content">
                    <div className="button-container">
                        <button className="button secondary-button">View</button>
                        <button className="button error-button">Report</button>
                    </div>
                    <p>
                        DeFi platforms surge despite regulation concerns. Blockchain-based finance grows, promising financial inclusivity. Regulatory uncertainty remains as governments grapple with innovation's risks and potential. Web3 revolutionizes financ
                    </p>
                </div>
                <div className="button-container2">
                    <div>
                        <button className="button">
                            <i className="fas fa-thumbs-up"></i>
                            45
                        </button>
                    </div> 
                    <button className="button">
                        <i className="fas fa-thumbs-down"></i>
                        45
                    </button>
                    <button className="button">
                        <i className="fas fa-comment"></i>
                        45
                    </button>
                    <button className="button">
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}