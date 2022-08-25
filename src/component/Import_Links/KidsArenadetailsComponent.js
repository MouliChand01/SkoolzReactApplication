import React, { useEffect, useState } from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { KidsArena } from '../../Assets/index';
import { useParams } from "react-router-dom";
import './KidsArenadetailsComponent.css';

const KidsArenadetailsComponent = () => {
    const [data, setData] = useState(null)
    const { id } = useParams()

    const loadData = () => {
        const currentData = KidsArena.filter(item => item.id == id)
        setData(...currentData)
        console.log(currentData)
    }

    useEffect(() => {
        loadData()
    }, [id])

    console.log(data)

    return (
        <div>
            <HeaderComponent />
            <br /><br /><br /><br />
            <div className="KidsArenadetails baseContainer mt-4">
                {data && (
                    <div className="detailsContainer">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-md-12 m-2">
                                <div className="headLinks">
                                    <span><a href="#">Home &nbsp;&gt;&nbsp;</a><a href="#">Blogs &nbsp;&gt;&nbsp;</a><a href="">{data.eventTitle}</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-9 col-sm-12 col-md-12">
                                <div className="card">
                                    <div className="m-3">
                                        <img className="img-fluid" src={data.eventImageUrl} />
                                    </div>
                                    {data && data.content && data.content.length && data.content.map((val, key) => (
                                        <div>
                                            <div className="eventTitle m-3">
                                                <h5><strong>{val.contentHeader}</strong></h5>
                                            </div>
                                            <div className="eventText m-3">
                                                <p className="mx-2">{val.content}</p>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="studentdetails m-3">
                                        <div className="card">
                                            <div className="row">
                                                <div className="col-3 studentImage">
                                                    <div className="m-3">
                                                        <img className="img-fluid" src={data.studentImg} />
                                                    </div>
                                                </div>
                                                <div className="col-9 studenData">
                                                    <div className="my-2">
                                                        <h2>Posted by:</h2>
                                                        <h2>{data.studentName}</h2>
                                                        <h5>{data.studentClass}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                )}
            </div>
            <FooterComponent />
        </div>
    )
}
export default KidsArenadetailsComponent;