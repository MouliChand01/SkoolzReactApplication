import React, { useEffect, useState } from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import './ParentLogin.css'
import { Link } from "react-router-dom";
import { GoogleLogin} from "react-google-login";
import { useFormik } from 'formik';
import SkoolzHomepageComponent from "../SkoolzHomePage/SkoolzHomePage";
import { Button } from "react-bootstrap";

const validate = values => {
    const errors = {};
    if (!values.Username) {
        errors.Username = 'UserName Is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Username)) {
        errors.Username = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'password Is Required';
    }  
    return errors;
};


const ParentLoginComp = () => {
    const clientId = "280716774713-ln7m28uobck7kbmpkd5do2h4ci2ipj5j.apps.googleusercontent.com";
    const [data, setData] = useState(false)


    const onSuccess = (res) => {
        console.log("login sucess", res.profileObj)
        localStorage.setItem('email', res.profileObj.email)
        setData(false)
    }
    
    const onFailure = (res) => {
        console.log("login Failure", res);
    }

    const seingGoogle = () => {
        history.pushState({},'','/login')
        setData(true)
    }

    const Login = () =>{
        setData(false)
    }

    const formik = useFormik({
        initialValues: {
            Username: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
  

    return (
        <div>
            <HeaderComponent seingGoogle={seingGoogle} />
            {data ? (<div>
                <div className="parentLoginContainer">
                    <div className="heroImage">
                        <div className="col-12">
                            <div className="card loginCard mt-5">
                                <div className="cardLogo d-flex"><FontAwesomeIcon className="fa-2xl" icon={faUser} /></div>
                                <div className="card-header">
                                    <h3 className="title text-center m-3">Parent Login To Search, Compare, Apply For The Best School</h3>
                                </div>
                                <div className="card-body mb-1">
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="px-2">
                                            <div class="input-group flex-nowrap my-4">
                                                <span class="input-group-text" style={{ "backgroundColor": "rgb(235, 234, 234)", "border": "none" }} ><FontAwesomeIcon icon={faUser} /></span>
                                                <input type="mail" class="form-control" placeholder="Username" id="Username" onChange={formik.handleChange} value={formik.values.Username} />
                                            </div>
                                            {formik.errors.Username ? <div className="errorMsg">{formik.errors.Username}</div> : null}
                                            <div class="input-group flex-nowrap my-4">
                                                <span class="input-group-text" style={{ "backgroundColor": "rgb(235, 234, 234)", "border": "none" }}><FontAwesomeIcon icon={faLock} /></span>
                                                <input type="password" class="form-control" placeholder="Password" id="password" onChange={formik.handleChange} value={formik.values.password}/>
                                            </div>
                                            {formik.errors.password ? <div className="errorMsg">{formik.errors.password}</div> : null}
                                            <Button className="parentLoginBtn mx-auto" style={{cursor:"pointer",width:"20px"}} type="submit">Login</Button>
                                            <div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div class="form-check">
                                                            <a href="#">
                                                                <input type="checkbox" class="form-check-input" id="check1" value="Remember me" />
                                                                <label class="form-check-label" for="check1">Remember me</label>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="forgetpassword">
                                                            <Link to="/forgot-password">Forgot Password ?</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <p className="text-center m-2">OR</p>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="signIn">
                                                            <GoogleLogin
                                                                clientId={clientId}
                                                                buttonText="Sign In with Google account"
                                                                onSuccess={onSuccess}
                                                                onFailure={onFailure}
                                                                cookiePolicy={'single_host_origin'}
                                                                isSignedIn={true}
                                                            /></div>
                                                    </div>
                                                    <div className="col-6 ">
                                                        <div className="facebookBtn">
                                                            Sign In with Facebook account
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer m-4">
                                    Not registered yet?  &nbsp; <Link to='/register' className="register">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
                : (<div>
                    <SkoolzHomepageComponent />
                </div>)}
        </div>
    )
}
export default ParentLoginComp