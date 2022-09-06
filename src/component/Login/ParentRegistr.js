import React from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './ParentLogin.css';

const ParentRegistrationComp = () => {
    return (
        <div>
            <HeaderComponent />
            <div className="registercontainer">
                <div className="heroImage">
                    <div className="col-12">
                        <div className="card registerCard mt-5">
                            <div className="cardLogo d-flex"><FontAwesomeIcon className="fa-2xl" icon={faUser} /></div>
                            <div className="card-header">
                                <h3 className="title text-center m-3">Registration To Search, Compare Apply To The Best School</h3>
                            </div>
                            <div className="card-body mb-1">
                                <form>
                                    <div className="px-2">
                                        <div class="input-group flex-nowrap my-4">
                                            <span class="input-group-text" style={{ "backgroundColor":"rgb(235, 234, 234)", "border": "none" }} ><FontAwesomeIcon icon={faEnvelope} /></span>
                                            <input type="mail" class="form-control" placeholder="Username" aria-label="Username" />
                                        </div>
                                        <div class="input-group flex-nowrap my-4">
                                            <span class="input-group-text" style={{ "backgroundColor":"rgb(235, 234, 234)", "border": "none" }}>+ 91-</span>
                                            <input type="tel" class="form-control" placeholder="Mobile Number" />
                                        </div>
                                        <div class="input-group flex-nowrap my-4">
                                            <span class="input-group-text" style={{ "backgroundColor":"rgb(235, 234, 234)", "border": "none" }}><FontAwesomeIcon icon={faLock} /></span>
                                            <input type="password" class="form-control" placeholder="Password" aria-describedby="passwordHelpBlock" />
                                        </div>
                                        <div class="input-group flex-nowrap my-4">
                                            <span class="input-group-text" style={{ "backgroundColor":"rgb(235, 234, 234)", "border": "none" }}><FontAwesomeIcon icon={faLock} /></span>
                                            <input type="password" class="form-control" placeholder="Re-enter Password" aria-describedby="passwordHelpBlock" />
                                        </div>
                                        <div class="form-check">
                                                <input type="checkbox" class="form-check-input" id="check1" value="Remember me" />
                                                <label class="form-check-label" for="check1">I have read and agree to the <a href="#">Terms & Conditions</a> </label>
                                        </div>
                                        <button className="parentRegisterBtn">Register</button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer m-4">
                               Already registered? &nbsp; <Link to='/login' className="login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default ParentRegistrationComp;