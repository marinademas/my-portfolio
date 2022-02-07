import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="skills-container">
                <div className="skills-header">
                    <ChipIcon className="skills-icon" />
                    <h1 className="skills-h1">
                        Skills &amp; Technologies
                    </h1>
                    <p className="skills-p">
                        Below are the skills that I have mastered.
                    </p>
                </div>
                <div className="skills-boxes">
                    {skills.map((skill) => (
                        <div key={skill} className="skills-boxes-details">
                            <div className="skills-boxes-info">
                                <BadgeCheckIcon className="skills-icons" />
                                <span className="skills-text">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}