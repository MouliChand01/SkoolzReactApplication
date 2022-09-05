import React, { useState } from "react";
import skoolzlogo from "../../Assets/Images/skoolz.PNG"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
import { Link } from "react-router-dom";
const HeaderComponent = ()=>{
    const [flag, setFlag] = useState("");
    const [display,setDisplay]=useState(false);



    const Toggle = () => {
        return (
            setDisplay(!display)
        )
    }

    return (
        <div>
        {flag === 0 ? (
            <div className="header baseContainer webHeader">
                <div className="logo"><Link to={'/'}><img src={skoolzlogo} alt="logo" /></Link></div>
                <div className="headerSearchBar headerSearchBarWeb1">
                    <div className="input-group">
                        <div className="fullSearchBox">
                            <input id="searchText" type="search" autoComplete="nope" className="headerSearchBox"
                                data-content="Type school name or location" placeholder="Enter location & search for nearby Schools & Hobby classes" />
                            <div className="input-group-append search-goup">
                                <div className="location-icon">
                                    <img src="~/skoolz/assets/img/icon/search_location.svg" alt="location" />
                                </div>
                                <Link to={'/home/search'} type="submit" className="search-icon">
                                <FontAwesomeIcon icon={faSearch}  style={{"color":"white"}}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg schoolLoggedInUser">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><a className="nav-link">Dashboard</a></li>
                        <li className="nav-item loggedInButton">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="loggedIcon" src="~/skoolz/assets/img/icon/loggedinUser.svg" /> <span>My Account</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item">Change Password</a>
                                <form>
                                    <button type="submit" className="dropdown-item logoutButton">Logout</button>
                                </form>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>) : flag === 1 ? (
                <div className="header baseContainer webHeader">
                    <div className="logo"><Link to={'/'}><img src={skoolzlogo} alt="logo" /></Link></div>
                    <div className="headerSearchBar headerSearchBarWeb1 searchtextSignedIn">
                        <div className="input-group">
                            <div className="fullSearchBox">
                                <input id="searchText" type="search" className="headerSearchBox"
                                    data-content="Type school name or location" placeholder="Enter school name or location or enable location access " />
                                <div className="input-group-append search-goup">
                                    <div className="location-icon">
                                        <img src="~/skoolz/assets/img/icon/search_location.svg" alt="location" />
                                    </div>
                                    <Link to={'/home/search'} type="submit" className="search-icon">
                                    <FontAwesomeIcon icon={faSearch}  style={{"color":"white"}}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg schoolLoggedOutUser">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><a className="nav-link">Dashboard</a></li>

                            <li className="nav-item loggedInButton">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="loggedIcon" src="~/skoolz/assets/img/icon/loggedinUser.svg" />
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ "marginLeft": "242px", "marginTop": "-8px" }}>
                                    <a className="dropdown-item" >Student Profile</a>
                                    <a className="dropdown-item" >Dashboard</a>
                                    <a className="dropdown-item" >Shortlisted Schools</a>
                                    <a className="dropdown-item" >Change Password</a>
                                    <form>
                                        <button type="submit" className="dropdown-item logoutButton">Logout</button>
                                    </form>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link cart-count">
                                    <img src="~/skoolz/assets/img/icon/shopping-cart.svg" />

                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            ) : (
            <div>
                <div className="header baseContainer webHeader">
                    <div className="logo"><Link to={'/'}><img src={skoolzlogo} alt="logo" /></Link></div>
                    <div className="headerSearchBar headerSearchBarWeb">
                        <div className="input-group">
                            <div className="fullSearchBox">
                                <input id="searchText" type="search" autoComplete="nope" className="headerSearchBox"
                                    data-content="Type school name or location" placeholder="Enter location & search for nearby Schools & Hobby classes" />
                                <div className="input-group-append search-goup">
                                    <div className="location-icon">
                                        <img src="~/skoolz/assets/img/icon/search_location.svg" alt="location" />
                                    </div>
                                    <Link to={'/home/search'} type="submit" className="search-icon" style={{"lineHeight":"37px"}}>
                                    <FontAwesomeIcon icon={faSearch}  style={{"color":"white"}}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg schoolLoggedOutUser">
                        <ul className="navbar-nav mr-auto m-0">
                           
                            <li className="nav-item">
    
                                <a className="nav-link loginButton" target="_blank" href="https://www.partners.skoolz.in/" style={{ "fontSize": "20px" }}>Partner with us</a>
                            </li>

                           
                            <li className="nav-item">
                                <Link to={'/login'} className="nav-link loginButton" style={{ "fontSize": "20px" }}>Parent Login</Link>
                                
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="mobileHeaderSection1 mobileHeader">
                    <div className="logo"><Link to={'/'}><img src={skoolzlogo} alt="logo" /></Link></div>
                    <div className="mobileHeaderMenuButton" data-toggle="collapse" data-target="#navbarSupportedContent" onClick={Toggle}></div>
                    <div className="mobileHeaderProfileButton" >
                        {display && (

                            <div className={`collapse navbar-collapse  ${display && 'show'} `} id="navbarSupportedContent">
                                <div className="menuCloseIcon" data-toggle="collapse" data-target="#navbarSupportedContent" onClick={Toggle}>X</div>
                                <ul className="navbar-nav detailnavigation">
                                    <li className="nav-item">
                                        <a className="nav-link active">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">BLOGS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">PARENT LOGIN</a>
                                    </li>
                                </ul>
                            </div>

                        )}
                    </div>

                    <div className="headerSearchBar">
                        <div className="input-group">
                            <form>
                                <input type="search" className="headerSearchBox" id="mobSearchText" autoComplete="nope"
                                    data-content="Type school name or location" placeholder="Enter school name or location " />
                                <div className="input-group-append search-goup">
                                    <div className="location-icon">
                                        <img src="~/skoolz/assets/img/icon/search_location.svg" alt="location" />
                                    </div>
                                     <Link to={'/home/search'} type="submit" className="search-icon">
                                    <FontAwesomeIcon icon={faSearch}  style={{"color":"white"}}/>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>

    )
}
export default HeaderComponent ;