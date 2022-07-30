import React from "react";
import skoolzlogo from "../../Assets/Images/skoolz.PNG"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faLinkedin,faYoutube,faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLongArrowAltRight,faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
const FooterComponent = () => {
    return (
        <div>
             {/* call Us */}
            <div className="joinOurNetwork">
                <div className="joinOurNetworkText">
                    Call Us &nbsp;&#64;&nbsp; 7760755882 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; OR
                    <div className="callUsHomeButton"></div><button className="joinOurNetworkButton applyBtn joinOurNetworkButton callBackBtn" data-toggle="modal" data-backdrop="static" data-target="#ContactUsFormSchoolModal" style={{"padding-bottom":"50px"}}>Get a Call Back &nbsp; <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></button>
                </div>
            </div>
            <br />
            {/* Partner With Us */}
            <div className="joinOurNetwork">
                <div className="joinOurNetworkText">
                    <h1>
                        Partner With Us
                    </h1>
                    <div className="joinOurNetworkOfBestSchoolsHomeButton"></div><a target="_blank" href="https://partners.skoolz.in" style={{"textDecoration":"None"}}className="joinOurNetworkButton"><div className="registerButton">Register &nbsp; <FontAwesomeIcon icon={faArrowUpRightFromSquare}/><span className="registerSchoolIcon"> </span></div></a>
                </div>
            </div>
            <br />
            {/* Static Links for schools */}
            <div className="quickLinkFooter">
                <div className="main-footer">
                    <div className="col-md-12 pt-10">
                        <span className="footer-top-boarding"> Ahmedabad :</span>
                        <a data-attr-filter="top" target="_blank" className="top_boarding" href="/home/search/ahmedabad/top-schools-in-ahmedabad">Schools In Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="cbse" target="_blank" className="top_boarding" href="/home/search/ahmedabad/cbse-schools-in-ahmedabad">CBSE schools Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="icse" target="_blank" className="top_boarding" href="/home/search/ahmedabad/icse-schools-in-ahmedabad">Best ICSE schools in Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="ib" target="_blank" className="top_boarding" href="/home/search/ahmedabad/ib-schools-in-ahmedabad">Best IB schools in Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="ib" target="_blank" class="top_boarding" href="/home/search/ahmedabad/international-schools-in-ahmedabad">Best international schools in Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="stateboard" target="_blank" class="top_boarding" href="/home/search/ahmedabad/stateboard-schools-in-ahmedabad">State Board Schools in Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="preschool" target="_blank" class="top_boarding" href="/home/search/ahmedabad/playchools-in-ahmedabad">Best Play Schools In Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="preschool" target="_blank" class="top_boarding" href="/home/search/ahmedabad/preschools-in-ahmedabad">Best Preschools In Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="playway" target="_blank" class="top_boarding" href="/home/search/ahmedabad/play-way-schools-in-ahmedabad">Best Play Way Schools In Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="montessori" target="_blank" class="top_boarding" href="/home/search/ahmedabad/montessori-schools-in-ahmedabad">Best Montessori Schools in Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="dayschool" target="_blank" class="top_boarding" href="/home/search/ahmedabad/day-schools-in-ahmedabad">Best Day Schools in Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="boardingschool" target="_blank" class="top_boarding" href="/home/search/ahmedabad/boarding-schools-in-ahmedabad">Boarding Schools in Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="daycumboardingschool" target="_blank" class="top_boarding" href="/home/search/ahmedabad/day-cum-boarding-schools-in-ahmedabad">Best Day Cum Boarding Schools in Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="onlineschool" target="_blank" class="top_boarding" href="/home/search/ahmedabad/online-schools-in-ahmedabad">Best online Schools In Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="boys" target="_blank" class="top_boarding" href="/home/search/ahmedabad/boys-schools-in-ahmedabad">Best Boys Schools In Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="girls" target="_blank" class="top_boarding" href="/home/search/ahmedabad/girls-schools-in-ahmedabad">Best Girls Schools In Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="coed" target="_blank" class="top_boarding" href="/home/search/ahmedabad/co-ed-schools-in-ahmedabad">Best Co-Ed Schools In Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="stembased" target="_blank" class="top_boarding" href="/home/search/ahmedabad/stem-based-schools-in-ahmedabad">Best STEM Based Schools In  Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="daycare" target="_blank" class="top_boarding" href="/home/search/ahmedabad/daycare-schools-in-ahmedabad">Best Schools with Day Care In Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="lowfee" target="_blank" class="top_boarding" href="/home/search/ahmedabad/lowest-fee-schools-in-ahmedabad">Best Schools with Lowest Fee In Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="mediumfee" target="_blank" class="top_boarding" href="/home/search/ahmedabad/medium-schools-fee-in-ahmedabad">Best Schools with Medium Fee In Ahmedabad</a> <span> | </span>
                        <a data-attr-filter="highfee" target="_blank" class="top_boarding" href="/home/search/ahmedabad/highest-schools-fee-in-ahmedabad">Best Schools with Highest Fee In Ahmedabad</a> <span> | </span>
                    </div>
                    <div className="col-md-12 pt-10">
                        <span className="footer-top-boarding"> Bengaluru :</span>
                        <a data-attr-filter="top" target="_blank" class="top_boarding" href="/home/search/bengaluru/top-schools-in-bengaluru">Schools In Bengaluru</a> <span> | </span>
                        <a data-attr-filter="cbse" target="_blank" class="top_boarding" href="/home/search/bengaluru/cbse-schools-in-bengaluru">CBSE schools Bengaluru</a> <span> | </span>
                        <a data-attr-filter="icse" target="_blank" class="top_boarding" href="/home/search/bengaluru/icse-schools-in-bengaluru">Best ICSE schools in Bengaluru</a> <span> | </span>
                        <a data-attr-filter="ib" target="_blank" class="top_boarding" href="/home/search/bengaluru/ib-schools-in-bengaluru">Best IB schools in Bengaluru</a> <span> | </span>
                        <a data-attr-filter="ib" target="_blank" class="top_boarding" href="/home/search/bengaluru/international-schools-in-bengaluru">Best international schools in Bengaluru</a> <span> | </span>
                        <a data-attr-filter="stateboard" target="_blank" class="top_boarding" href="/home/search/bengaluru/stateboard-schools-in-bengaluru">State Board Schools in Bengaluru</a> <span> | </span>
                        <a data-attr-filter="preschool" target="_blank" class="top_boarding" href="/home/search/bengaluru/playchools-in-bengaluru">Best Play Schools In Bengaluru</a> <span> | </span>
                        <a data-attr-filter="preschool" target="_blank" class="top_boarding" href="/home/search/bengaluru/preschools-in-bengaluru">Best Preschools In Bengaluru</a> <span> | </span>
                        <a data-attr-filter="playway" target="_blank" class="top_boarding" href="/home/search/bengaluru/play-way-schools-in-bengaluru">Best Play Way Schools In Bengaluru</a> <span> | </span>
                        <a data-attr-filter="montessori" target="_blank" class="top_boarding" href="/home/search/bengaluru/montessori-schools-in-bengaluru">Best Montessori Schools in Bengaluru</a> <span> | </span>
                        <a data-attr-filter="dayschool" target="_blank" class="top_boarding" href="/home/search/bengaluru/day-schools-in-bengaluru">Best Day Schools in Bengaluru</a> <span> | </span>
                        <a data-attr-filter="boardingschool" target="_blank" class="top_boarding" href="/home/search/bengaluru/boarding-schools-in-bengaluru">Boarding Schools in Bengaluru</a> <span> | </span>
                        <a data-attr-filter="daycumboardingschool" target="_blank" class="top_boarding" href="/home/search/bengaluru/day-cum-boarding-schools-in-bengaluru">Best Day Cum Boarding Schools in Bengaluru</a> <span> | </span>
                        <a data-attr-filter="onlineschool" target="_blank" class="top_boarding" href="/home/search/bengaluru/online-schools-in-bengaluru">Best online Schools In Bengaluru</a> <span> | </span>
                        <a data-attr-filter="boys" target="_blank" class="top_boarding" href="/home/search/bengaluru/boys-schools-in-bengaluru">Best Boys Schools In Bengaluru</a> <span> | </span>
                        <a data-attr-filter="girls" target="_blank" class="top_boarding" href="/home/search/bengaluru/girls-schools-in-bengaluru">Best Girls Schools In Bengaluru</a> <span> | </span>
                        <a data-attr-filter="coed" target="_blank" class="top_boarding" href="/home/search/bengaluru/co-ed-schools-in-bengaluru">Best Co-Ed Schools In Bengaluru</a> <span> | </span>
                        <a data-attr-filter="stembased" target="_blank" class="top_boarding" href="/home/search/bengaluru/stem-based-schools-in-bengaluru">Best STEM Based Schools In  Bengaluru</a> <span> | </span>
                        <a data-attr-filter="daycare" target="_blank" class="top_boarding" href="/home/search/bengaluru/daycare-schools-in-bengaluru">Best Schools with Day Care In Bengaluru</a> <span> | </span>
                        <a data-attr-filter="lowfee" target="_blank" class="top_boarding" href="/home/search/bengaluru/lowest-fee-schools-in-bengaluru">Best Schools with Lowest Fee In Bengaluru</a> <span> | </span>
                        <a data-attr-filter="mediumfee" target="_blank" class="top_boarding" href="/home/search/bengaluru/medium-schools-fee-in-bengaluru">Best Schools with Medium Fee In Bengaluru</a> <span> | </span>
                        <a data-attr-filter="highfee" target="_blank" class="top_boarding" href="/home/search/bengaluru/highest-schools-fee-in-bengaluru">Best Schools with Highest Fee In Bengaluru</a> <span> | </span>
                    </div>
                    <div className="col-md-12 pt-10">
                        <span className="footer-top-boarding"> Chennai :</span>
                        <a data-attr-filter="top" target="_blank" class="top_boarding" href="/home/search/chennai/top-schools-in-chennai">Schools In Chennai</a> <span> | </span>
                        <a data-attr-filter="cbse" target="_blank" class="top_boarding" href="/home/search/chennai/cbse-schools-in-chennai">CBSE schools Chennai</a> <span> | </span>
                        <a data-attr-filter="icse" target="_blank" class="top_boarding" href="/home/search/chennai/icse-schools-in-chennai">Best ICSE schools in Chennai</a> <span> | </span>
                        <a data-attr-filter="ib" target="_blank" class="top_boarding" href="/home/search/chennai/ib-schools-in-chennai">Best IB schools in Chennai</a> <span> | </span>
                        <a data-attr-filter="ib" target="_blank" class="top_boarding" href="/home/search/chennai/international-schools-in-chennai">Best international schools in Chennai</a> <span> | </span>
                        <a data-attr-filter="stateboard" target="_blank" class="top_boarding" href="/home/search/chennai/stateboard-schools-in-chennai">State Board Schools in Chennai</a> <span> | </span>
                        <a data-attr-filter="preschool" target="_blank" class="top_boarding" href="/home/search/chennai/playchools-in-chennai">Best Play Schools In Chennai</a> <span> | </span>
                        <a data-attr-filter="preschool" target="_blank" class="top_boarding" href="/home/search/chennai/preschools-in-chennai">Best Preschools In Chennai</a> <span> | </span>
                        <a data-attr-filter="playway" target="_blank" class="top_boarding" href="/home/search/chennai/play-way-schools-in-chennai">Best Play Way Schools In Chennai</a> <span> | </span>
                        <a data-attr-filter="montessori" target="_blank" class="top_boarding" href="/home/search/chennai/montessori-schools-in-chennai">Best Montessori Schools in Chennai</a> <span> | </span>
                        <a data-attr-filter="dayschool" target="_blank" class="top_boarding" href="/home/search/chennai/day-schools-in-chennai">Best Day Schools in Chennai</a> <span> | </span>
                        <a data-attr-filter="boardingschool" target="_blank" class="top_boarding" href="/home/search/chennai/boarding-schools-in-chennai">Boarding Schools in Chennai</a> <span> | </span>
                        <a data-attr-filter="daycumboardingschool" target="_blank" class="top_boarding" href="/home/search/chennai/day-cum-boarding-schools-in-chennai">Best Day Cum Boarding Schools in Chennai</a> <span> | </span>
                        <a data-attr-filter="onlineschool" target="_blank" class="top_boarding" href="/home/search/chennai/online-schools-in-chennai">Best online Schools In Chennai</a> <span> | </span>
                        <a data-attr-filter="boys" target="_blank" class="top_boarding" href="/home/search/chennai/boys-schools-in-chennai">Best Boys Schools In Chennai</a> <span> | </span>
                        <a data-attr-filter="girls" target="_blank" class="top_boarding" href="/home/search/chennai/girls-schools-in-chennai">Best Girls Schools In Chennai</a> <span> | </span>
                        <a data-attr-filter="coed" target="_blank" class="top_boarding" href="/home/search/chennai/co-ed-schools-in-chennai">Best Co-Ed Schools In Chennai</a> <span> | </span>
                        <a data-attr-filter="stembased" target="_blank" class="top_boarding" href="/home/search/chennai/stem-based-schools-in-chennai">Best STEM Based Schools In  Chennai</a> <span> | </span>
                        <a data-attr-filter="daycare" target="_blank" class="top_boarding" href="/home/search/chennai/daycare-schools-in-chennai">Best Schools with Day Care In Chennai</a> <span> | </span>
                        <a data-attr-filter="lowfee" target="_blank" class="top_boarding" href="/home/search/chennai/lowest-fee-schools-in-chennai">Best Schools with Lowest Fee In Chennai</a> <span> | </span>
                        <a data-attr-filter="mediumfee" target="_blank" class="top_boarding" href="/home/search/chennai/medium-schools-fee-in-chennai">Best Schools with Medium Fee In Chennai</a> <span> | </span>
                        <a data-attr-filter="highfee" target="_blank" class="top_boarding" href="/home/search/chennai/highest-schools-fee-in-chennai">Best Schools with Highest Fee In Chennai</a> <span> | </span>
                    </div>
                    <div className="col-md-12 pt-10">
                        <span className="footer-top-boarding"> Delhi :</span>
                        <a data-attr-filter="top" target="_blank" class="top_boarding" href="/home/search/delhi/top-schools-in-delhi">Schools In Delhi</a> <span> | </span>
                        <a data-attr-filter="cbse" target="_blank" class="top_boarding" href="/home/search/delhi/cbse-schools-in-delhi">CBSE schools Delhi</a> <span> | </span>
                        <a data-attr-filter="icse" target="_blank" class="top_boarding" href="/home/search/delhi/icse-schools-in-delhi">Best ICSE schools in Delhi</a> <span> | </span>
                        <a data-attr-filter="ib" target="_blank" class="top_boarding" href="/home/search/delhi/ib-schools-in-delhi">Best IB schools in Delhi</a> <span> | </span>
                        <a data-attr-filter="ib" target="_blank" class="top_boarding" href="/home/search/delhi/international-schools-in-delhi">Best international schools in Delhi</a> <span> | </span>
                        <a data-attr-filter="stateboard" target="_blank" class="top_boarding" href="/home/search/delhi/stateboard-schools-in-delhi">State Board Schools in Delhi</a> <span> | </span>
                        <a data-attr-filter="preschool" target="_blank" class="top_boarding" href="/home/search/delhi/playchools-in-delhi">Best Play Schools In Delhi</a> <span> | </span>
                        <a data-attr-filter="preschool" target="_blank" class="top_boarding" href="/home/search/delhi/preschools-in-delhi">Best Preschools In Delhi</a> <span> | </span>
                        <a data-attr-filter="playway" target="_blank" class="top_boarding" href="/home/search/delhi/play-way-schools-in-delhi">Best Play Way Schools In Delhi</a> <span> | </span>
                        <a data-attr-filter="montessori" target="_blank" class="top_boarding" href="/home/search/delhi/montessori-schools-in-delhi">Best Montessori Schools in Delhi</a> <span> | </span>
                        <a data-attr-filter="dayschool" target="_blank" class="top_boarding" href="/home/search/delhi/day-schools-in-delhi">Best Day Schools in Delhi</a> <span> | </span>
                        <a data-attr-filter="boardingschool" target="_blank" class="top_boarding" href="/home/search/delhi/boarding-schools-in-delhi">Boarding Schools in Delhi</a> <span> | </span>
                        <a data-attr-filter="daycumboardingschool" target="_blank" class="top_boarding" href="/home/search/delhi/day-cum-boarding-schools-in-delhi">Best Day Cum Boarding Schools in Delhi</a> <span> | </span>
                        <a data-attr-filter="onlineschool" target="_blank" class="top_boarding" href="/home/search/delhi/online-schools-in-delhi">Best online Schools In Delhi</a> <span> | </span>
                        <a data-attr-filter="boys" target="_blank" class="top_boarding" href="/home/search/delhi/boys-schools-in-delhi">Best Boys Schools In Delhi</a> <span> | </span>
                        <a data-attr-filter="girls" target="_blank" class="top_boarding" href="/home/search/delhi/girls-schools-in-delhi">Best Girls Schools In Delhi</a> <span> | </span>
                        <a data-attr-filter="coed" target="_blank" class="top_boarding" href="/home/search/delhi/co-ed-schools-in-delhi">Best Co-Ed Schools In Delhi</a> <span> | </span>
                        <a data-attr-filter="stembased" target="_blank" class="top_boarding" href="/home/search/delhi/stem-based-schools-in-delhi">Best STEM Based Schools In  Delhi</a> <span> | </span>
                        <a data-attr-filter="daycare" target="_blank" class="top_boarding" href="/home/search/delhi/daycare-schools-in-delhi">Best Schools with Day Care In Delhi</a> <span> | </span>
                        <a data-attr-filter="lowfee" target="_blank" class="top_boarding" href="/home/search/delhi/lowest-fee-schools-in-delhi">Best Schools with Lowest Fee In Delhi</a> <span> | </span>
                        <a data-attr-filter="mediumfee" target="_blank" class="top_boarding" href="/home/search/delhi/medium-schools-fee-in-delhi">Best Schools with Medium Fee In Delhi</a> <span> | </span>
                        <a data-attr-filter="highfee" target="_blank" class="top_boarding" href="/home/search/delhi/highest-schools-fee-in-delhi">Best Schools with Highest Fee In Delhi</a> <span> | </span>
                    </div>
                </div>
            </div>
            {/* webFooter viwe */}
            <div className="webFooter">
                <div className="row baseContainer">
                    <div className="col-md-4 webFooterCenter">
                        <div className="webFooterContent1Title"></div>
                        <ul className="webFooterContent1List">
                            <li className="webFooterContent1Title">
                                IMPORTANT LINKS
                            </li>
                            <li><a href="https://www.skoolz.in/" asp-action="About">About Skoolz</a></li>
                            <li><a href="https://www.skoolz.in/blog/index" asp-action="Blogs">Blogs</a></li>
                            <li><a href="https://www.skoolz.in/events" asp-action="Events">Events / Webinar</a></li>
                            <li><a href="https://www.skoolz.in/blog/kids" asp-action="Kids">Kids Arena</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 webFooterCenter">
                        <div className="webFooterContent1Title"></div>
                        <ul className="webFooterContent1List">
                            <li className="webFooterContent1Title">
                                GET IN TOUCH
                            </li>
                            <li>
                                <a target="_blank" href="https://www.facebook.com/Skoolzsearch">
                                    <span className="iconSocial iconFb">
                                      <FontAwesomeIcon icon={faFacebook}/>
                                    </span>Facebook
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://twitter.com/skoolzsearch">
                                    <span className="iconSocial iconTw">
                                    <FontAwesomeIcon icon={faTwitter}/>
                                    </span>Twitter
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/company/skoolz-in">
                                    <span className="iconSocial iconIn">
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                    </span>Linkedin
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.instagram.com/skoolzsearch/">
                                    <span className="iconSocial iconIn">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                    </span>Instagram
                                </a>
                            </li>

                            <li>
                                <a target="_blank" href="https://www.youtube.com/channel/UClbFOYaHWdLlae_mCKTp6VQ">
                                    <span className="iconSocial iconIn">
                                    <FontAwesomeIcon icon={faYoutube}/>
                                    </span>YouTube
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 webFooterCenter">
                        <div className="webFooterContent1">
                            <div className="webFooterContent1Title"></div>
                            <ul className="webFooterContent1List">
                                <li>
                                    Register with us & get update on upcoming <br /><br /> Events, Offers & New Institutes nearby
                                </li>
                                <li>
                                    <div className="joinOurNetworkText">
                                        <div className="SearchButtonContactus">
                                            <button className="applyBtn joinOurNetworkButton1" data-toggle="modal" data-backdrop="static" data-target="#EventRegisterPopupHomepageModal" style={{ "paddingBottom": "50px", "marginLeft": "-1px", "background": "white" }}>Register</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobileFooter viwe */}
            <div className="mobileFooter">
                <div className="mobileFooterContent1">
                    <div className="mobileFooterContent1SubTitle">
                        Register with us & get update on upcoming Events,<br /> Offers & New Institutes nearby
                    </div>
                    <div className="joinOurNetworkText">
                        <div className="SearchButtonContactus">
                            <button className="applyBtn joinOurNetworkButton1" data-toggle="modal" data-backdrop="static" data-target="#EventRegisterPopupHomepageModal" style={{ "paddingBottom": "50px" }}>Register</button>
                        </div>
                    </div>
                    <ul className="mobileFooterContent1List">
                        <li style={{ "color": "rgba(255, 255, 255, .8)", "fontSize": "16px" }}>Important Links</li>
                        <li><a href="https://www.skoolz.in/" asp-action="About" style={{ "color": "rgba(255, 255, 255, .8)" }}>About</a></li>
                        <li><a href="https://www.skoolz.in/blog/index" asp-action="Index" style={{ "color": "rgba(255, 255, 255, .8)" }}>Blogs</a></li>
                        <li><a href="https://www.skoolz.in/events" asp-action="Index" style={{ "color": "rgba(255, 255, 255, .8)" }}>Events / Webinar</a></li>
                        <li><a href="https://www.skoolz.in/blog/kids" asp-action="Kids" style={{ "color": "rgba(255, 255, 255, .8)" }}>Kids Arena</a></li>
                    </ul>
                    <div className="footerSS">
                        <a target="_blank" href="https://www.facebook.com/Skoolzsearch"> <FontAwesomeIcon icon={faFacebook} style={{"color":"white"}}/></a>
                        <a target="_blank" href="#0"> <FontAwesomeIcon icon={faTwitter} style={{"color":"white"}}/></a>
                        <a target="_blank" href="https://www.instagram.com/skoolzsearch/"><FontAwesomeIcon icon={faInstagram} style={{"color":"white"}}/></a>
                        <a target="_blank" href="https://www.linkedin.com/company/skoolz-in"><FontAwesomeIcon icon={faLinkedin} style={{"color":"white"}} /></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UClbFOYaHWdLlae_mCKTp6VQ"><FontAwesomeIcon icon={faYoutube} style={{"color":"white"}}/></a>
                    </div>
                </div>
            </div>

            {/* baseLine footer */}
            <div className="row baseContainer copyright">
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-5 copyrighTnC">
                    © 2020 <a asp-controller="Home" asp-action="Index">skoolz.in</a><span> a Product of XBE(XergY Business Excellence Pvt Ltd)</span><br />
                    <a asp-controller="Home" asp-action="TermsAndConditions">Terms and conditions</a> @*| <a href="#0">Privacy</a>*@
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2 copyrightLogo">
                    <img src={skoolzlogo} alt="logo" />
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-5 copyrightPowered">

                    Powered by <a target="_blank" href="https://xergy.co.in">XergY</a><br />
                    Designed & Developed by <a target="_blank" href="https://xbe.co.in">XBE</a><br />
                    A startup by a Navodayan
                </div>
            </div>
            {/* Model Register */}

            {/* <div className="modal LoginTypeModal fade bookAppointmentSchoolModal" id="EventRegisterPopupHomepageModal" role="dialog" tabindex="-1" aria-labelledby="bookAppointmentSchoolModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="card card-wrapper">
                                <div className="card-header">
                                    <button type="button" onclick="EventRegisterResetControls()" className="close modalClose" data-dismiss="modal"><span>×</span></button>
                                    <h4 className="card-title text-center">Registration Form</h4>
                                </div>
                                <div className="card-body">
                                    <div id="studentDetails"></div>
                                    <br />
                                    <div>
                                        <div id="schoolRegisterForm" className="schoolRegisterForm">


                                            <input type="hidden" asp-for="RegisteredOn" value="@DateTime.Now" />
                                            <input type="hidden" asp-for="Id" />

                                            <div className="row">

                                                <div className="col-md-6">
                                                    <div className="form-group" id="divChildName">
                                                        <label>Child Name<span className="requiredIcon">*</span></label>
                                                        <input type="text" asp-for="ChildName" required className="form-control" style={{ "background": "#fff !important;" }} placeholder="Child Full Name" />
                                                        <span className="text-danger" id="errChildName" asp-validation-for="ChildName"></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group" id="divChildGender">
                                                        <label>Child Gender<span className="requiredIcon">*</span></label>
                                                        <select asp-for="ChildGender" asp-items="Html.GetEnumSelectList<ChildGender>()" className="form-control">
                                                            <option selected="selected" value="" style={{ "background": "#fff !important;" }}>Please select</option>
                                                        </select>
                                                        <span className="text-danger" id="errChildGender" asp-validation-for="ChildGender"></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group" id="divDOB">
                                                        <label>Child Date of Birth<span className="requiredIcon">*</span></label>
                                                        <input type="date" asp-for="DOB" className="form-control" style={{ "background": "#fff !important;" }} required />
                                                        <span className="text-danger" id="errDOB" asp-validation-for="DOB"></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group" id="divSchoolName">
                                                        <label>School Name<span className="requiredIcon">*</span></label>
                                                        <input type="text" asp-for="SchoolName" required className="form-control" style={{ "background": "#fff !important;" }} placeholder="Enter School Name" />
                                                        <span className="text-danger" id="errSchoolName" asp-validation-for="SchoolName"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group" id="divClassGrade">
                                                        <label>Class / Grade<span className="requiredIcon">*</span></label>
                                                        <select asp-for="ClassGrade" asp-items="Html.GetEnumSelectList<ClassGrade>()" className="form-control">
                                                            <option selected="selected" value="" style={{ "background": "#fff !important;" }}>Please select</option>
                                                        </select>
                                                        <span className="text-danger" id="errClassGrade" asp-validation-for="ClassGrade"></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group" id="divParentName">
                                                        <label>Parent Name<span className="requiredIcon">*</span></label>
                                                        <input type="text" asp-for="ParentName" required className="form-control" style={{ "background": "#fff !important;" }} placeholder="Parent Full Name" />
                                                        <span className="text-danger" id="errParentName" asp-validation-for="ParentName"></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group" id="divAddress">
                                                        <label>Address<span className="requiredIcon">*</span></label>
                                                        <input type="text" asp-for="Address" required className="form-control" style={{ "background": "#fff !important;" }} placeholder="Enter Address" />
                                                        <span className="text-danger" id="errAddress" asp-validation-for="Address"></span>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group" id="divParentEmailId">
                                                        <label>Parent Email<span className="requiredIcon">*</span></label>
                                                        <input type="email" asp-for="ParentEmailId" required style={{ "background": "#fff !important;" }} className="form-control" placeholder="Enter Parent Email" />
                                                        <span className="text-danger" id="errParentEmailId" asp-validation-for="ParentEmailId"></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group" id="divWhatsApp">
                                                        <label>Parent WhatsApp Number<span className="requiredIcon">*</span></label>
                                                        <input type="number" asp-for="ParentWhatsAppNumber" required style={{ "background": "#fff !important;" }} className="form-control" placeholder="Enter WhatsApp Number " />
                                                        <span className="text-danger" id="errWhatsApp" asp-validation-for="ParentWhatsAppNumber"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="registerLinks event-register-tnc" id="divTermsCondition">
                                                <div className="tnc">
                                                    <label className="containerCheckbox" for="eventRegisterTNC">
                                                        I have read and agree to the <a asp-controller="Home" asp-action="TermsAndConditions" className="link">Terms & Conditions</a>
                                                        <input type="checkbox" className="checkboxCustom" id="eventRegisterTNC" name="tnc" />
                                                        <span className="TNCCheckmark"></span>
                                                    </label>
                                                    <span id="errTermsCondition" className="text-danger"></span>
                                                </div>
                                            </div>
                                            <div className="btnSection">
                                                <input id="submitBtn" type="submit" className="customBtn mx-auto register_school" onclick="return EventRegistrationHomePage()" value="Register" />
                                            </div>
                                            <div>
                                                <span id="responseMessage" className="text-danger"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default FooterComponent;