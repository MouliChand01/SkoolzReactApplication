import React from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import './ParentLogin.css';
const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email field is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    } 
    return errors;
  };
const ForgotPassword =()=>{
    const formik = useFormik({
        initialValues: {
          email: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        }
      });
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
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="px-2">
                                        <div class="input-group flex-nowrap my-4">
                                            <span class="input-group-text" style={{ "backgroundColor":"rgb(235, 234, 234)", "border": "none" }} ><FontAwesomeIcon icon={faEnvelope} /></span>
                                            <input type="mail" id="email" class="form-control" placeholder="Username"onChange={formik.handleChange} value={formik.values.email}/>
                                        </div>
                                        {formik.errors.email ? <div className="errorMsg">{formik.errors.email}</div> : null}
                                        <button className="parentRegisterBtn" type="submit">Reset Password</button>
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