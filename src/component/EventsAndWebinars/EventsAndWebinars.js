import React,{useState,useEffect} from "react";
import "./EventsAndWebinars.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ev1 from "../../Assets/Images/homeCSM.png";
import ev2 from "../../Assets/Images/FTHP13.png";
import ev3 from "../../Assets/Images/SSPanHP.png";
import ev4 from "../../Assets/Images/Fish tank July HP 2022.png";
import ev5 from "../../Assets/Images/SSThome.png";
import ev6 from "../../Assets/Images/cool chills image for main page.jpg";
import skoolslogo from "../../Assets/Images/skoolz.PNG";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const EvetsAndWeninars = () => {
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
            <div class="schoolMainHome">
                <div className="baseContainer topSchoolSection" style={{ "display": "inline-block" }}>
                    <div className="topSchoolSectionTitle"><a><p style={{ "color": "#FF6700" }}> Events/Webinars/Workshops</p></a></div>
                    <Swiper slidesPerView={mywindow.width && mywindow.width < 768 ? 1 : 2}
                        spaceBetween={37}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper">

                        <div className="swiper-container-ev">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide indexBlogs">
                                    <div className="indexBlogs">
                                        <div className="row">
                                            <article className="blog indexBlog fadeIn" style={{ "visibility": "visible", "animation-name": " fadeIn" }}>
                                                <div className="row no-gutters .ht-st">
                                                    <div className="col-lg-5">
                                                        <figure>
                                                            <a>
                                                                <img src={ev1} style={{ "width": "100%", "height": "360px" }} alt="" />
                                                                <div className="preview"><span>Read more</span></div>
                                                            </a>
                                                        </figure>
                                                    </div>
                                                    <div className="col-lg-7">
                                                        <div className="post_info" style={{ "height": "292px" }}>
                                                            <div>
                                                                <div className="boldTitle">
                                                                    <b>Workshop:</b><span>
                                                                        <a>
                                                                            SUNDAY STORY TIME- Indian Heroes- Chhatrapati Shivaji Maharaj
                                                                        </a>
                                                                    </span>
                                                                </div>
                                                                <div className="boldTitle">Speaker: <span>Mrs. Kirti Parnami</span></div>
                                                                <div className="boldTitle"><b>Day:</b>   Sunday<br /><span></span></div>
                                                                <div className="boldTitle"><b>Date:</b> <span>31st July 2022</span></div>
                                                                <div className="boldTitle"><b>Time:</b> <span>10:00 AM – 10:45 AM.</span></div>

                                                                <a>Register Here</a>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <div className="thumb"><img src={skoolslogo} alt="skoolz" /></div>
                                                                </li>
                                                                <li style={{ "display": "none" }}><i className="icon_comment_alt"></i> 20</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide indexBlogs">
                                    <div className="indexBlogs">
                                        <div className="row">
                                            <article className="blog indexBlog fadeIn" style={{ "visibility": " visible", "animation-name": "fadeIn" }}>
                                                <div className="row no-gutters .ht-st">
                                                    <div className="col-lg-5">
                                                        <figure>
                                                            <a>
                                                                <img src={ev2} style={{ "width": "100%", "height": "360px" }} alt="" />
                                                                <div className="preview"><span>Read more</span></div>
                                                            </a>
                                                        </figure>
                                                    </div>
                                                    <div className="col-lg-7">
                                                        <div className="post_info" style={{ "height": "292px" }}>
                                                            <div>
                                                                <div className="boldTitle">
                                                                    <b>Workshop:</b><span>
                                                                        <a>
                                                                            Fish Tank Learn Self Defence
                                                                        </a>
                                                                    </span>
                                                                </div>
                                                                <div className="boldTitle">Speaker: <span>Mrs. Kirti Parnami</span></div>
                                                                <div className="boldTitle"><b>Day:</b>Sunday<br /><span></span></div>
                                                                <div className="boldTitle"><b>Date:</b> <span>24 July 2022</span></div>
                                                                <div className="boldTitle"><b>Time:</b> <span>11:30 AM – 12:15 PM.</span></div>

                                                                <a target="_blank">Register Here</a>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <div className="thumb"><img src={skoolslogo} alt="skoolz" /></div>
                                                                </li>
                                                                <li style={{ "display": "none" }}><i className="icon_comment_alt"></i> 20</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide indexBlogs">
                                    <div className="indexBlogs">
                                        <div className="row">
                                            <article className="blog indexBlog fadeIn" style={{ "visibility": "visible", "animation-name": "fadeIn" }}>
                                                <div className="row no-gutters .ht-st">
                                                    <div className="col-lg-5">
                                                        <figure>
                                                            <a>
                                                                <img src={ev3} style={{ "width": "100%", "height": "360px" }} alt="" />
                                                                <div className="preview"><span>Read more</span></div>
                                                            </a>
                                                        </figure>
                                                    </div>
                                                    <div className="col-lg-7">
                                                        <div className="post_info" style={{ "height": "292px" }}>
                                                            <div>
                                                                <div className="boldTitle">
                                                                    <b>Workshop:</b><span>
                                                                        <a>
                                                                            Sunday Story Time Panchatantra
                                                                        </a>
                                                                    </span>
                                                                </div>
                                                                <div className="boldTitle">Speaker: <span>Mrs. Kirti Parnami</span></div>
                                                                <div className="boldTitle"><b>Day:</b>   Sunday<br /><span></span></div>
                                                                <div className="boldTitle"><b>Date:</b> <span>17 July 2022</span></div>
                                                                <div className="boldTitle"><b>Time:</b> <span>10:00 AM – 10:45 AM.</span></div>

                                                                <a target="_blank">Register Here</a>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <div className="thumb"><img src={skoolslogo} alt="skoolz" /></div>
                                                                </li>
                                                                <li style={{ "display": "none" }}><i className="icon_comment_alt"></i> 20</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide indexBlogs">
                                    <div className="indexBlogs">
                                        <div className="row">
                                            <article className="blog indexBlog fadeIn" style={{ "visibility": "visible", "animation-name": "fadeIn" }}>
                                                <div className="row no-gutters .ht-st">
                                                    <div className="col-lg-5">
                                                        <figure>
                                                            <a>
                                                                <img src={ev4} style={{ "width": "100%", "height": "360px" }} alt="" />
                                                                <div className="preview"><span>Read more</span></div>
                                                            </a>
                                                        </figure>
                                                    </div>
                                                    <div className="col-lg-7">
                                                        <div className="post_info" style={{ "height": "292px" }}>
                                                            <div>
                                                                <div className="boldTitle">
                                                                    <b>Workshop:</b><span>
                                                                        <a>
                                                                            Fish Tank Your Favourite Story
                                                                        </a>
                                                                    </span>
                                                                </div>
                                                                <div className="boldTitle">Speaker: <span>Mrs. Kirti Parnami</span></div>
                                                                <div className="boldTitle"><b>Day:</b>   Sunday<br /><span></span></div>
                                                                <div className="boldTitle"><b>Date:</b> <span>10 July 2022</span></div>
                                                                <div className="boldTitle"><b>Time:</b> <span>10:00 AM – 10:45 AM.</span></div>

                                                                <a target="_blank">Register Here</a>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <div className="thumb"><img src={skoolslogo} alt="skoolz" /></div>
                                                                </li>
                                                                <li style={{ "display": "none" }}><i className="icon_comment_alt"></i> 20</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide indexBlogs">
                                    <div className="indexBlogs">
                                        <div className="row">
                                            <article className="blog indexBlog fadeIn" style={{ "visibility": "visible", "animation-name": "fadeIn" }}>
                                                <div className="row no-gutters .ht-st">
                                                    <div className="col-lg-5">
                                                        <figure>
                                                            <a>
                                                                <img src={ev5} style={{ "width": "100%", "height": "360px" }} alt="" />
                                                                <div className="preview"><span>Read more</span></div>
                                                            </a>
                                                        </figure>
                                                    </div>
                                                    <div className="col-lg-7">
                                                        <div className="post_info" style={{ "height": "292px" }}>
                                                            <div>
                                                                <div className="boldTitle">
                                                                    <b>Workshop:</b><span>
                                                                        <a>
                                                                            Sunday Story Time
                                                                        </a>
                                                                    </span>
                                                                </div>
                                                                <div className="boldTitle">Speaker: <span>Mrs. Kirti Parnami</span></div>
                                                                <div className="boldTitle"><b>Day:</b>   Sunday<br /><span></span></div>
                                                                <div className="boldTitle"><b>Date:</b> <span>3rd July 2022</span></div>
                                                                <div className="boldTitle"><b>Time:</b> <span>10:00 AM – 10:45 AM.</span></div>

                                                                <a target="_blank">Register Here</a>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <div className="thumb"><img src={skoolslogo} alt="skoolz" /></div>
                                                                </li>
                                                                <li style={{ "display": "none" }}><i className="icon_comment_alt"></i> 20</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide indexBlogs">
                                <div className="indexBlogs">
                                <div className="row">
                                    <article className="blog indexBlog fadeIn" style={{ "visibility": "visible", "animation-name": "fadeIn" }}>
                                        <div className="row no-gutters ht-st">
                                            <div className="col-lg-5">
                                                <figure>
                                                    <a>
                                                        <img src={ev6} style={{ "width": "100%", "height": "360px" }} alt="" />
                                                        <div className="preview"><span>Read more</span></div>
                                                    </a>
                                                </figure>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="post_info" style={{ "height": "292px" }}>
                                                    <div>
                                                        <div className="boldTitle">
                                                            <b>Workshop:</b><span>
                                                                <a>
                                                                    Cool Chills
                                                                </a>
                                                            </span>
                                                        </div>
                                                        <div className="boldTitle">Speaker: <span>Mrs. Kirti Parnami</span></div>
                                                        <div className="boldTitle"><b>Day:</b>Sunday<br /> <span></span></div>
                                                        <div className="boldTitle"><b>Date:</b> <span>26th June 2022</span></div>
                                                        <div className="boldTitle"><b>Time:</b> <span>10:00 am – 10:45 am</span></div>

                                                        <a target="_blank">Register Here</a>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <div className="thumb"><img src={skoolslogo} alt="skoolz" /></div>
                                                        </li>
                                                        <li style={{ "display": "none" }}><i className="icon_comment_alt"></i> 20</li>
                                                    </ul>
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
                </div >
            </div>
            <div class="joinOurNetwork">
                <div class="joinOurNetworkText">
                    More Webinars / Events / Workshops
                    <a class="joinOurNetworkButton">
                        <div>
                            Click Here&nbsp; <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                        </div>
                    </a>
                </div>
            </div>
        </div >
    )
}
export default EvetsAndWeninars;