import React from 'react';
import home1 from "../img/home1.png";
import {About,Description,Hide,Image} from "../Style";
import {motion} from "framer-motion";

function AboutSection() {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>
                    Contect us for any photography or videography ideas that you have.
                    We have professionals with amazing skills.
                </p>
                <button>Contect Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera"></img>
            </Image>
        </About>
    )
};

export default AboutSection;
