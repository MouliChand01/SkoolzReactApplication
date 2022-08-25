import React from "react";
import skoolzLogo from '../../Assets/Images/skoolz.PNG'
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { EventsAndWebinar } from '../../Assets/index'
import './Events&Webinar.css'

const Events_WebinarComponent = () => {
    return (
        <div>
            {/* {console.log(EventsAndWebinar)} */}
            <HeaderComponent />
            <br /><br /><br /><br /><br />
            <div className="eventsAndWebinar baseContainer">
                <div className="row">
                    <div className="col-lg-12 col-md-12 mb-3">
                        <div className="headerPart my-4">
                            <h1>Events/Webinar/Workshop</h1>
                        </div>                      
                    </div>
                    <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 mb-3">
                    <div className="headLinks">
                            <span><a href="#">Home &nbsp;&gt;&nbsp;</a><a href="#">Events</a></span>
                    </div>
                    {
                        EventsAndWebinar.map((val, index) => (
                            <div className=" p-3">
                                <div className="card">
                                    <div className="row align-items-stretch">
                                        <div className="col-lg-6 col-sm-12 col-md-12">
                                            <img className="img-fluid" src={val.eventImageUrl} />
                                        </div>
                                        <div className="col-lg-6 col-sm-12 col-md-12 d-flex flex-column align-content-between">
                                            <div className="d-flex align-items-start flex-column">
                                            <div className="eventsLink m-2">
                                                <h5><strong><a href="#">{val.eventName}</a></strong></h5>
                                            </div>
                                            <div className="eventDiscription mt-3 m-2">
                                                <p>{val.eventDiscription}</p>
                                            </div>
                                            </div>
                                            <div className="cardFooter p-2 d-flex align-items-end">
                                                <img src={skoolzLogo} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
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
                            <h5 className="highlightText">Quick schools<br/> search</h5>
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
export default Events_WebinarComponent;