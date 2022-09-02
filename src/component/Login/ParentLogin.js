import React, { useEffect, useState } from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons'
import './ParentLogin.css'


const ParentLoginComp = () => {
    const [activeStatus, setActiveStatus] = useState(true);

    const toggleStatus = () => {
        setActiveStatus(prevState => !prevState)
    }
    return (
        <div className="ParentLogin">
            <HeaderComponent />
            <br /><br />
            <div className="heroImagecontainer mt-5">
                <div className="container mt-5" id="container">

                    <div className={`form-container sign-up-container mt-2 ${!activeStatus && 'active'}`}>
                        <form action="#">
                            <div className="social-container">
                                <a href="#" className="social"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#" className="social"><FontAwesomeIcon icon={faGoogle} /></a>
                                <a href="#" className="social"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                            <input className="formcontrol" type="email" placeholder="Email" />
                            <input className="formcontrol" type="tel" placeholder="Mobile Number" />
                            <input className="formcontrol" type="password" placeholder="Password" />
                            <input className="formcontrol" type="password" placeholder="Re- enter Password" />
                            <div className="form-check">
                                <input className="form-check-input" for="checkboxSignIn" type="checkbox" value="I Remember me" />
                                <label className="form-check-label">I have read and agree to the
                                    <a href="#">Terms & Conditions</a>
                                </label>
                            </div>
                            
                            <button className="btn btn-info btn-rounded" >Sign up</button>
                        </form>
                    </div>

                    <div className={`form-container sign-up-container mt-2 ${activeStatus && 'active'}`}>
                        <form action="#">
                            {/* <h1 className="font-weight-bold">Sign in</h1> */}
                            <div className="social-container">
                                <a href="#" className="social"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#" className="social"><FontAwesomeIcon icon={faGoogle} /></a>
                                <a href="#" className="social"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                            <span>or use your account</span>
                            <input className="formcontrol" type="email" placeholder="Email" />
                            <input className="formcontrol" type="password" placeholder="Password" />
                            <div className="form-check">
                                <input className="form-check-input" for="checkboxSignIn" type="checkbox" value="I Remember me" />
                                <label className="form-check-label">&nbsp;&nbsp;Remember me</label>
                            </div>
                            <div className="mt-1">
                                <span><a href="#">Forgot password?</a></span>
                            </div>
                            <button className="btn btn-info btn-rounded" >Sign In</button>
                        </form>
                    </div>

                    <div className="overlay-container">
                        <div className="overlay">
                            <div className={`overlay-panel overlay-left mt-2 ${!activeStatus && 'active'}`}>
                                <h1>Good to see you!</h1>
                                <p>You already have an account? <br />Sign in!</p>
                                <button className="but" id="signIn" onClick={toggleStatus}>Sign In</button>
                            </div>
                            <div className={`overlay-panel overlay-right mt-2 ${activeStatus && 'active'}`}>
                                <h1>Hello, Parent !</h1>
                                <p>You don't have account yet? Don't worry! You still can join us</p>
                                <button className="but" id="signUp" onClick={toggleStatus}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}
export default ParentLoginComp;