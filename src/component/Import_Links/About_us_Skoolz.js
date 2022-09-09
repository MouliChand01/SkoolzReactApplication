import React from "react";
import leader1 from '../../Assets/Images/Srinivas.jpg'
import leader2 from '../../Assets/Images/Sowmya.jpg'
import leader3 from '../../Assets/Images/Pramil.jpg'
import leader4 from '../../Assets/Images/Sarbani.jpg'
import leader5 from '../../Assets/Images/Sooryah.jpg'
import leader6 from '../../Assets/Images/Kalpana-Mohan.jpg'
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import './About_us_Skoolz.css';

const About_usComponent = () => {
    return (
        <div>
            {/* HeadePart */}
            <HeaderComponent />
            <div className="aboutUsSection baseContainer">
                <div className="AboutSkoolz">
                    <div className="row">
                        <div className="col-lg-12 m-2">
                            <h1 className="title"> ABOUT SKOOLZ</h1>
                        </div>
                        <div className="col-lg-12 m-2 aboutData">
                            Skoolz (A product of XergY Business Excellence Pvt Ltd) is an EdTech startup recognized by the Govt of India, helping parents find the right school, Hobby classes & Tuition classes for their children.
                        </div>
                        <div className="col-lg-12 m-2 aboutData">
                            Institutes can build their complete profile with 75+ salient features, unlimited photographs and videos.
                        </div>
                        <div className="col-lg-12  m-2 aboutData">
                            <span className="highLight">Vision:</span>
                            Help parents find the right school, Hobby & Tuitions Classes for their children.
                        </div>
                        <div className="col-lg-12 m-2 aboutData">
                            <span className="highLight">Mission: </span>
                            Help educators enhance Digital visibility & accessible to parents.
                        </div>
                    </div>
                </div>
                <div className="values">
                    <div className="row">
                        <div className="col-lg-12 m-2">
                            <h1 className="title"> Values</h1>
                        </div>
                        <div className="col-lg-12 m-2 aboutData">
                            <span className="highLight">Quality : </span>
                            Our roots are from Six Sigma, and we strive hard to achieve the highest quality in all that we do.
                        </div>
                        <div className="col-lg-12 m-2 aboutData">
                            <span className="highLight ">Integrity :</span>
                            Foundation of our Business. We are committed to doing the right with the utmost integrity.
                        </div>
                        <div className="col-lg-12 m-2 aboutData">
                            <span className="highLight">Result Oriented : </span>
                            We would continuously innovate ways to help our partners succeed.
                        </div>
                    </div>
                </div>
                <div className="keyBenefits">
                    <div className="row">
                        <div className="col-lg-12 my-2">
                            <h1 className="title"> 8 Key Benefits for Parents</h1>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-3">
                            <div className="card px-2 py-5 d-flex">
                                <p className="m-0 text-center" >
                                    Everything that parents need to know about the educators.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-3">
                            <div className="card px-2 py-5 d-flex">
                                <p className="m-0 text-center" >
                                    Everything that parents need to know about the educators.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-3">
                            <div className="card px-2 py-5 d-flex">
                                <p className="m-0 text-center" >
                                    Everything that parents need to know about the educators.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-3">
                            <div className="card px-2 py-5 d-flex">
                                <p className="m-0 text-center" >
                                    Everything that parents need to know about the educators.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-3">
                            <div className="card px-2 py-5 d-flex">
                                <p className="m-0 text-center" >
                                    Everything that parents need to know about the educators.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-3">
                            <div className="card px-2 py-5 d-flex">
                                <p className="m-0 text-center" >
                                    Everything that parents need to know about the educators.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-3">
                            <div className="card px-2 py-5 d-flex">
                                <p className="m-0 text-center" >
                                    Everything that parents need to know about the educators.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-sm-12 mb-3">
                            <div className="card px-2 py-5 d-flex">
                                <p className="m-0 text-center" >
                                    Everything that parents need to know about the educators.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="middleLine mt-5 mb-2"><em></em></span>
            </div>
            <div className="teamMembers baseContaine">
                <div className="row">
                    <div className="col-lg-12 m-2">
                        <h1 className="title">Team on a Mission</h1>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div className="card m-2">
                            <div className="team-photo">
                                <img src={leader1} />
                            </div>
                            <div className="team-description">
                                <div className="team-info">
                                    <h5><a href="https://www.linkedin.com/in/srinivasvenkat/">SRINIVAS<br />T V</a></h5>
                                    <span>FOUNDER & CEO</span>
                                </div>
                                <div className="team-contact">
                                    <a href="https://www.linkedin.com/in/srinivasvenkat/">in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div className="card m-2">
                            <div className="team-photo m-2">
                                <img src={leader2} />
                            </div>
                            <div className="team-description">
                                <div className="team-info">
                                    <h5><a target="_blank" href="https://www.linkedin.com/in/sowmya-b-v-0ba67a90/">Sowmya<br />BV</a></h5>
                                    <span>DIRECTOR HR & OPERATIONS</span>
                                </div>
                                <div className="team-contact">
                                    <a href="https://www.linkedin.com/in/sowmya-b-v-0ba67a90/">in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div className="card m-2"><div className="team-photo">
                            <img src={leader3} />
                        </div>
                            <div className="team-description">
                                <div className="team-info">
                                    <h5><a target="_blank" href="https://www.linkedin.com/in/pramilgawande/">Pramil<br />Gawande</a></h5>
                                    <span>CHIEF TECHNOLOGY OFFICER</span>
                                </div>
                                <div className="team-contact">
                                    <a href="https://www.linkedin.com/in/pramilgawande/">in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div className="card m-2">
                            <div className="team-photo">
                                <img className="img-fluid" src={leader4} />
                            </div>
                            <div className="team-description">
                                <div className="team-info">
                                    <h5><a target="_blank" href="https://www.linkedin.com/in/sarbani-chakraborty-53424046/">Sarbani<br /> Nandi</a></h5>
                                    <span>LEADER ALES</span>
                                </div>
                                <div className="team-contact">
                                    <a href="https://www.linkedin.com/in/sarbani-chakraborty-53424046/">in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div className="card m-2">
                            <div className="team-photo">
                                <img className="img-fluid" src={leader5} />
                            </div>
                            <div className="team-description">
                                <div className="team-info">
                                    <h5><a target="_blank" href="https://www.linkedin.com/in/sooryah-pokkali-7102b825/">Sooryah<br />Pokkali</a></h5>
                                    <span>GROWTH & STRATEGY ADVISOR</span>
                                </div>
                                <div className="team-contact">
                                    <a href="https://www.linkedin.com/in/sooryah-pokkali-7102b825/">in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div className="card m-2">
                            <div className="team-photo">
                                <img className="img-fluid" src={leader6} />
                            </div>
                            <div className="team-description">
                                <div className="team-info">
                                    <h5><a target="_blank" href="#0">Kalpana<br />Mohan</a></h5>
                                    <span>ACADEMIC ADVISOR/CONSULTANT</span>
                                </div>
                                <div className="team-contact">
                                    <a href="#0">in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FooterPart */}
            <FooterComponent />
        </div>
    )
}
export default About_usComponent;