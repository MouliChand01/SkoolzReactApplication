import React, { useEffect, useState,memo } from "react";
import parent1 from "../../Assets/Images/AnandMayi_Priyadarshini.png";
import parent2 from "../../Assets/Images/Geetha__s.png";
import parent3 from "../../Assets/Images/Punith_Gowda.png"
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Testimonials.css'
import { Link } from "react-router-dom";

const Testimonials = () => {
    let [mywindow, setMywindow] = useState({})
    let resizeId;
    useEffect(() => {
        window.addEventListener("resize", function () {
            clearTimeout(resizeId);
            resizeId = setTimeout(doneResizing, 500);

        })
        function doneResizing() {
            console.log("window is ", window.innerHeight, window.innerWidth)
            setMywindow({ height: window.innerHeight, width: window.innerWidth })
        }

    }, [mywindow])
    return (
        <div>
            <div className="schoolMainHome">
                <div className="baseContainer topSchoolSection">
                    <div className="topSchoolSectionTitleTestimonial"><Link to='/testimonial/index'><a style={{ "textDecoration": "none" }}><p style={{ "color": "#FF6700" }}> Testimonials</p></a></Link></div>
                    <Swiper slidesPerView={mywindow.width && mywindow.width < 768 ? 1 : 2}
                        spaceBetween={35}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper">
                        <div className="swiper-container-evTestimonial">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide indexBlogs">
                                    <div className="indexBlogs">
                                        <div className="row">
                                            <article className="blog indexBlog fadeIn" style={{ "visibility": "visible", "animationName": "fadeIn;" }}>
                                                <div>
                                                    <div className="card-body">

                                                        <p className="card-text text-justify paddingP">
                                                            “This is a great concept and a great help for parents searching for the school of their choice and in the area closer to their homes. I was pleasantly surprised to see 15+ schools near my house, and I got to know maximum information about them without visiting them. Photographs and videos &nbsp; & &nbsp; Differentiators was a  &nbsp;great help to learn about the schools. Booking appointments and reaching out to school management was a lot easier. I wish you good luck and looking forward to adding  more &nbsp; information about  many schools.”
                                                        </p>
                                                        <img src={parent1} style={{ "height": "138px", "width": "155px"}} alt="Startup-Certificate-Xergy" />
                                                        <div className="parentName">Anandmayi Priyadarshini</div>
                                                        <div className="description">Parent </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="indexBlogs">
                                        <div className="row">
                                            <article className="blog indexBlog fadeIn" style={{ "visibility": "visible", "animationName": "fadeIn;" }}>
                                                <div>
                                                    <div className="card-body">
                                                        <p className="card-text text-justify paddingP">
                                                            “Skoolz was a great help in finding a school for my Son. I was able to find detailed information on schools in my area. Photographs and videos helped me to get better clarity about the school,which we were looking for(just sitting at comfort of my home) .the Advantage over here is i could compare more schools here,as while visits,we could  have not done many schools visits.
                                                            Founders & Principal interview helped me understand the leaders thought process towards education and clarity in their thoughts was something worth knowing.”
                                                        </p>
                                                        <img src={parent2} style={{ "height": "138px", "width": "155px"}} alt="Startup-Certificate-Xergy" />
                                                        <div className="footer">
                                                            <div className="parentName">Geetha S</div>
                                                            <div className="description">Parent </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="indexBlogs">
                                        <div className="row">
                                            <article className="blog indexBlog fadeIn" style={{ "visibility": "visible", "animationName": "fadeIn;" }}>
                                        
                                                    <div>
                                                        <div className="card-body">
                                                            <p className="card-text text-justify paddingP">
                                                                “Thank you, skoolz; searching for a school for my son was a lot easier than we thought; We gathered the utmost information about a school without visiting them personally, which helped me save time & was able to reach the school of my choice easily. We Like the comparison of schools of three schools, if not Skoolz, it would have taken ages few days to collect data and compare them side by side.”
                                                            </p>
                                                            <br />
                                                            <br />
                                                            <img src={parent3} style={{ "height": "138px", "width": "155px"}} alt="Startup-Certificate-Xergy" />
                                                            <br />
                                                            <div className="footer">
                                                                <div className="parentName">Punith Gowda</div>
                                                                <div className="description">Parent</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                    
                                            </article>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </div>
                    </Swiper>
                </div>

                <div className="joinOurNetwork" id="contactRedirect">
                    <div className="joinOurNetworkText">
                        More Testimonials
                        <div className="viewMoreTestimonialsHomeButton"></div>
                        <a asp-controller="Testimonial" asp-action="Index" style={{ "textDecoration": "None" }} className="joinOurNetworkButton">
                            <div>
                                Click here &nbsp; <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Testimonials);