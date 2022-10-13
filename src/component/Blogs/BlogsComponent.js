import React, { useState ,useEffect,memo} from "react";
import blogtrand1 from "../../Assets/Images/CBSE vs ICSE vs IB vs IGCSE vs State Board_11zon.jpg";
import blogtrand2 from "../../Assets/Images/Various Types of Preschool_11zon.jpg";
import blogtrand3 from "../../Assets/Images/CBSE schools Banglore_11zon.jpg";
import bloglatest1 from "../../Assets/Images/Preschools in Mumbai.png";
import bloglatest2 from "../../Assets/Images/Montessori schools in Mumbai.png";
import bloglatest3 from "../../Assets/Images/Best PreSchools in Delhi.png";
import bloglatest4 from "../../Assets/Images/Best Montessori schools in Delhi.png";
import bloglatest5 from "../../Assets/Images/ICSE schools banglore.jpg";
import bloglatest6 from "../../Assets/Images/blog10_thumb.jpg";
import skoolzlogo from "../../Assets/Images/skoolz.PNG";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./BlogsComponent.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const BlogsComponent = () => {
    const [trending, setTrending] = useState(true);
    const [seleted, setSelected] = useState(true);
    const OnTranding = (val) => {
        if (val === "Latest") {
            setTrending(false)
            setSelected(false)
        } else {
            setTrending(true)
            setSelected(true)
        }
    };
    let [mywindow, setMywindow] = useState({})
    let resizeId;
    useEffect(() => {
        window.addEventListener("resize", function () {
            clearTimeout(resizeId);
            resizeId = setTimeout(doneResizing, 500);

        })
        function doneResizing() {
            setMywindow({ height: window.innerHeight, width: window.innerWidth })
        }

    }, [mywindow])
    return (
        <div>
            <div className="schoolMainHome">
                <div className="baseContainer topSchoolSection">
                    <div className="topSchoolSectionTitle"><a style={{ "textDecoration": "none" }}><Link to='./blogs'><p style={{ "color": "#FF6700" }}> Blogs </p></Link></a></div>
                    <div id="btn-content" className="text-center m-3 mb-5">
                        <div className="btn-group shadow-lg  bg-white rounded-pill" role="group" aria-label="Basic example">
                            <button type="submit" data-index="0" className={`btn-board-trendblogshome m-3 Trending ${seleted ? "btnSelected" : ''}`} onClick={() => OnTranding("Trending")}>Trending</button>
                            <button type="submit" data-index="1" className={`btn-board-trendblogshome m-3 Latest ${!seleted ? "btnSelected" : ''}`} onClick={() => OnTranding("Latest")}>Latest</button>
                        </div>
                    </div>
                    <Swiper slidesPerView={mywindow.width && mywindow.width < 768 ? 1 : 2}
                        spaceBetween={35}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={false}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper">
                        {trending ? (
                            <div className="swiper-container-blogs" id="BlogsHomeTrending">
                                <div className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide indexBlogs">
                                        <div className="indexBlogs">
                                            <div className="row">
                                                <article className="blog indexBlog fadeIn" >
                                                    <div className="row no-gutters">
                                                        <div className="col-lg-5">
                                                            <figure>
                                                                <a href="/blog/cbse-vs-icse-vs-ib-vs-igcse-vs-stateboard">
                                                                    <img src={blogtrand1} className="mr-st indexBlogsImage" style={{ "height": "280px", "width": "90%" }} alt="CBSEvsICSEvsIBvsIGCSEvsStateBoard" />
                                                                    <div className="preview"><span>Read more</span></div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="post_info" style={{ "height": "310px" }}>
                                                                <h3>
                                                                    <a href="/blog/cbse-vs-icse-vs-ib-vs-igcse-vs-stateboard">
                                                                        CBSE vs ICSE vs IB vs IGCSE vs State Board
                                                                    </a>
                                                                </h3>

                                                                <p>
                                                                    Things that start on a good note usually have flourishing conclusions. The same also applies to a student's school-level education. It lays the foundation for a lucrative career, be it in the government or the private sector.
                                                                </p>

                                                                <ul>
                                                                    <li>
                                                                        <div className="thumb"><img src={skoolzlogo} alt="skoolz logo" /></div>

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
                                                    <div className="row no-gutters">
                                                        <div className="col-lg-5">
                                                            <figure>
                                                                <a href="/blog/various-types-of-preschools-all-parents-should-know">
                                                                    <img src={blogtrand2} className="mr-st indexBlogsImage" style={{ "height": "280px", "width": "90%" }} alt="VariousTypesofPreschoolsAllParentsShouldknow" />
                                                                    <div className="preview"><span>Read more</span></div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="post_info" style={{ "height": "310px" }}>
                                                                <h3>
                                                                    <a href="/blog/various-types-of-preschools-all-parents-should-know">
                                                                        Various Types of Preschools All Parents Should know
                                                                    </a>
                                                                </h3>

                                                                <p>
                                                                    There are many educational preschool programs, and each one follows a unique learning approach. However, they share something in common – the motto, which is to empower, improve, and refine preschool education.
                                                                </p>

                                                                <ul>
                                                                    <li>
                                                                        <div className="thumb"><img src={skoolzlogo} alt="skoolz logo" /></div>

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
                                                    <div className="row no-gutters">
                                                        <div className="col-lg-5">
                                                            <figure>
                                                                <a href="/blog/best-cbse-schools-in-bangalore-for-admissions-in-2022-23">
                                                                    <img src={blogtrand3} className="mr-st indexBlogsImage" style={{ "height": "286px", "width": "90%" }} alt="BestCBSESchoolsinBangaloreforadmissionsin202223" />
                                                                    <div className="preview"><span>Read more</span></div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="post_info" style={{ "height": "310px" }}>
                                                                <h3>
                                                                    <a href="/blog/best-cbse-schools-in-bangalore-for-admissions-in-2022-23">
                                                                        Best CBSE Schools in Bangalore for admissions in 2022-23
                                                                    </a>
                                                                </h3>
                                                                <p>
                                                                    Bangalore is the top priority of parents when education is concerned. This beautiful city never fails to produce record-breaking board results.
                                                                </p>
                                                                <ul>
                                                                    <li>
                                                                        <div className="thumb"><img src={skoolzlogo} alt="skoolz logo" /></div>

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
                        ) :
                            (<div className="swiper-container-blogs" id="BlogsHomeLatest">
                                <div className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide indexBlogs">
                                        <div className="indexBlogs">
                                            <div className="row">
                                                <article className="blog indexBlog fadeIn">
                                                    <div className="row no-gutters">
                                                        <div className="col-lg-5">
                                                            <figure>
                                                                <a href="/blog/pre-schools-in-mumbai">
                                                                    <img src={bloglatest1} className="mr-st indexBlogsImage" style={{ "height": "280px", "width": "90%" }} alt="CBSEvsICSEvsIBvsIGCSEvsStateBoard" />
                                                                    <div className="preview"><span>Read more</span></div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="post_info" style={{ "height": "310px" }}>
                                                                <h3>
                                                                    <a href="/blog/pre-schools-in-mumbai">
                                                                        Pre schools in Mumbai
                                                                    </a>
                                                                </h3>

                                                                <p>
                                                                    The early learning period of a child's life is crucial. It lays the basis for an educational foundation and a bright future. Therefore, choosing the top preschool for your child becomes a vital step.
                                                                </p>

                                                                <ul>
                                                                    <li>
                                                                        <div className="thumb"><img src={skoolzlogo} alt="skoolz logo" /></div>

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
                                                    <div className="row no-gutters">
                                                        <div className="col-lg-5">
                                                            <figure>
                                                                <a href="/blog/montessori-schools-in-mumbai">
                                                                    <img src={bloglatest2} className="mr-st indexBlogsImage" style={{ "height": "280px", "width": "90%" }} alt="CBSEvsICSEvsIBvsIGCSEvsStateBoard" />
                                                                    <div className="preview"><span>Read more</span></div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="post_info" style={{ "height": "310px" }}>
                                                                <h3>
                                                                    <a href="/blog/montessori-schools-in-mumbai">
                                                                        Montessori schools in Mumbai
                                                                    </a>
                                                                </h3>

                                                                <p>
                                                                    A child on his journey to adulthood passes through many developmental stages. The needs of a child are unique, changing at every stage of their life.
                                                                </p>

                                                                <ul>
                                                                    <li>
                                                                        <div className="thumb"><img src={skoolzlogo} alt="skoolz logo" /></div>

                                                                    </li>
                                                                    <li sstyle={{ "display": "none" }}><i className="icon_comment_alt"></i></li>
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
                                                <article className="blog indexBlog fadeIn">
                                                    <div className="row no-gutters">
                                                        <div className="col-lg-5">
                                                            <figure>
                                                                <a href="/blog/best-pre-schools-in-delhi">
                                                                    <img src={bloglatest3} className="mr-st indexBlogsImage" style={{ "height": "280px", "width": "90%" }} alt="CBSEvsICSEvsIBvsIGCSEvsStateBoard" />
                                                                    <div className="preview"><span>Read more</span></div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="post_info" style={{ "height": "310px" }}>
                                                                <h3>
                                                                    <a href="/blog/best-pre-schools-in-delhi">
                                                                        Best Pre Schools in Delhi
                                                                    </a>
                                                                </h3>

                                                                <p>
                                                                    Pre-schools are basically early childhood education programs that kids should attend before they begin schooling. The programs they offer combine play with learning and are taught by professionally trained educators.
                                                                </p>

                                                                <ul>
                                                                    <li>
                                                                        <div className="thumb"><img src={skoolzlogo} alt="skoolz logo" /></div>

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
                                                <article className="blog indexBlog fadeIn">
                                                    <div className="row no-gutters">
                                                        <div className="col-lg-5">
                                                            <figure>
                                                                <a href="/blog/best-montessori-schools-in-delhi">
                                                                    <img src={bloglatest4} className="mr-st indexBlogsImage" style={{ "height": "280px", "width": "90%" }} alt="CBSEvsICSEvsIBvsIGCSEvsStateBoard" />
                                                                    <div className="preview"><span>Read more</span></div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="post_info" style={{ "height": "310px" }}>
                                                                <h3>
                                                                    <a href="/blog/best-montessori-schools-in-delhi">
                                                                        Best Montessori Schools in Delhi
                                                                    </a>
                                                                </h3>

                                                                <p>
                                                                    The Montessori education system is an internationally recognized method of education that has become quite famous in Delhi. The top Montessori Schools in Delhi provide a growing and creative environment for your child's growth.
                                                                </p>

                                                                <ul>
                                                                    <li>
                                                                        <div className="thumb"><img src={skoolzlogo} alt="skoolz logo" /></div>

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
                                                <article className="blog indexBlog fadeIn">
                                                    <div className="row no-gutters">
                                                        <div className="col-lg-5">
                                                            <figure>
                                                                <a href="/blog/best-ICSE-schools-Bangalore">
                                                                    <img src={bloglatest5} className="mr-st indexBlogsImage" style={{ "height": "280px", "width": "90%" }} alt="BestICSESchoolsInBangaloreforAdmissionsin2022" />
                                                                    <div className="preview"><span>Read more</span></div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="post_info" style={{ "height": "310px" }}>
                                                                <h3>
                                                                    <a href="/blog/best-ICSE-schools-Bangalore">
                                                                        Best ICSE Schools in Bangalore for admissions in 2022
                                                                    </a>
                                                                </h3>
                                                                <p>
                                                                    Education is essential not just for securing a bright future, but it gives knowledge for leading a virtuous life. Education is said to be life itself.Yet, the school from where this education is garnered makes all the difference.
                                                                </p>
                                                                <ul>
                                                                    <li>
                                                                        <div className="thumb"><img src={skoolzlogo} alt="skoolz logo" /></div>

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
                                                <article className="blog indexBlog fadeIn">
                                                    <div className="row no-gutters">
                                                        <div className="col-lg-5">
                                                            <figure>
                                                                <a href="/blog/nep-to-early-childhood-care-and-education">
                                                                    <img src={bloglatest5} className="mr-st indexBlogsImage" style={{ "height": "280px", "width": "90%" }} alt="NepToEarlyChildhoodCareAndEducation" />
                                                                    <div className="preview"><span>Read more</span></div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="post_info" style={{ "height": "310px" }}>
                                                                <h3>
                                                                    <a href="/blog/nep-to-early-childhood-care-and-education">
                                                                        The Shower of Blessings from NEP to Early Childhood Care and Education
                                                                    </a>
                                                                </h3>
                                                                <p>
                                                                    In 2008, when I was working as a principal for a private school, I happened to substitute an invigilator for a Class-8 English unit test. Peeking into Students' answer scripts always makes invigilation less dull.
                                                                </p>
                                                                <ul>
                                                                    <li>
                                                                        <div className="thumb"><img src={skoolzlogo} alt="skoolz logo" /></div>

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
                                                <article className="blog indexBlog fadeIn">
                                                    <div className="row no-gutters">
                                                        <div className="col-lg-5">
                                                            <figure>
                                                                <a href="/blog/nep-to-early-childhood-care-and-education">
                                                                    <img src={bloglatest6} className="mr-st indexBlogsImage" style={{ "height": "280px", "width": "90%" }} alt="NepToEarlyChildhoodCareAndEducation" />
                                                                    <div className="preview"><span>Read more</span></div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="post_info" style={{ "height": "310px" }}>
                                                                <h3>
                                                                    <a href="/blog/nep-to-early-childhood-care-and-education">
                                                                        The Shower of Blessings from NEP to Early Childhood Care and Education
                                                                    </a>
                                                                </h3>
                                                                <p>
                                                                    In 2008, when I was working as a principal for a private school, I happened to substitute an invigilator for a Class-8 English unit test. Peeking into Students' answer scripts always makes invigilation less dull.
                                                                </p>
                                                                <ul>
                                                                    <li>
                                                                        <div className="thumb"><img src={skoolzlogo} alt="skoolz logo" /></div>

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
                            </div>)}
                    </Swiper>
                </div>
                <div className="joinOurNetwork">
                    <div className="joinOurNetworkText">
                        More Blogs On Various Topics
                        <a className="joinOurNetworkButton" href="/blog/index" style={{ "textDecoration": "none" }}>
                            <div>
                                Click Here &nbsp; <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                            </div>
                        </a>

                    </div>
                </div>

            </div>
        </div >
    )
}
export default memo(BlogsComponent);