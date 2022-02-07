import React from "react";
import { Link } from 'react-scroll';

export default function About() {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-info">
                    <h1 className="about-h1">
                        Hi, I'm Marina.
                        <br className="about-text" />I am a front-end developer. 
                    </h1>
                    <p className="about-p">
                        I have extensive knowledge in HTML, CSS and JavaScript. 
                        I have experience working in React as well as backend languages including PHP and Python. 
                        I graduated from the University of Vermont in 2015 and recently earned a Web Programming Certificate at Champlain College in May of 2021.
                        I am looking for an opportunity to expand on the skills I have as well as learn new ones.
                    </p>
                    <div className="about-buttons">
                        <Link to="contact" className="about-work-button" smooth={ true } duration={ 1000 }>
                        Work With Me
                        </Link>
                        <Link to="projects" className="about-past-work-button" smooth={ true } duration={ 1000 }>
                        See My Past Work
                        </Link>
                    </div>
                </div>
                <div className="about-img">
                    <img
                        className="about-img-prop"
                        alt="hero"
                        src="./headshot_marina.jpg"
                    />
                </div>
            </div>
        </section>
    )
}