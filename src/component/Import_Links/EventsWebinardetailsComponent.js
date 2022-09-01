import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import "./EventsWebinardetailsComponent.css";
import RegistrationKidsEvent from "./RegistrationKidsEvent";

const EventsWebinardetailsComponent = () => {
    const location = useLocation();
    const [eventType, setEventType] = useState(location.state.eventContentType);


    // useEffect(() => {
    //     console.log("hiiuiy")
    //     if(location?.state?.eventContentType){
    //         setEventType(location.state.eventContentType);
    //     }
    // },[location.state.eventContentType]);

    // console.log(location);

    return (
        <div>
            <HeaderComponent />
            <br />
            <br />
            <br />
            <div className="EventsWebinardetails baseContainer mt-4">
                <div className="detailsContainer">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-md-12 m-2">
                            <div className="headLinks">
                                <span>
                                    <a href="#">Home &nbsp;&gt;&nbsp;</a>
                                    <a href="#">Blogs &nbsp;&gt;&nbsp;</a>
                                    <a href="">{location.state.eventName}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-sm-12 col-md-12">
                            {eventType === "webinars" ? (
                                <div className="card">
                                <div className="row">
                                    <img
                                        className="img-fluid"
                                        src={location.state.eventImageUrl}
                                    />
                                </div>
                                <div className="row">
                                    <div className="eventName m-2">
                                        <strong>
                                            <h1>{location.state.eventName}</h1>
                                        </strong>
                                    </div>
                                </div>
                                {
                                    location.state.content &&
                                    location.state.content.map((val) => (
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
                                <div className="card">
                                    <div className="row">
                                        <img
                                            className="img-fluid"
                                            src={location.state.eventImageUrl}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="eventName m-2">
                                            <strong>
                                                <h1>{location.state.eventName}</h1>
                                            </strong>
                                        </div>
                                    </div>
                                    {
                                        location.state.content &&
                                        location.state.content.map((val, index) => (
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
                                </div>
                            )}
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-12">
                            <div className="QuicklinksListOne">
                                <h5 className="highlightText"> Quick links</h5>
                                <ul className="QuicklinksButtonGroup">
                                    <li>
                                        <button type="button" className="QuicklinksButton m-1">
                                            Home
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="QuicklinksButton m-1">
                                            School Search
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="QuicklinksButton m-1">
                                            Events/Webinar
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="QuicklinksButton m-1">
                                            Blogs
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="QuicklinksButton m-1">
                                            Awards & Recongnition
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="QuicklinksButton m-1">
                                            Contact Us
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="QuicklinksButton m-1">
                                            About Skoolz
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="QuicklinksListTwo">
                                <h5 className="highlightText">
                                    Quick schools
                                    <br /> search
                                </h5>
                                <ul className="QuicklinksButtonGroup">
                                    <li>
                                        <button type="button" className="QuicklinksButton m-1">
                                            CBSE Schools in Bengaluru
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="QuicklinksButton m-1">
                                            ICSE Schools in Bengaluru
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="QuicklinksButton m-1">
                                            IGCES Schools in Bengaluru
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="QuicklinksButton m-1">
                                            Pre-School in Bengaluru
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
};
export default EventsWebinardetailsComponent;
