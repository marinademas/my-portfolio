import React, { Component } from 'react';
import { ArrowCircleUpIcon } from "@heroicons/react/solid";

class Footer extends Component {

    /* scroll to top */
    scrollToTop(){
        window.scroll({
            top:0,
            behavior: 'smooth',
            duration: 1000
        })
    }

    render() {
        return (
            <footer className="footer-container">
                <ArrowCircleUpIcon onClick={ this.scrollToTop } className="up-arrow-icon" id="arrow-button" />
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/marinademas/" target="_blank" rel="noopener noreferrer"><span class="iconify" data-icon="mdi-linkedin"></span></a>
                    <a href="https://teamtreehouse.com/marinademas" target="_blank" rel="noopener noreferrer"><span class="iconify" data-icon="cib:treehouse"></span></a>
                    <a href="https://codepen.io/Mdemas2020" target="_blank" rel="noopener noreferrer"><span class="iconify" data-icon="akar-icons:codepen-fill"></span></a>
                </div>
            </footer>
        )
    }
}

export default Footer;