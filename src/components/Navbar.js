import { ArrowRightIcon, MenuIcon } from "@heroicons/react/solid";
import React, { Component } from "react";
import { Link } from 'react-scroll';

class Navbar extends Component {

    /* toggle nav */
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render() {
        return (
            <header className="header">
                <div className="header-container">
                    <a className="header-a">
                        <a href="#about" className="header-a-name">
                            Marina Demas
                        </a>
                    </a>
                    <nav className={this.state.clicked ? 'side-bar active' : 'nav-bar'}>
                        <Link activeClass="highlight" spy={ true } className="past-work-a" to="projects" smooth={ true } duration={ 1000 }>
                            Projects
                        </Link>
                        <Link activeClass="highlight" spy={ true } className="skills-a" to="skills" smooth={ true } duration={ 1000 }>
                            Skills
                        </Link>
                        <Link activeClass="highlight" spy={ true } className="testimonials-a" to="testimonials" smooth={ true } duration={ 1000 }>
                            Testimonials
                        </Link>
                    </nav>
                    <div className="contact-me">
                        <Link className="contact-a" to="contact" smooth={ true } duration={ 1000 }>
                            Contact Me
                            <ArrowRightIcon className="arrow-icon" id="arrow-button" />
                        </Link>
                    </div>
                    <MenuIcon className="menu-icon"  onClick={ this.handleClick } />
                </div>
            </header>
        )
    }
}

export default Navbar;