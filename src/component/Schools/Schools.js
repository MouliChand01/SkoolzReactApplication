import React, { useState, useEffect } from "react";
import "./Schools.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import school1 from "../../Assets/Images/CoverPicture_1.jpg"
import school2 from "../../Assets/Images/CoverPicture_2.jpg"
import school3 from "../../Assets/Images/CoverPicture_3.jpg"
import school4 from "../../Assets/Images/CoverPicture_4.jpg"
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Schools = () => {
    let [mywindow, setMywindow] = useState({});
    let [trending, setTrending] = useState(true);
    let [selected, setSelected] = useState(false)
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
                <div className="baseContainer topSchoolSection topSchoolBlog">
                    <div className="topSchoolSectionTitle">Schools</div>
                    <div id="content" className="text-center mb-3">
                        <button type="submit" data-value="3" className="btn-board-type m-3 btn-selected">Pre-School</button>
                        <button type="submit" data-value="1" className="btn-board-type m-3 ">Day School</button>
                        <button type="submit" data-value="5" className="btn-board-type m-3 ">Online School</button>
                        <button type="submit" data-value="2" className="btn-board-type m-3 ">Boarding School</button>
                        <button type="submit" data-value="4" className="btn-board-type m-3 ">Day Cum Boarding</button>
                    </div>
                    <div id="btn-content" className="text-center m-3 mb-5">
                        <div className="btn-group shadow-lg  bg-white rounded-pill" role="group" aria-label="Basic example">
                            <button type="submit" data-value="true" className="btn-board-trend m-3 btn-selected">Trending</button>
                            <button type="submit" data-value="false" className={`btn-board-trend m-3 ${selected ? 'btn-selected' : ''}`} onClick={() => changebtn('nearMe')} >Near Me</button>
                        </div>
                    </div>
                    <Swiper slidesPerView={mywindow.width && mywindow.width < 768 ? 1 : 3}
                        spaceBetween={39}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper">

                        <div id="overlay" style={{ "display": "none" }}>
                            <div className="spinner"></div>
                            <br />
                            Loading...
                        </div>
                        <div className="swiper-container">
                            <div className="swiper-wrapper" id="divTopSchools" data-hostname="@ViewBag.Hostname" data-skoolz="@ViewBag.SkoolzHostname">
                                <SwiperSlide className="swiper-slide">
                                    <div >
                                        <a>
                                            <img src={school1} className="sliderImage" alt="sliderImage" />
                                            <div className="sliderCaption">
                                                <div className="sliderCaptionTitle">Kabiraa The Preschool</div>
                                                <div className="sliderCaptionSubTitle">Bengaluru</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div >
                                        <a href="https://www.skoolz.in/home/view-school?profileId=132&d=16.8">
                                            <img src={school2} className="sliderImage" alt="sliderImage" />
                                            <div className="sliderCaption">
                                                <div className="sliderCaptionTitle">Gurukulam Koramangala</div>
                                                <div className="sliderCaptionSubTitle">Bengaluru</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div >
                                        <a href="https://www.skoolz.in/home/view-school?profileId=82&d=25.2">
                                            <img src={school3} className="sliderImage" alt="sliderImage" />
                                            <div className="sliderCaption">
                                                <div className="sliderCaptionTitle">Little kidz Preschool Andrahalli</div>
                                                <div className="sliderCaptionSubTitle">Andrahalli Main Road,Bengaluru</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div >
                                        <a href="https://www.skoolz.in/home/view-school?profileId=690&d=32.9">
                                            <img src={school4} className="sliderImage" alt="sliderImage" />
                                            <div className="sliderCaption">
                                                <div className="sliderCaptionTitle">Headsmart Preschool</div>
                                                <div className="sliderCaptionSubTitle">Marathahalli,Bengaluru</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                               
                                {/* <SwiperSlide>
                                    <div className="swiper-slide">
                                        <a href="https://www.skoolz.in/home/view-school?profileId=128&d=47.1">
                                            <img src={skoolslogo} className="sliderImage" alt="sliderImage" />
                                            <div className="sliderCaption">
                                                <div className="sliderCaptionTitle">The Green School Bangalore</div>
                                                <div className="sliderCaptionSubTitle">Hobli Hoskote, Taluk, Varthur Arch,Bengaluru</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <a href="https://www.skoolz.in/home/view-school?profileId=196&d=31.5">
                                            <img src={skoolslogo} className="sliderImage" alt="sliderImage" />
                                            <div className="sliderCaption">
                                                <div className="sliderCaptionTitle">Vishwa Vidyapeeth Group of Schools</div>
                                                <div className="sliderCaptionSubTitle">Honnenahalli Village,Bengaluru</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <a href="https://www.skoolz.in/home/view-school?profileId=137&d=35.1">
                                            <img src="~/skoolz/assets/img/blog-mainpage/The Cambridge International School, Sarjapur Road_blogs_8.jpg" className="sliderImage" alt="sliderImage" />
                                            <div className="sliderCaption">
                                                <div className="sliderCaptionTitle">The Cambridge International School, Sarjapur Road, TCISS</div>
                                                <div className="sliderCaptionSubTitle">Harlur, Off Sarjarpur Rd,Bengaluru</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <a href="https://www.skoolz.in/home/view-school?profileId=12&d=11.9">
                                            <img src="~/skoolz/assets/img/blog-mainpage/Vidya_Sanskaar_International_Public_School_blog_9_600x400.jpeg" className="sliderImage" alt="sliderImage" />
                                            <div className="sliderCaption">
                                                <div className="sliderCaptionTitle">Vidya Sanskaar International <br /> Public School</div>
                                                <div className="sliderCaptionSubTitle">Magadi Main Road,Bengaluru</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <a href="https://skoolz.in/home/view-school?profileId=23">
                                            <img src="~/skoolz/assets/img/StSophia.jpg" className="sliderImage" alt="sliderImage" />
                                            <div className="sliderCaption">
                                                <div className="sliderCaptionTitle">
                                                    St Sophia Convent High School
                                                </div>
                                                <div className="sliderCaptionSubTitle">Nagarabhavi, Bengaluru</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <a href="https://skoolz.in/home/view-school?profileId=23">
                                            <img src="~/skoolz/assets/img/StSophia.jpg" className="sliderImage" alt="sliderImage" />
                                            <div className="sliderCaption">
                                                <div className="sliderCaptionTitle">
                                                    St Sophia Convent High School
                                                </div>
                                                <div className="sliderCaptionSubTitle">Nagarabhavi, Bengaluru</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <a href="https://skoolz.in/home/view-school?profileId=37">
                                            <img src="~/skoolz/assets/img/Vishwa.jpg" className="sliderImage" alt="sliderImage" />
                                            <div className="sliderCaption">
                                                <div className="sliderCaptionTitle">
                                                    Vishwa Vidyapeeth Group of Schools
                                                </div>
                                                <div className="sliderCaptionSubTitle">Yelahanka, Bengaluru</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <a href="https://skoolz.in/home/view-school?profileId=7">
                                            <img src="~/skoolz/assets/img/Open-Minds.jpg" className="sliderImage" alt="sliderImage" />
                                            <div className="sliderCaption">
                                                <div className="sliderCaptionTitle">Open Minds World School</div>
                                                <div className="sliderCaptionSubTitle">Javalli, Shimoga</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <a href="https://skoolz.in/home/view-school?profileId=8">
                                            <img src="~/skoolz/assets/img/Cordial.jpg" className="sliderImage" alt="sliderImage" />
                                            <div className="sliderCaption">
                                                <div className="sliderCaptionTitle">Cordial International School</div>
                                                <div className="sliderCaptionSubTitle">Madhugiri, Tumkur</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <a href="https://skoolz.in/home/view-school?profileId=12">
                                            <img src="~/skoolz/assets/img/VidyaSanskar.jpg" className="sliderImage" alt="sliderImage" />
                                            <div className="sliderCaption">
                                                <div className="sliderCaptionTitle">
                                                    Vidya Sanskaar International Public School
                                                </div>
                                                <div className="sliderCaptionSubTitle">Magadi Main Road, Bengaluru</div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide> */}
                            </div>
                        </div>
                    </Swiper>
                </div>

                <div className="joinOurNetwork">
                    <div className="joinOurNetworkText">
                        <h1>
                            More Schools
                        </h1>
                        {/* <a href="register.html"><div className="joinOurNetworkButton">Register School<span className="registerSchoolIcon"></span></div></a> */}
                        <div className="MoreschoolsHome"></div><a target="_blank" href="https://www.skoolz.in/home/search" className="joinOurNetworkButton"><div>Search<span className="registerSchoolIcon"></span></div></a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Schools;