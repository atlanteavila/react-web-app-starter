import React, { Component } from 'react';
import * as firebase from 'firebase';
import firebaseApp from '../../../Firebase';
import { withRouter } from "react-router";
import styled from 'styled-components'
import isEmail from 'validator/lib/isEmail';

const bottomPartHeight = "150px";
const FullWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5c5c5c;
`
const LoginContainer = styled.div`
    width: 100%;
    max-width: 27%;
    min-height: 49%;
    margin: 5px;
    background: #e56326;
    color: #fff;
    padding: 30px;
    text-align: center;
    border-radius: 8px;
    position: relative;
    padding-bottom: ${bottomPartHeight};
    box-sizing: border-box;
    overflow: hidden;
`
const BottomPart = styled.div`
    background-color:  #2c2c2c;
    height: ${bottomPartHeight};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 30px;
    box-sizing: border-box;
`
let that;

class Authenticate extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };
        //
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePassChange = this.handlePassChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        that = this;
    }
    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }
    handlePassChange(e) {
        this.setState({ password: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        var email = this.state.email.trim();
        var password = this.state.password.trim();
        if (isEmail(email)) {
            firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() => this.props.history.push('/dashboard'))
            .catch(function (error) {
                // Handle Errors here.
                var errorMessage = error.message;
                alert("errorMessage: " + errorMessage)
            });
        } else {
            alert("Email Address in not valid");
        }
    }
    handleGoogleSignIn(e) {
        e.preventDefault();
        var provider = new firebase.auth.GoogleAuthProvider();
        firebaseApp.auth().signInWithPopup(provider).then(function (result) {
            var user = result.user;
            // var token = result.credential.accessToken;
            if (user) {
                that.props.history.push('/dashboard');
            }
        }).catch(function (error) {
            var errorMessage = error.message;
            alert("Google sign in error: " + errorMessage);
        });
    }
    render() {
        return (
            <FullWrapper>
                <LoginContainer className="Login">
                    {/* <SwyftLogo /> */}
                    <span>Sign In</span>
                    <div className="form-group col-md-4">
                        <form>
                            <input
                                margin="normal"
                                required
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="na"
                                onChange={this.handleEmailChange}
                                value={this.state.email}
                                autoFocus
                            />
                            <input
                                margin="normal"
                                required
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={this.handlePassChange}
                                value={this.state.password}
                                autoComplete="current-password"
                            />
                            <button
                                onClick={this.handleSubmit}
                                variant="contained"
                                text="LOG IN">Log In</button>
                        </form>
                        <br /><br />


                        <BottomPart>
                            {/* `<DividerWithText text="or" />` */}
                            {/* <GoogleButton  onClick={this.handleGoogleSignIn} /> */}

                        </BottomPart>

                    </div>
                </LoginContainer>
            </FullWrapper>
        );
    }
}

export default withRouter(Authenticate)