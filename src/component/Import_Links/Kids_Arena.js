import React from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import skoolzLogo from '../../Assets/Images/skoolz.PNG';
import { KidsArena } from '../../Assets/index'
import './Kids_Arena.css';


import {Link} from "react-router-dom";
  
const KidsArenaComponent = () => {
    return (
        <div>
            {console.log(KidsArena)}
            <HeaderComponent />
            <br /><br /> <br /><br />
            <div className="kidsArena baseContainer">
                <div className="row">
                    <div className="col-lg-12 col-md-12 mb-3">
                        <div className="headerPart my-4">
                            <h1>Kids Arena (Content by Kids)</h1>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9 col-sm-12 col-md-12 mt-2">
                        <div className="headLinks my-4">
                            <span><a href="#">Home &nbsp;&gt;&nbsp;</a><a href="#">Blogs</a></span>
                        </div>
                        {KidsArena.map((val, index) => (
                            <div className="p-3" key={val.id}>
                                <div className="card">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12 col-md-12">
                                            <img className="img-fluid" src={val.eventImageUrl} />
                                        </div>
                                        <div className="col-lg-6 col-sm-12 col-md-12 d-flex flex-column align-content-between">
                                            <div className="d-flex align-items-start flex-column eventContent">
                                                <div className="eventsLink my-2">
                                                    <h5><strong><Link to={`/kids-arena/${val.id}`}>{val.eventTitle}</Link></strong></h5>
                                                </div>
                                                <div className="eventDiscription m-1">
                                                    <p>{val.eventText}</p>
                                                </div>
                                            </div>
                                            <div className="cardFooter d-flex align-items-end">
                                                <img src={skoolzLogo} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-12 mt-4">
                        <div className="kidsArenaRightSide">
                            <div className="title">
                                <h5>Recent Post</h5>
                            </div>
                            <hr />
                            <div className="recentLinks">
                                {KidsArena.map((value, index) => (
                                    <div className="row" key={value.id}>
                                        <div className="col-4">
                                            <div className="recentImageLink">
                                                <a href="# me-4"><img className="img-fluid" src={value.eventImageUrl}/></a>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="recentTextLink">
                                                <a href="#"><strong>{value.eventTitle}</strong></a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default KidsArenaComponent;