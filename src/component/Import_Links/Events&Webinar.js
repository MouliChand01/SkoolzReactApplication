import React,{memo} from "react";
import { Link, useNavigate } from "react-router-dom"
import skoolzLogo from '../../Assets/Images/skoolz.PNG'
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { EventsAndWebinar } from '../../Assets/index'
import './Events&Webinar.css'
import QuickLinksComp from "../QuickLinks/QuickLinks";


const Events_WebinarComponent = () => {
    const navigate = useNavigate()

    return (
        <div>
            <HeaderComponent />
            <div className="eventsAndWebinar baseContainer">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                        <div className="headerPart my-4">
                            <h1>Events / Webinar / Workshop</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 mb-3">
                        <div className="headLinks m-3">
                            <span>
                                <Link to='/'><a>Home &nbsp;&gt;&nbsp;</a></Link>
                                <Link to='/events-webinar'><a>Events</a></Link>
                           </span>
                        </div>
                        {
                            EventsAndWebinar.map((val, index) => (
                                <div className=" p-3">
                                    <div className="card eventCard">
                                        <div className="row align-items-stretch">
                                            <div className="col-lg-6 col-sm-12 col-md-12">
                                                <img className="img-fluid" src={val.eventImageUrl} />
                                            </div>
                                            <div className="col-lg-6 col-sm-12 col-md-12 d-flex flex-column align-content-between">
                                                <div className="d-flex align-items-start flex-column eventContent mb-2">
                                                    <div className="eventsLink m-2">
                                                        <h5><strong><a href="#"><Link to={`/events-webinar/${val.eventName.split(' ').join('-').toLocaleLowerCase()}`} state={EventsAndWebinar[index]}>{val.eventName}</Link></a></strong></h5>
                                                    </div>
                                                    <div className="eventDiscription mt-3 m-1">
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
                      <QuickLinksComp/>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}
export default memo(Events_WebinarComponent);