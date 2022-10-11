import React from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import './ParentLogin.css';

const validate = values => {
    const errors = {};
    if (!values.Username) {
        errors.Username = 'UserName Is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Username)) {
        errors.Username = 'Invalid email address';
    }
    if (!values.mobilnumber) {
        errors.mobilnumber = 'MobileNumber Is Required';
    }
    if (!values.password) {
        errors.password = 'password Is Required';
    }
    if (!values.reEnterpass) {
        errors.reEnterpass = 'reEnterpass Is Required';
    }
    if (!values.check1) {
        errors.check1 = 'Select Checkbox to accept Terms & Conditions';
    }

    return errors;
};

const ParentRegistrationComp = () => {
    const formik = useFormik({
        initialValues: {
            Username: '',
            mobilnumber: '',
            password: '',
            reEnterpass: '',
            check1:'',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
  
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
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="px-2">
                                        <div class="input-group flex-nowrap my-4">
                                            <span class="input-group-text" style={{ "backgroundColor": "rgb(235, 234, 234)", "border": "none" }} ><FontAwesomeIcon icon={faEnvelope} /></span>
                                            <input type="mail" id="Username" class="form-control" placeholder="Username" onChange={formik.handleChange} value={formik.values.Username} />
                                        </div>
                                        {formik.errors.Username ? <div className="errorMsg">{formik.errors.Username}</div> : null}
                                        <div class="input-group flex-nowrap my-4">
                                            <span class="input-group-text" style={{ "backgroundColor": "rgb(235, 234, 234)", "border": "none" }}>+ 91-</span>
                                            <input type="tel" id="mobilnumber" class="form-control" placeholder="Mobile Number" onChange={formik.handleChange} value={formik.values.mobilnumber} maxLength={10} />
                                        </div>
                                        {formik.errors.mobilnumber ? <div className="errorMsg">{formik.errors.mobilnumber}</div> : null}
                                        <div class="input-group flex-nowrap my-4">
                                            <span class="input-group-text" style={{ "backgroundColor": "rgb(235, 234, 234)", "border": "none" }}><FontAwesomeIcon icon={faLock} /></span>
                                            <input type="password" id="password" class="form-control" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} />
                                        </div>
                                        {formik.errors.password ? <div className="errorMsg">{formik.errors.password}</div> : null}
                                        <div class="input-group flex-nowrap my-4">
                                            <span class="input-group-text" style={{ "backgroundColor": "rgb(235, 234, 234)", "border": "none" }}><FontAwesomeIcon icon={faLock} /></span>
                                            <input type="password" id="reEnterpass" class="form-control" placeholder="Re-enter Password" onChange={formik.handleChange} value={formik.values.reEnterpass} />
                                        </div>
                                        {formik.errors.reEnterpass ? <div className="errorMsg">{formik.errors.reEnterpass}</div> : null}
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="check1" onChange={formik.handleChange} value={formik.values.check1}/>
                                            <label classname="form-check-label" for="check1" style={{"textAlign":"left"}}>I have read and agree to the <a href="#">Terms & Conditions</a> </label>
                                        </div>
                                        {formik.errors.check1 ? <div className="errorMsg">{formik.errors.check1}</div> : null}
                                        <button className="parentRegisterBtn" type="submit">Register</button>
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