import React,{useEffect,useState} from "react";
import './AwardsAndRecognitions.css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import award1 from "../../Assets/Images/Best-Edutech-Award-2021.jpeg";
import award2 from "../../Assets/Images/Startup-Certificate-Xergy.jpg";
import skoolzlogo from "../../Assets/Images/skoolz.PNG";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AwardsAndRecognitions = () => {
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
                    <div className="topSchoolSectionTitleawards"><a href="/Awards/index" style={{ "textDecoration": "none" }}><p style={{ "color": "#FF6700" }}> Awards &amp; Recognitions</p></a> </div>
                    <Swiper slidesPerView={mywindow.width && mywindow.width < 768 ? 1 : 2}
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
                        <div className="swiper-container-ev1">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide indexBlogs">
                                    <div className="indexBlogs">
                                        <div className="row">
                                            <article className="blog indexBlog fadeIn" >
                                                <div className="row no-gutters .ht-st">
                                                    <div className="col-lg-7">
                                                        <figure>
                                                            <a href="/Awards/best-edutech-award-presented">
                                                                <img src={award1} style={{ "height": "317px", "width": "95%" }} alt="~/skoolz/assets/img/blog-mainpage/Best Edu Tech Award by Global Triumph Foundation.jpg" />
                                                            </a>
                                                        </figure>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <div className="post_info" style={{ "height": "292px" }}>
                                                            <h3 style={{ "fontSize": "16px", "paddingTop": "8px" }}>
                                                                <a href="/Awards/best-edutech-award-presented" style={{ "textDecoration": "none" }}>
                                                                    Best Edutech award was presented to Skoolz by Global Triumph Foundation, Bengaluru, in association with MSME India.
                                                                </a>
                                                            </h3>
                                                            <div>
                                                                <div className="boldTitle" style={{ "fontSize": "15px" }}>
                                                                    Date Of Recognition :
                                                                    <span>11th April 2021</span>
                                                                </div>
                                                                <div className="boldTitle" style={{ "fontSize": "15px" }}>Skoolz founder Mr Srinivas received the award.</div>

                                                            </div>
                                                            <ul style={{ "margin-bottom": "-50px" }}>
                                                                <li>
                                                                    <div className="thumb"><img src={skoolzlogo} alt="skoolz" /></div>
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
                                            <article className="blog indexBlog fadeIn" >
                                                <div className="row no-gutters .ht-st">
                                                    <div className="col-lg-7">
                                                        <figure>
                                                            <a href="/Awards/xergy-business-excellence-pvt-ltd-was-recognized-as-a-startup">
                                                                <img src={award2} style={{ "height": "317px", "width": "100%" }} alt="Startup-Certificate-Xergy" />
                                                            </a>
                                                        </figure>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <div className="post_info" style={{ "height": "292px" }}>
                                                            <h3 style={{ "fontSize": "16px", "paddingTop": "8px" }}>
                                                                <a href="/Awards/xergy-business-excellence-pvt-ltd-was-recognized-as-a-startup" style={{ "textDecoration": "none" }}>
                                                                    XergY Business Excellence Pvt Ltd (Skoolz) was recognized as a Startup by the Department for promoting industry and Internal Trade in Education Industry and Education Technology.
                                                                </a>
                                                            </h3>
                                                            <div>
                                                                <div className="boldTitle" style={{ "fontSize": "15px" }}>Date of Recognition: <span>21st Oct 2021</span></div>
                                                            </div>
                                                            <ul style={{ "margin-bottom": "-50px" }}>
                                                                <li>
                                                                    <div className="thumb"><img src={skoolzlogo} alt="skoolz" /></div>
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
                </div>

                <div class="joinOurNetwork">
                    <div class="joinOurNetworkText">
                        More Awards &amp; Recognitions
                        <a class="joinOurNetworkButton" href="/Awards/index" style={{ "textDecoration": "none" }}>
                            <div>
                                Click Here &nbsp; <FontAwesomeIcon icon={faLongArrowAltRight}/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AwardsAndRecognitions;