import React from 'react';
import home1 from "../img/home1.png";

function AboutSection() {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>
                    Contect us for any photography or videography ideas that you have.
                    We have professionals with amazing skills.
                </p>
                <button>Contect Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="guy with a camera"></img>
            </div>
        </div>
    )
};

export default AboutSection;
