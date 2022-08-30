import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import './EventsWebinardetailsComponent.css';
import RegistrationKidsEvent from "./RegistrationKidsEvent";

const EventsWebinardetailsComponent = () => {
    const [eventType,setEventType]=useState('');
    const location = useLocation();
    useEffect(()=>{
        setEventType(location.state.eventContentType)
    },[location])
    console.log(location)
    return (
        <div>
            <HeaderComponent />
            <br /><br /><br />
            <div className="EventsWebinardetails baseContainer mt-4">
                <div className="detailsContainer">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-md-12 m-2">
                            <div className="headLinks">
                                <span><a href="#">Home &nbsp;&gt;&nbsp;</a><a href="#">Blogs &nbsp;&gt;&nbsp;</a><a href="">{location.state.eventName}</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-sm-12 col-md-12">
                            {eventType === "webinars" ? (
                                <div className="card">
                                <div className="row">
                                    <img className="img-fluid" src={location.state.eventImageUrl} />
                                </div>
                                <div className="row">
                                    <div className="eventName m-2">
                                        <strong><h1>{location.state.eventName}</h1></strong>
                                    </div>
                                    <div className="contantDataDis m-2">
                                         
                                    </div>
                                </div>
                                    <div className="card">
                                    <div className="row">
                                                <div className="col-3 speakerimg">
                                                    <div>
                                                        <h1>hello</h1>
                                                    </div>
                                                </div>
                                                <div className="col-9 speakerdetails">
                                                    <div>
                                                        <h1>hai</h1>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                            </div>
                            )
                            : (
                                <div className="card">
                                <div className="row">
                                    <img className="img-fluid" src={location.state.eventImageUrl} />
                                </div>
                                <div className="row">
                                    <div className="eventName m-2">
                                        <strong><h1>{location.state.eventName}</h1></strong>
                                    </div>
                                </div>
                                {location && location.state && location.state.content && location.state.content.map((val, key) => (
                                    <div>
                                        <div className="eventHeader m-2">
                                            <strong>{val.contentHeader}</strong>
                                        </div>
                                        <div className="eventText mx-4">
                                            <p>{val.content}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="row">
                                    <div className="registerForm">
                                        <RegistrationKidsEvent />
                                    </div>
                                </div>
                            </div>
                            )}
                            
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-12">
                            <div className="QuicklinksListOne">
                                <h5 className="highlightText"> Quick links</h5>
                                <ul className="QuicklinksButtonGroup">
                                    <li><button type="button" className="QuicklinksButton m-1">Home</button></li>
                                    <li><button type="button" className="QuicklinksButton m-1">School Search</button></li>
                                    <li><button type="button" className="QuicklinksButton m-1">Events/Webinar</button></li>
                                    <li><button type="button" className="QuicklinksButton m-1">Blogs</button></li>
                                    <li><button type="button" className="QuicklinksButton m-1">Awards & Recongnition</button></li>
                                    <li><button type="button" className="QuicklinksButton m-1">Contact Us</button></li>
                                    <li><button type="button" className="QuicklinksButton m-1">About Skoolz</button></li>
                                </ul>
                            </div>
                            <div className="QuicklinksListTwo">
                                <h5 className="highlightText">Quick schools<br /> search</h5>
                                <ul className="QuicklinksButtonGroup">
                                    <li><button type="button" className="QuicklinksButton m-1">CBSE Schools in Bengaluru</button></li>
                                    <li><button type="button" className="QuicklinksButton m-1">ICSE Schools in Bengaluru</button></li>
                                    <li><button type="button" className="QuicklinksButton m-1">IGCES Schools in Bengaluru</button></li>
                                    <li><button type="button" className="QuicklinksButton m-1">Pre-School in Bengaluru</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}
export default EventsWebinardetailsComponent;