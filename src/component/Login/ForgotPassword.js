import React from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './ParentLogin.css';

const ForgotPassword =()=>{
    return(
        <div>
         <HeaderComponent/>
         <div className="passwordContainer">
         <div className="heroImage">
                    <div className="col-12">
                        <div className="card forgetpassCard mt-5">
                            <div className="cardLogo d-flex"><FontAwesomeIcon className="fa-2xl" icon={faUser} /></div>
                            <div className="card-header">
                                <h3 className="title text-center m-3">Forgot Your Password? Enter Your Email To Retrieve Email</h3>
                            </div>
                            <div className="card-body mb-1">
                                <form>
                                    <div className="px-2">
                                        <div class="input-group flex-nowrap my-4">
                                            <span class="input-group-text" style={{ "backgroundColor":"rgb(235, 234, 234)", "border": "none" }} ><FontAwesomeIcon icon={faEnvelope} /></span>
                                            <input type="mail" class="form-control" placeholder="Username" aria-label="Username" />
                                        </div>
                                        <button className="parentRegisterBtn">Reset Password</button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer m-4">
                            Remember your password?  &nbsp; <Link to='/login' className="login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
         <FooterComponent/>
        </div>
    )
}
export default ForgotPassword;