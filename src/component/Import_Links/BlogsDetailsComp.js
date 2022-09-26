import React, { useState,memo } from "react";
import { useLocation ,Link} from "react-router-dom";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './BlogsDetailsComp.css';
import QuickLinksComp from "../QuickLinks/QuickLinks";

const BlogsDetailsComp = () => {
    const location = useLocation();
    const [blogType, setBlogType] = useState(location.state)

    return (
        <div>
            <HeaderComponent />
            <div className="blogsDetailsContainer baseContainer">
                <div className="detailsContainer">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-md-12 m-2">
                            <div className="headLinks">
                                <span>
                                    <Link to='/'><a>Home &nbsp;&gt;&nbsp;</a></Link>
                                    <Link to='/blogs'><a>Blogs &nbsp;&gt;&nbsp;</a></Link>
                                    <a href="">{location.state.blogName}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-sm-12 col-md-12">
                            <div className="card blogDetalisCard">
                                <div className="row">
                                    <img className="img-fluid p-4"
                                        src={location.state.blogImage} />
                                </div>
                                <div className="row">
                                    <div className="eventName m-2">
                                        <h2>{location.state.blogName}</h2>
                                    </div>
                                </div>
                                {blogType.blogContent &&
                                    blogType.blogContent.map((val, index) => (
                                        <div className="contantDataDis m-3">
                                            {
                                                val.contentDis.map((val1, index) => (
                                                    <div>
                                                        <div className="blogHeaders">
                                                            <h4>{val1.header}</h4>
                                                        </div>
                                                        <div className="splText">
                                                            <h6 className="m-4">{val1.splcontent}</h6>
                                                        </div>
                                                        {
                                                            val1.content &&
                                                            val1.content.map((val2) => (
                                                                <p>{val2}</p>
                                                            ))
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))}
                                <div className="card leaderCard m-4">
                                    <div className="row">
                                        <div className="col-lg-3 col-6">
                                            <img className="img-fluid p-2" src={location.state.leaderImage} />
                                        </div>
                                        <div className="col-lg-9 col-6 leaderData">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <h4>Posted by:</h4>
                                                </div>
                                                <div className="col-lg-6 d-flex">
                                                    <div className="ms-auto">
                                                        <strong>Follow on:<span><a href={location.state.laderLinkedIn} target="_blank">&nbsp; in &nbsp;</a></span></strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4>{location.state.leaderName}</h4>
                                            <h6>{location.state.laderDis}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="socalMediaIcons ms-auto px-3 pb-3">
                                    <div>
                                        <a>
                                            <span> Share : &nbsp;</span>
                                            <button className="faceBook" style={{ "backgroundColor": "#3B5998" }}><FontAwesomeIcon icon={faFacebookF} style={{ "color": "white" }} /></button>
                                            <button className="whatesUp" style={{ "backgroundColor": "#1DA1F2" }}><FontAwesomeIcon icon={faWhatsapp} style={{ "color": "white" }} /></button>
                                            <button className="Twiter" style={{ "backgroundColor": "#4DC247" }}><FontAwesomeIcon icon={faTwitter} style={{ "color": "white" }} /></button>
                                            <button className="LinkedIn" style={{ "backgroundColor": "blue" }}><FontAwesomeIcon icon={faLinkedin} style={{ "color": "white" }} /></button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-12">
                           <QuickLinksComp/>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}
export default memo(BlogsDetailsComp);