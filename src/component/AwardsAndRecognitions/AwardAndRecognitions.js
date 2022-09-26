import React,{memo}from "react";
import { Link, useNavigate } from "react-router-dom";
import { Awards } from '../../Assets/index'
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import QuickLinksComp from "../QuickLinks/QuickLinks";
import skoolzLogo from '../../Assets/Images/skoolz.PNG';
import './AwardAndRecognitions.css';

const AwardAndRecognitionsComp = () => {
    const navigate = useNavigate()
    return (
        <div>
            <HeaderComponent />
            <div className="AwardAndRecognitionsContainer baseContainer">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <div className="headerPart my-4">
                            <h1>Awards & Recognitions</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 mb-3">
                        <div className="headLinks m-3">
                            <span><Link to='/'><a>Home &nbsp;&gt;&nbsp;</a></Link><a href="#">Awards</a></span>
                        </div>
                    </div>
                </div>
                <div className="AwardContainer">
                    <div className="row">
                        <div className="col-lg-9 col-sm-12 col-md-12">
                            {Awards.map((value, index) => (
                                <div className="card awardCard m-2">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center ">
                                            <img className="img-fluid p-3"
                                                src={value.AwardImage} />
                                        </div>
                                        <div className="col-lg-6 col-sm-12 col-md-12 d-flex flex-column align-content-between">
                                            <div className="d-flex align-items-start flex-column eventContent mb-2">
                                                <div className="awardsLink m-2">
                                                    <h5><Link to='/awards/index' state={Awards[index]}><a>{value.AwardName}</a></Link></h5>
                                                </div>
                                                {value.AwardsDis.map((data) => (
                                                    <div className="awardDiscription mx-2">
                                                        <p>{data}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="cardFooter p-2 d-flex align-items-end">
                                                <img src={skoolzLogo} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-12">
                            <QuickLinksComp />
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}
export default memo(AwardAndRecognitionsComp);