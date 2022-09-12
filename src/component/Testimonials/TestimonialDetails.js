import React from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import QuickLinksComp from "../QuickLinks/QuickLinks";
import { Testimonial } from '../../Assets/index'
import './TestimonialDetails.css'
import { Link } from "react-router-dom";

const TestimonialDetailsComp = () => {
    return (
        <div>
            <HeaderComponent />
            <div className="testimonialContainer baseContainer">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <div className="headerPart my-4">
                            <h1>Testmonials</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 mb-3">
                        <div className="headLinks m-3">
                            <span><Link to='/'><a>Home &nbsp;&gt;&nbsp;</a></Link><a href="#">Testmonials</a></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12">
                        {Testimonial.map((data, index) => (
                            <div key={index} className="card testimonialCard m-4">
                                <div className="row">
                                    <div className="col-lg-9 col-md-12 col-sm-12">
                                        <p className="p-2 mt-2">{data.testimonialDis}</p>
                                        <div className="Parent mx-2">{data.parentName}</div>
                                        <div className="parentPost mx-2">{data.PostedBy}</div>
                                    </div>
                                    <div className="col-lg-3 col-md-12 col-sm-12">
                                        <div className="parentImage p-3">
                                            <img className="img-fluid" src={data.parentImage} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="parentOpinion m-4">
                            {/* <div className="form-group">
                                <textarea class="form-control" rows="3"></textarea>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <QuickLinksComp />
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}
export default TestimonialDetailsComp;