import React from "react";
import "./EventsAndWebinars.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import skoolslogo from "../../Assets/Images/skoolz.PNG";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const EvetsAndWeninars = () => {
    return (
        <div>
            <div class="schoolMainHome">
                <div className="baseContainer topSchoolSection" style={{ "display": "inline-block" }}>
                    <div className="topSchoolSectionTitle"><a><p style={{ "color": "#FF6700" }}> Events/Webinars/Workshops</p></a></div>
                    <Swiper slidesPerView={2}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={false}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper">

                        <div className="swiper-container-ev">
                            <div className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="swiper-slide indexBlogs">
                                        <div className="row">
                                            <article className="blog indexBlog fadeIn" style={{ "visibility": "visible", "animation-name": " fadeIn" }}>
                                                <div className="row no-gutters .ht-st">
                                                    <div className="col-lg-5">
                                                        <figure>
                                                            <a>
                                                                <img src={skoolslogo} style={{ "width": "100%", "height": "360px" }} alt="" />
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
                                <SwiperSlide>
                                    <div className="swiper-slide indexBlogs">
                                        <div className="row">
                                            <article className="blog indexBlog fadeIn" style={{ "visibility": " visible", "animation-name": "fadeIn" }}>
                                                <div className="row no-gutters .ht-st">
                                                    <div className="col-lg-5">
                                                        <figure>
                                                            <a>
                                                                <img src={skoolslogo} style={{ "width": "100%", "height": "360px" }} alt="" />
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
                                <SwiperSlide>
                                    <div className="swiper-slide indexBlogs">
                                        <div className="row">
                                            <article className="blog indexBlog fadeIn" style={{ "visibility": "visible", "animation-name": "fadeIn" }}>
                                                <div className="row no-gutters .ht-st">
                                                    <div className="col-lg-5">
                                                        <figure>
                                                            <a>
                                                                <img src={skoolslogo} style={{ "width": "100%", "height": "360px" }} alt="" />
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
                                <SwiperSlide>
                                    <div className="swiper-slide indexBlogs">
                                        <div className="row">
                                            <article className="blog indexBlog fadeIn" style={{ "visibility": "visible", "animation-name": "fadeIn" }}>
                                                <div className="row no-gutters .ht-st">
                                                    <div className="col-lg-5">
                                                        <figure>
                                                            <a>
                                                                <img src={skoolslogo} style={{ "width": "100%", "height": "360px" }} alt="" />
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
                                <SwiperSlide>
                                    <div className="swiper-slide indexBlogs">
                                        <div className="row">
                                            <article className="blog indexBlog fadeIn" style={{ "visibility": "visible", "animation-name": "fadeIn" }}>
                                                <div className="row no-gutters .ht-st">
                                                    <div className="col-lg-5">
                                                        <figure>
                                                            <a>
                                                                <img src={skoolslogo} style={{ "width": "100%", "height": "360px" }} alt="" />
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
                            Click Here<span class="registerSchoolIcon"></span>
                        </div>
                    </a>
                </div>
            </div>
        </div >
    )
}
export default EvetsAndWeninars;