import React from "react";
import AboutStyles from "./about.module.scss";
import Image from "next/image";
function About() {
    return (
        <div className={AboutStyles.about}>
            <div className={AboutStyles.title}>
                <h3>About Me</h3>
                <span></span>
            </div>
            <div>
                <div className={AboutStyles.content}>
                    <p>
                        Hello, I am Mo, and I am a full-stack web developer based in Senegal.
                        <p>Technology has always been an interest for me. And I discovered that passion while working as a food engineer.</p>
                    </p>
                    <p>So I decided to follow my passion and become a developer. </p>

                    <p> Here are the technologies I work with:</p>
                    <div className={AboutStyles.technologiesContainer}>
                        <ul>
                            <li>HTML & CSS</li>
                            <li>JavaScript (ES6+)</li>
                        </ul>
                        <ul>
                            <li>Ruby On Rails</li>
                            <li>React, NextJs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
