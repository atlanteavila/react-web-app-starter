import React from 'react'
import styled from 'styled-components';

import LogoImg from '../../../assets/images/logo.png';

const Logo = styled.img.attrs({
    src: LogoImg
})`
    max-width: 100px;
`

export default () => {
    return (
        <div className="znav-container znav-white" id="znav-container">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="./index.html">
                        <Logo />
                    </a><button className="navbar-toggler" type="button"
                        data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                        aria-expanded="false" aria-label="Toggle navigation"><span
                            className="hamburger hamburger--emphatic"><span className="hamburger-box"><span
                                className="hamburger-inner"></span></span></span></button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav pos-lg-absolute absolute-centered-lg">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Lainie's School</a></li>
                            <li><a href="#">Download</a></li>

                            <li><a href="#"><span className="fa fa-search"></span></a></li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li><a href="#">Sign In</a></li>
                            <li><a className="btn btn-primary btn-capsule btn-sm" href="#">Sign Up</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
