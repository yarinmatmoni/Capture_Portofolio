import React from 'react';
//Import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
//Import image
import home2 from "../img/home2.png";

function ServicesSection() {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock-icon" ></img>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum doler sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork-icon" ></img>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum doler sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm-icon" ></img>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum doler sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money}  alt="money-icon" ></img>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum doler sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="camera" ></img>
            </div>
        </div>
    )
};

export default ServicesSection;
