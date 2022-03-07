import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="testimonials-container">
                <UsersIcon className="testimonials-icon" />
                <h1 className="testimonials-h1">
                    Testimonials
                </h1>
                <div className="testimonials-boxes">
                    {testimonials.map((testimonials) => (
                        <div className="testimonials-boxes-1">
                            <div className="testimonials-boxes-2">
                                <TerminalIcon className="testimonials-icons" />
                                <p className="testimonials-p">{testimonials.quote}</p>
                                <div className="testimonials-contact-container">
                                    <img
                                      alt="testimonial"
                                      src={testimonials.image}
                                      className="testimonials-contact-img"
                                    />
                                    <span className="testimonials-info">
                                        <span className="testimonials-name">
                                            {testimonials.name}
                                        </span>
                                        <span className="testimonials-title">
                                            {testimonials.title}
                                        </span>
                                        <span className="testimonials-company">
                                            {testimonials.company}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
