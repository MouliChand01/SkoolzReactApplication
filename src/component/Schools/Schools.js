import React from "react";
import "./Schools.css"

const Schools =()=>{
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
                        <button type="submit" data-value="false" className="btn-board-trend m-3">Near Me</button>
                    </div>
                </div>
                 <div id="overlay" style={{ "display": "none" }}>
                    <div className="spinner"></div>
                    <br />
                    Loading...
                </div> 
                 <div className="swiper-container">
                    <div className="swiper-wrapper" id="divTopSchools" data-hostname="@ViewBag.Hostname" data-skoolz="@ViewBag.SkoolzHostname">

                        <div className="swiper-slide">
                            <a>
                                <img src="~/skoolz/assets/img/Harvest.jpg" className="sliderImage" alt="sliderImage" />
                                <div className="sliderCaption">
                                    <div className="sliderCaptionTitle">Harvest International School</div>
                                    <div className="sliderCaptionSubTitle">Bengaluru</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.skoolz.in/home/view-school?profileId=132&d=16.8">
                                <img src="~/skoolz/assets/img/blog-mainpage/Bgs_international_academia-school.png" className="sliderImage" alt="sliderImage" />
                                <div className="sliderCaption">
                                    <div className="sliderCaptionTitle">BGS International Academia School</div>
                                    <div className="sliderCaptionSubTitle">Nityanandanagar,Bengaluru</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.skoolz.in/home/view-school?profileId=82&d=25.2">
                                <img src="~/skoolz/assets/img/blog-mainpage/Basil_woods_blog3.jpg" className="sliderImage" alt="sliderImage" />
                                <div className="sliderCaption">
                                    <div className="sliderCaptionTitle">Basil woods</div>
                                    <div className="sliderCaptionSubTitle">Lakshmipura Cross ,MS Palaya Road,Bengaluru</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.skoolz.in/home/view-school?profileId=690&d=32.9">
                                <img src="~/skoolz/assets/img/blog-mainpage/Candor_International_School_Blog_4_600x400.jpg" className="sliderImage" alt="sliderImage" />
                                <div className="sliderCaption">
                                    <div className="sliderCaptionTitle">Candor International School</div>
                                    <div className="sliderCaptionSubTitle">Koppa-harapanhalli Road,Bengaluru</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.skoolz.in/home/view-school?profileId=52&d=36.9">
                                <img src="~/skoolz/assets/img/blog-mainpage/Glentree_Academy_Sarjapur_Road_Blog_5_600x400.png" style={{ "width": "100%" }} className="sliderImage" alt="sliderImage" />
                                <div className="sliderCaption">
                                    <div className="sliderCaptionTitle">Glentree Academy Sarjapur</div>
                                    <div className="sliderCaptionSubTitle">Sarjapur Road,Halanayakanahalli,Bengaluru</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.skoolz.in/home/view-school?profileId=128&d=47.1">
                                <img src="~/skoolz/assets/img/blog-mainpage/The Green School Bangalore_blog_6.jpg" className="sliderImage" alt="sliderImage" />
                                <div className="sliderCaption">
                                    <div className="sliderCaptionTitle">The Green School Bangalore</div>
                                    <div className="sliderCaptionSubTitle">Hobli Hoskote, Taluk, Varthur Arch,Bengaluru</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.skoolz.in/home/view-school?profileId=196&d=31.5">
                                <img src="~/skoolz/assets/img/blog-mainpage/Vishwa Vidyapeeth Group of Schools_blog_7.jpg" className="sliderImage" alt="sliderImage" />
                                <div className="sliderCaption">
                                    <div className="sliderCaptionTitle">Vishwa Vidyapeeth Group of Schools</div>
                                    <div className="sliderCaptionSubTitle">Honnenahalli Village,Bengaluru</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.skoolz.in/home/view-school?profileId=137&d=35.1">
                                <img src="~/skoolz/assets/img/blog-mainpage/The Cambridge International School, Sarjapur Road_blogs_8.jpg" className="sliderImage" alt="sliderImage" />
                                <div className="sliderCaption">
                                    <div className="sliderCaptionTitle">The Cambridge International School, Sarjapur Road, TCISS</div>
                                    <div className="sliderCaptionSubTitle">Harlur, Off Sarjarpur Rd,Bengaluru</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.skoolz.in/home/view-school?profileId=12&d=11.9">
                                <img src="~/skoolz/assets/img/blog-mainpage/Vidya_Sanskaar_International_Public_School_blog_9_600x400.jpeg" className="sliderImage" alt="sliderImage" />
                                <div className="sliderCaption">
                                    <div className="sliderCaptionTitle">Vidya Sanskaar International <br /> Public School</div>
                                    <div className="sliderCaptionSubTitle">Magadi Main Road,Bengaluru</div>
                                </div>
                            </a>
                        </div>
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
                        <div className="swiper-slide">
                            <a href="https://skoolz.in/home/view-school?profileId=7">
                                <img src="~/skoolz/assets/img/Open-Minds.jpg" className="sliderImage" alt="sliderImage" />
                                <div className="sliderCaption">
                                    <div className="sliderCaptionTitle">Open Minds World School</div>
                                    <div className="sliderCaptionSubTitle">Javalli, Shimoga</div>
                                </div>
                            </a>
                        </div>


                        <div className="swiper-slide">
                            <a href="https://skoolz.in/home/view-school?profileId=8">
                                <img src="~/skoolz/assets/img/Cordial.jpg" className="sliderImage" alt="sliderImage" />
                                <div className="sliderCaption">
                                    <div className="sliderCaptionTitle">Cordial International School</div>
                                    <div className="sliderCaptionSubTitle">Madhugiri, Tumkur</div>
                                </div>
                            </a>
                        </div>

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

                        <div className="swiper-slide">
                            <a href="https://skoolz.in/home/view-school?profileId=24">
                                <img src="~/skoolz/assets/img/Eka.jpg" className="sliderImage" alt="sliderImage" />
                                <div className="sliderCaption">
                                    <div className="sliderCaptionTitle">
                                        Eka Montessori House Of Children
                                    </div>
                                    <div className="sliderCaptionSubTitle">Kumara Park West, Bengaluru</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://skoolz.in/home/view-school?profileId=36">
                                <img src="~/skoolz/assets/img/TheLearningCurve.jpg" className="sliderImage" alt="sliderImage" />
                                <div className="sliderCaption">
                                    <div className="sliderCaptionTitle">
                                        The Learning Curve
                                    </div>
                                    <div className="sliderCaptionSubTitle">Kamothe, Navi Mumbai</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://skoolz.in/home/view-school?profileId=30">
                                <img src="~/skoolz/assets/img/KidsCube.jpg" className="sliderImage" alt="sliderImage" />
                                <div className="sliderCaption">
                                    <div className="sliderCaptionTitle">Kids Cube International Pre School</div>
                                    <div className="sliderCaptionSubTitle">Marathahalli, Bengaluru</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <img src="~/skoolz/assets/img/Rectangle-129.jpg" className="sliderImage" alt="sliderImage" />
                            <div className="sliderCaption">
                                <div className="sliderCaptionTitle">Orchids The International School</div>
                                <div className="sliderCaptionSubTitle">New Tippasandra, Bengaluru</div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="pagination">
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
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