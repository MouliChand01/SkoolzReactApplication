import React, { useEffect, useState,memo } from "react";
import { Link, useLocation } from "react-router-dom";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./EventsWebinardetailsComponent.css";
import RegistrationKidsEvent from "./RegistrationKidsEvent";
import QuickLinksComp from "../QuickLinks/QuickLinks";

const EventsWebinardetailsComponent = () => {
    const location = useLocation();
    const [eventData ,setEventData]=useState(location.state)
    const [eventType, setEventType] = useState(location.state.eventContentType);

    return (
        <div>
            <HeaderComponent />
            <div className="EventsWebinardetails baseContainer mt-4">
                <div className="detailsContainer">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-md-12 m-2">
                            <div className="headLinks">
                                <span>
                                    <Link to='/'><a>Home &nbsp;&gt;&nbsp;</a></Link>
                                    <Link to='/events-webinar'><a>Events &nbsp;&gt;&nbsp;</a></Link>
                                    <Link to='/events-webinar-details'><a>{eventData.eventName}</a></Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-sm-12 col-md-12">
                            {eventType === "webinars" ? (
                                <div className="card eventDetalisCard">
                                    <div className="row">
                                        <img
                                            className="img-fluid p-4"
                                            src={eventData.eventImageUrl}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="eventName m-2">
                                            <strong>
                                                <h1>{eventData.eventName}</h1>
                                            </strong>
                                        </div>
                                    </div>
                                    {
                                        eventData.content &&
                                        eventData.content.map((val) => (
                                            <div className="contantDataDis m-2">
                                                <div>
                                                    {val.datadis.map((val1) => (
                                                        <p>{val1}</p>
                                                    ))}
                                                </div>
                                                <div>
                                                    {val.targetData.map((val2, index) => (
                                                        <div>
                                                            <h6><strong>{val2.header}</strong></h6>
                                                            <p className="m-3">{val2.data}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="card Innercard m-3">
                                                    {val.speakercard.map((val4, index) => (
                                                        <div className="row">
                                                            <div className="col-lg-3 col-6 speakerimg">
                                                                <img className="img-fluid" src={val4.speakerimg} />
                                                            </div>
                                                            <div className="col-lg-9 col-6 speakerdetails">
                                                                <div>
                                                                    <h4>Speaker:</h4>
                                                                    <p><strong>{val4.speakerName}</strong></p>
                                                                    <p>{val4.speakerText}</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    ))}
                                                </div>
                                                <div>
                                                    <h6><strong>Aboutspeaker :</strong></h6>
                                                    <div className="m-4">
                                                        {val.Aboutspeaker.map((val3) => (
                                                            <ul>
                                                                <li>{val3}</li>
                                                            </ul>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ) : (
                                <div className="card eventDetalisCard">
                                    <div className="row">
                                        <img
                                            className="img-fluid p-4"
                                            src={eventData.eventImageUrl}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="eventName m-2">
                                            <strong>
                                                <h1>{eventData.eventName}</h1>
                                            </strong>
                                        </div>
                                    </div>
                                    {
                                        eventData.content &&
                                        eventData.content.map((val, index) => (
                                            <div key={index}>
                                                {val.contentDis.map((val1, index1) => (
                                                    <div key={index1}>
                                                        {val1.splcontent && val1.splcontent.map((spl) => (
                                                            <div className="splcontent m-2">
                                                                <h3>{spl}</h3>
                                                            </div>
                                                        ))}
                                                        <div className="eventHeader m-2">
                                                            <h2>{val1.header}</h2>
                                                        </div>
                                                        <div className="m-4">
                                                            {val1.content && val1.content.map((val2) => (
                                                                <p>{val2}</p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    <div className="row">
                                        <div className="registerForm">
                                            <RegistrationKidsEvent />
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
                            )}
                        </div>

                        <div className="col-lg-3 col-sm-12 col-md-12">
                            <QuickLinksComp/>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
};
export default memo(EventsWebinardetailsComponent);
