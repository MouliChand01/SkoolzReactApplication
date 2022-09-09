import React, { useEffect, useState } from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { KidsArena } from '../../Assets/index';
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import './KidsArenadetailsComponent.css';
import QuickLinksComp from "../QuickLinks/QuickLinks";

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
            <div className="KidsArenadetails baseContainer">
                {data && (
                    <div className="detailsContainer">
                        <div className="row">
                        <div className="col-lg-9 col-sm-12 col-md-12">
                                <div className="headLinks mb-2">
                                    <span><a href="#">Home &nbsp;&gt;&nbsp;</a><a href="#">Blogs &nbsp;&gt;&nbsp;</a><a href="">{data.eventTitle}</a></span>
                                </div>
                           
                        
                           
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
                                                <div className="col-lg-3 col-6 studentImage">
                                                    <div className="m-3">
                                                        <img className="img-fluid" src={data.studentImg} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-9 col-6 studenData">
                                                    <div className="my-2">
                                                        <h2>Posted by:</h2>
                                                        <h2>{data.studentName}</h2>
                                                        <h5>{data.studentClass}</h5>
                                                    </div>
                                                </div>
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
                )}
            </div>
            <FooterComponent />
        </div>
    )
}
export default KidsArenadetailsComponent;