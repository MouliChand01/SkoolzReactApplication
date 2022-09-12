import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import QuickLinksComp from "../QuickLinks/QuickLinks";
import './AwardDetailsComp.css';

const AwardDetailsComp = () => {
    const location = useLocation();
    const [awardType, setAwardType] = useState(location.state)
    return (
        <div>
            <HeaderComponent />
            <div className="awardDetailsContainer baseContainer">
                <div className="row">
                    <div className="col-lg-9 col-sm-12 col-md-12">
                        <div className="col-lg-9 col-md-12 col-sm-12 mb-3">
                            <div className="headLinks">
                                <span>
                                    <Link to='/'><a>Home &nbsp;&gt;&nbsp;</a></Link>
                                    <Link to='/awards'><a>Awards &nbsp;&gt;</a></Link>
                                    <a>{awardType.AwardName}</a>
                                </span>
                            </div>
                        </div>
                        <div className="card awardsCard">
                            <div className="awardImage p-4 ">
                                <img className="img-fluid" src={awardType.AwardImage} />
                            </div>
                            <div className="awardName mx-4 mt-2 mb-2">
                                <h1>{awardType.AwardName}</h1>
                            </div>
                            <div className="awardDis">
                                {awardType.Awardcontent &&
                                    awardType.Awardcontent.map((val, index) => (
                                        <div className="awardData m-3 mx-4">
                                            <div>
                                                {val.content &&
                                                    val.content.map((data) =>
                                                        <p>{data}</p>)}
                                            </div>
                                            <div className="awardHeader">
                                                {val.header}
                                            </div>
                                            <div className="awardsplText">
                                                {val.splcontent}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-12">
                        <QuickLinksComp />
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}
export default AwardDetailsComp;