import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <div className="projects-container-intro">
                    <CodeIcon className="projects-icon" />
                    <h1 className="projects-h1">
                        Apps I've Built
                    </h1>
                    <p className="projects-p">
                        Take a look below to see a sample of a few projects I have recently developed.
                    </p>
                </div>
                <div className="projects-boxes">
                    {projects.map((project) => (
                            <a 
                            href={project.link}
                            key={project.image}
                            className="projects-a">
                                <div className="projects-img-container">
                                    <img
                                    alt="gallery"
                                    className="projects-img"
                                    src={project.image}
                                    />
                                    <div className="projects-info">
                                        <h2 className="projects-h2">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="projects-title-h1">
                                            {project.title}
                                        </h1>
                                        <p className="projects-desc-p">{project.description}</p>
                                    </div>
                                </div>
                            </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
