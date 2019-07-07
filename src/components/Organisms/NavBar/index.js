import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoImg from '../../../assets/images/logo.png';

const Logo = styled.img.attrs({
    src: LogoImg
})`
    max-width: 100px;
`
const StyledLink = styled(
    styled(Link)`
      font-size: 16px;
      font-weight: normal;

      &:hover {
        text-decoration: underline;
      },
      &:active {
        color: red;
      }
    `,
    'active'
  )`
    color: red;
  `;
export default ({setItemInStorage}) => {
    return (
        <div className="znav-container znav-white" id="znav-container">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" to="/">
                        <Logo />
                    </Link><button className="navbar-toggler" type="button"
                        data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                        aria-expanded="false" aria-label="Toggle navigation"><span
                            className="hamburger hamburger--emphatic"><span className="hamburger-box"><span
                                className="hamburger-inner"></span></span></span></button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav pos-lg-absolute absolute-centered-lg">
                            <li><StyledLink to="/">Home</StyledLink></li>
                            <li><StyledLink to="/features">Features</StyledLink></li>
                            <li><StyledLink to="/pricing">Pricing</StyledLink></li>
                            <li><StyledLink to="download">Download</StyledLink></li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li><StyledLink to="/authenticate">Sign In</StyledLink></li>
                            <li><StyledLink className="btn btn-primary btn-capsule btn-sm" to="">Sign Up</StyledLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
