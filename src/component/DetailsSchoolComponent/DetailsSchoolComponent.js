import React, { useState } from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faWhatsapp, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faStar, faEnvelope, faPhone, faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import circleImage from "../../Assets/svg/typeofschool.svg"
import preSchool from "../../Assets/svg/examniationboard.svg"
import tutionFees from "../../Assets/svg/tutionfees.svg"
import girlsImage from "../../Assets/svg/Girl.svg"
import minAge from "../../Assets/svg/minimumagedayschool.svg"
import minageBoarding from "../../Assets/svg/minimumageboardingschool.svg"
import hindi from "../../Assets/svg/hindilanguage.svg"
import establishment from "../../Assets/svg/establishment year.svg"
import "./DetailsSchoolComponent.css";




const DeatailsSchoolComponent = (props) => {
    const [activeThumb, setActiveThumb] = useState()
    return (
        <div>
            <div className="schoolDetailsComponent">
                <HeaderComponent />
                <br />
                <div className="schoolbaseContainer">
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
                    <div className="baseContainer" style={{ "textAlign": "left" }}>
                        <div className="row">
                            <div className="sliderMainContainer col-md-12">
                                <h1 style={{ "textAlign": "center" }}>SwiperSlide tumbs</h1>
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
                                        <span><FontAwesomeIcon icon={faLocationDot} />&nbsp;<strong>0.2 Km</strong></span>
                                    </div>
                                    <div className="col-12 col-md-9 col-lg-9  detailsSection">
                                        <ul className="basicDetails">
                                            <li>
                                                <div className="reviewDetails">
                                                    <div className="reviewIcon">
                                                        <FontAwesomeIcon icon={faStar} style={{ "color": "gold" }} /> &nbsp;0
                                                        <span>(0)</span>
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
                                        <div className="sliderContent" id="gallery">
                                            <div className="sectionTitle SearchTitle">Gallery</div>
                                            <div className="row">
                                                <div className="col-6 col-md-2 schoolGallary gallleryThumb">
                                                    <a className="gallleryThumb">
                                                        <img src="" alt="Thumb1" />
                                                    </a>
                                                </div>
                                                <div className="col-6 col-md-2 schoolGallary gallleryThumb">
                                                    <a className="gallleryThumb">
                                                        <img src="" alt="Thumb2" />
                                                    </a>
                                                </div>
                                                <div className="col-6 col-md-2 schoolGallary gallleryThumb">
                                                    <a className="gallleryThumb">
                                                        <img src="" alt="Thumb3" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sliderContent" id="Awards_Recognition">
                                            <div className="sectionTitle SearchTitle">Awards & Recognition</div>
                                            <div className="sectionContent">
                                                <div className="row">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="sliderContent" id="basic_information">
                                            <div className="sectionTitle SearchTitle">Basic Information</div>
                                            <div className="sectionContent col-md-12">
                                            <ul className="basicInfoSection col-md-6">
                                                <li className="mb-3">
                                                    <div className="circleImage">
                                                        <span>
                                                            <img src={circleImage} className="svg" ></img>
                                                        </span>
                                                    </div>
                                                    <div className="titleBasic">Type of School
                                                        <span className="subBasicTitle">Co-Ed</span>
                                                    </div>
                                                </li>
                                                <li className="mb-3">
                                                    <div className="circleImage">
                                                        <span>
                                                            <img src={tutionFees} className="svg"></img>
                                                        </span>
                                                    </div>
                                                    <div className="titleBasic">Annual Fees
                                                        <span className="subBasicTitle">NA</span>
                                                    </div>
                                                </li>
                                                <li className="mb-3">
                                                    <div className="circleImage">
                                                        <span>
                                                            <img src={minAge} className="svg"></img>
                                                        </span>
                                                    </div>
                                                    <div className="titleBasic">Min Age for Day School
                                                        <span className="subBasicTitle">NA</span>
                                                    </div>
                                                </li>
                                                <li className="mb-3">
                                                    <div className="circleImage">
                                                        <span>
                                                            <img src={hindi} className="svg"></img>
                                                        </span>
                                                    </div>
                                                    <div className="titleBasic">Language of Instruction
                                                        <span className="subBasicTitle">English</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="basicInfoSection col-md-6">

                                                <li className="mb-3">
                                                    <div className="circleImage">
                                                        <span>
                                                            <img src={preSchool} className="svg"></img>
                                                        </span>
                                                    </div>
                                                    <div className="titleBasic">PreSchool Type
                                                        <span className="subBasicTitle">Montessori</span>
                                                    </div>
                                                </li>
                                                <li className="mb-3">
                                                    <div className="circleImage">
                                                        <span>
                                                            <img src={girlsImage} className="svg"></img>
                                                        </span>
                                                    </div>
                                                    <div className="titleBasic">Grade - Pre-School
                                                        <span className="subBasicTitle">PreSchool</span>
                                                    </div>
                                                </li>


                                                <li className="mb-3">
                                                    <div className="circleImage">
                                                        <span>
                                                            <img src={minageBoarding} className="svg"></img>
                                                        </span>
                                                    </div>
                                                    <div className="titleBasic">Min Age for Boarding School
                                                        <span className="subBasicTitle">NA</span>
                                                    </div>
                                                </li>

                                                <li className="mb-3">
                                                    <div className="circleImage">
                                                        <span>
                                                            <img src={establishment} className="svg"></img>
                                                        </span>
                                                    </div>
                                                    <div className="titleBasic">Establishment Year
                                                        <span className="subBasicTitle">2004</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        </div>
                                        <div className="sliderContent" id="reviews">
                                            <div className="sectionTitle SearchTitle">Reviews</div>
                                            <a className="applyBtn BA float-right" id="reviewButton">Write A Review </a>
                                            <div className="sectionContent">
                                                <div className="review">
                                                    <div className="startIcon">
                                                        <FontAwesomeIcon icon={faStar} style={{ "color": "gold" }} />0
                                                        <a>
                                                            <span className="rev">(0 reviews)</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="progressBarContainer">
                                                    <div className="progressCustom">
                                                        <div className="progressLabel">Infrastructure</div>
                                                        <div className="progress" style={{ "height": "4px" }}>
                                                            <div className="progress-bar"></div>
                                                        </div>
                                                        <div className="progressValue">0</div>
                                                    </div>
                                                    <div className="progressCustom">
                                                        <div className="progressLabel">Sports</div>
                                                        <div className="progress" style={{ "height": "4px" }}>
                                                            <div className="progress-bar"></div>
                                                        </div>
                                                        <div className="progressValue">0</div>
                                                    </div>
                                                    <div className="progressCustom">
                                                        <div className="progressLabel">Academics</div>
                                                        <div className="progress" style={{ "height": "4px" }}>
                                                            <div className="progress-bar"></div>
                                                        </div>
                                                        <div className="progressValue">0</div>
                                                    </div>
                                                    <div className="progressCustom">
                                                        <div className="progressLabel">Faculty</div>
                                                        <div className="progress" style={{ "height": "4px" }}>
                                                            <div className="progress-bar"></div>
                                                        </div>
                                                        <div className="progressValue">0</div>
                                                    </div>
                                                    <div className="progressCustom">
                                                        <div className="progressLabel">Facilities</div>
                                                        <div className="progress" style={{ "height": "4px" }}>
                                                            <div className="progress-bar"></div>
                                                        </div>
                                                        <div className="progressValue">0</div>
                                                    </div>
                                                    <div className="progressCustom">
                                                        <div className="progressLabel">Safety</div>
                                                        <div className="progress" style={{ "height": "4px" }}>
                                                            <div className="progress-bar"></div>
                                                        </div>
                                                        <div className="progressValue">0</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-4 contentRightWrapperslides">
                                        <div className="sliderContent">
                                            <div className="sectionTitle SearchTitle">Latest Updates
                                            </div>
                                        </div>
                                        <div className="sliderContent" id="timings">
                                            <div className="sectionTitle SearchTitle">Distinguished Alumni
                                                <div className="sectionContent">
                                                    <div className="row"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sliderContent" id="fee">
                                            <div className="sectionTitle SearchTitle">Fee Details
                                                <div className="sectionContent">
                                                    <div className="row"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sliderContent" id="brochar">
                                            <div className="sectionTitle SearchTitle">Brochure Document
                                                <div className="sectionContent">
                                                    {/* <a className="actionButton" href="" style={{"color":"#34A853"}}>Download Brochure</a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sliderContent" id="contact">
                                            <div className="sectionTitle SearchTitle">Contact Information
                                                <div className="sectionContent">
                                                    <ul className="contactDetail">
                                                        <li>
                                                            <a href="">
                                                                <span className="icon">
                                                                    <FontAwesomeIcon icon={faEnvelope} style={{ "color": "green" }} />&nbsp;
                                                                </span>
                                                                <span className="text">deekshacorp@gmail.com</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <span className="icon">
                                                                <FontAwesomeIcon icon={faPhone} style={{ "color": "green" }} />&nbsp;
                                                            </span>
                                                            <a href="">
                                                                <button className="callmeBtn1 BB callmeBtnTransparent" id="callBtn">CALL</button>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <span className="icon">
                                                                <FontAwesomeIcon icon={faGlobe} style={{ "color": "green" }} />&nbsp;
                                                            </span>
                                                            <a href="" style={{ "color": "rgba(0,0,0,0.7)", "flexWrap": "wrap", "fontSize": "16px" }}>
                                                                https://www.deekshaschools.com/campus1.html
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <span className="icon">
                                                                <FontAwesomeIcon icon={faLocationDot} style={{ "color": "green" }} />&nbsp;
                                                            </span>
                                                            <span className="text">Plot No., 107, Lalitha Nagar, Adikmet, Hyderabad, Telangana, , Hyderabad, Telangana, 500044</span>
                                                        </li>
                                                    </ul>
                                                    <div className="iconFooter">
                                                        <ul className="socialIconFooter">
                                                            <li><a><FontAwesomeIcon icon={faFacebook} style={{"color":"#34A853"}}/></a></li>
                                                            <li><a><FontAwesomeIcon icon={faTwitter}  style={{"color":"#34A853"}}/></a></li>
                                                            <li><a><FontAwesomeIcon icon={faYoutube}  style={{"color":"#34A853"}}/></a></li>
                                                            <li><a><FontAwesomeIcon icon={faLinkedin}  style={{"color":"#34A853"}}/></a></li>
                                                            <li><a><FontAwesomeIcon icon={faInstagram} style={{"color":"#34A853"}} /></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterComponent />
            </div>
        </div >
    )
}

export default DeatailsSchoolComponent;