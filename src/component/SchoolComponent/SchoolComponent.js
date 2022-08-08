import React, { useState } from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "./SchoolComponent.css"
import { getRoles } from "@testing-library/react";



const SearchSchoolComponent = (props) => {
    const [activeThumb, setActiveThumb] = useState()
    return (
        <div>
            <div className="schoolDetailsComponent">
                <HeaderComponent />
                <br /><br /><br /><br />
                <div className="breadcrumb-container">
                    <div className="baseContainer">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="">Home</a></li>
                                <li className="breadcrumb-item"><a href="">Search Result</a></li>
                                <li className="breadcrumb-item"><a href="">DEEKSHA PLAY SCHOOL</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="baseContainer" style={{"textAlign":"left"}}>
                    <div className="row">
                        <div className="sliderMainContainer col-md-12">
                            <h1 style={{"textAlign":"center"}}>SwiperSlide</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <h1 style={{ "fontSize": "22px", "fontFamily": 'MontSemiBold' }}>
                                        DEEKSHA PLAY SCHOOL
                                    </h1>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 textRight">
                                    <a>
                                        <span> Share : &nbsp;</span>
                                        <button className="faceBook" style={{ "backgroundColor": "darkblue" }}><FontAwesomeIcon icon={faFacebook} style={{ "color": "white" }} /></button>
                                        <button className="whatesUp" style={{ "backgroundColor": "lightgreen" }}><FontAwesomeIcon icon={faWhatsapp} style={{ "color": "white" }} /></button>
                                        <button className="Twiter" style={{ "backgroundColor": "blue" }}><FontAwesomeIcon icon={faTwitter} style={{ "color": "white" }} /></button>
                                        <button className="LinkedIn" style={{ "backgroundColor": "darkblue" }}><FontAwesomeIcon icon={faLinkedin} style={{ "color": "white" }} /></button>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 subTitle">
                                    Plot No., 107, Lalitha Nagar, Adikmet, Hyderabad, Telangana, , Hyderabad, Telangana, 500044
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-3 col-lg-3">
                                    <span>0.2 Km</span>
                                </div>
                                <div className="col-12 col-md-9 col-lg-9  detailsSection">
                                    <ul className="basicDetails">
                                        <li>
                                            <div className="reviewDetails">
                                                <div className="reviewIcon">
                                                    <FontAwesomeIcon icon={faStar} style={{"color":"gold"}}/> &nbsp;0
                                                    <span>"(0)"</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="details">
                                                <div className="reviewIcon">
                                                    Montessori
                                                    <span className="rev">Pre-School Type</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="details">
                                                <div className="reviewIcon">
                                                    Co-Ed
                                                    <span className="rev">Gender Classification</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="details">
                                                <div className="reviewIcon">
                                                    Rs.
                                                    <span className="rev">Annual Fees</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="searchButton">
                                        <button className="applyBtn BA bg-transparent">Book Appointment</button>
                                        <button className="applyBtn1 BA applyBtnTransparent"> Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contentSlideWrapper">
                        <div className="contentSliderNav">
                            <ul className="sectionNavigator">
                                <li className="active"><a>OVERVIEW</a></li>
                                <li><a>GALLERY</a></li>
                                <li><a>BASIC INFORMATION</a></li>
                                <li><a>FEES</a></li>
                                <li><a>CONTACT</a></li>
                                <li><a>REVIEWS</a></li>
                            </ul>
                            <div className="row">
                                <div className="contentLeftWrapperslides  col-md-8">
                                    <div className="sliderContent" id="overview">
                                        <div className="sectionTitle SearchTitle">About School</div>
                                        <div className="sectionContent aboutUsSection">
                                            Why DEEKSHA is the right place for your child 1. Curriculum crafted by Experts 2. Personalized Care & Education 3.Teaching and Training Excellence 4. Transparency and Safety 5. Supportive environment 6. High Quality Fun 7. Health and nutrition 8. Best hygiene practices 9. Parent Communication
                                        </div>
                                    </div>
                                    <div className="sliderContent" id="overview">
                                        <div className="sectionTitle SearchTitle">About School</div>
                                        <div className="sectionContent aboutUsSection">
                                            Why DEEKSHA is the right place for your child 1. Curriculum crafted by Experts 2. Personalized Care & Education 3.Teaching and Training Excellence 4. Transparency and Safety 5. Supportive environment 6. High Quality Fun 7. Health and nutrition 8. Best hygiene practices 9. Parent Communication
                                        </div>
                                    </div>
                                    <div className="sliderContent" id="overview">
                                        <div className="sectionTitle SearchTitle">About School</div>
                                        <div className="sectionContent aboutUsSection">
                                            Why DEEKSHA is the right place for your child 1. Curriculum crafted by Experts 2. Personalized Care & Education 3.Teaching and Training Excellence 4. Transparency and Safety 5. Supportive environment 6. High Quality Fun 7. Health and nutrition 8. Best hygiene practices 9. Parent Communication
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 contentRightWrapperslides">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
                <FooterComponent />
            </div>
        </div>
    )
}

export default SearchSchoolComponent;