import React from "react";
import skoolzlogo from "../../Assets/Images/skoolz.PNG"
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div>
            <div className="schoolMainHome">
                <div className="baseContainer topSchoolSection">
                    <div className="topSchoolSectionTitleTestimonial"><a asp-controller="Testimonial" asp-action="Index"><p style={{ "color": "#FF6700" }}> Testimonials</p></a> </div>
                    <div className="swiper-container-evTestimonial">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide indexBlogs">
                                <div className="row">
                                    <article className="blog indexBlog fadeIn" style={{ "visibility": "visible", "animation-name": "fadeIn;" }}>
                                        <div>
                                            <div className="card-body">

                                                <p className="card-text text-justify paddingP">
                                                    “This is a great concept and a great help for parents searching for the school of their choice and in the area closer to their homes. I was pleasantly surprised to see 15+ schools near my house, and I got to know maximum information about them without visiting them. Photographs and videos &nbsp; & &nbsp; Differentiators was a  &nbsp;great help to learn about the schools. Booking appointments and reaching out to school management was a lot easier. I wish you good luck and looking forward to adding  more &nbsp; information about  many schools.”
                                                </p>
                                                <img src={skoolzlogo} style={{ "height": "138px", "width": "155px", "borderRadius": "16%;" }} alt="Startup-Certificate-Xergy" />
                                                <div className="parentName">Anandmayi Priyadarshini</div>
                                                <div className="description">Parent</div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="swiper-slide indexBlogs">
                                <div className="row">
                                    <article className="blog indexBlog fadeIn" style={{ "visibility": "visible", "animation-name": "fadeIn;" }}>
                                        <div>
                                            <div className="card-body">
                                                <p className="card-text text-justify paddingP">
                                                    “Skoolz was a great help in finding a school for my Son. I was able to find detailed information on schools in my area. Photographs and videos helped me to get better clarity about the school,which we were looking for(just sitting at comfort of my home) .the Advantage over here is i could compare more schools here,as while visits,we could  have not done many schools visits.
                                                    Founders & Principal interview helped me understand the leaders thought process towards education and clarity in their thoughts was something worth knowing.”
                                                </p>
                                                <img src={skoolzlogo} style={{ "height": "138px", "width": "155px", "borderRadius": "16%;" }} alt="Startup-Certificate-Xergy" />
                                                <div className="footer">
                                                    <div className="parentName">Geetha S</div>
                                                    <div className="description">Parent</div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="swiper-slide indexBlogs">
                                <div className="row">
                                    <article className="blog indexBlog fadeIn" style={{ "visibility": "visible", "animation-name": "fadeIn;" }}>
                                        <div className="card-deck">
                                            <div>
                                                <div className="card-body">
                                                    <p className="card-text text-justify paddingP">
                                                        “Thank you, skoolz; searching for a school for my son was a lot easier than we thought; We gathered the utmost information about a school without visiting them personally, which helped me save time & was able to reach the school of my choice easily. We Like the comparison of schools of three schools, if not Skoolz, it would have taken ages few days to collect data and compare them side by side.”
                                                    </p>
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <img src={skoolzlogo} style={{ "height": "138px", "width": "155px", "borderRadius": "16%;" }} alt="Startup-Certificate-Xergy" />
                                                    <br />
                                                    <div className="footer">
                                                        <div className="parentName">Punith Gowda</div>
                                                        <div className="description">Parent</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination">
                    <div class="swiper-button-prev-evTestimonial"></div>
                    <div class="swiper-pagination-evTestimonial"></div>
                    <div class="swiper-button-next-evTestimonial"></div>
                </div>
                <div class="joinOurNetwork" id="contactRedirect">
                    <div class="joinOurNetworkText">
                        More Testimonials
                        <div class="viewMoreTestimonialsHomeButton"></div>
                        <a asp-controller="Testimonial" asp-action="Index" style={{"textDecoration":"None"}} class="joinOurNetworkButton">
                            <div>
                                Click here<span class="registerSchoolIcon"></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;