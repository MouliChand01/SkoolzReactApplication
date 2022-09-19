import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import baner from '../../Assets/Images/Banner_icons.jpg'
import "./skoolz.css";

const Banercomp = () => {
    return (
        <div>
            <div className="schoolMainHome ">
                <div className="banner-bg d-flex align-items-center">
                    <div className="container">
                        <img className="img-fluid" src={baner} />
                        <div className="banerText">
                            FIND SCHOOLS &nbsp;& HOBBY CLASSES FOR YOUR <br /> CHILD IN 10 MINUTES.
                        </div>
                        <div className="row">
                            <div className="col-lg-10 col-md-12 mx-auto mt-4">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Enter location & search for nearby Schools & Hobby classes" aria-label="Recipient's username" aria-describedby="button-addon2" style={{"height":"46px"}} />
                                    <button class="btn" type="button" id="button-addon2" >
                                        <FontAwesomeIcon icon={faSearch} style={{ "color": "white" }} />
                                        &nbsp;Search</button>
                                </div>
                                <div className="srerchBoxbellow d-flex pe-1">
                                <div className="ms-auto  pe-2">
                                    <span>
                                    <i class="bi bi-lightbulb-fill" style={{"color":"#FCAE1E"}}></i>&nbsp;
                                    </span>
                                    <a href="#">How Skoolz Works</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banercomp;