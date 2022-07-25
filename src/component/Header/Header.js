import React, { useState } from "react";
import "./Header.css"
import skoolzlogo from "../../Assets/Images/skoolz.PNG"

const Header = ()=>{
    const [flag, setFlag] = useState("")

    const Toggle = () => {
        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="menuCloseIcon" data-toggle="collapse">X</div>
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
        )
    }

    return (
        <div>
            {flag === 0 ? (
                <div className="header baseContainer webHeader">
                    <div className="logo"><a><img src={skoolzlogo} alt="logo" /></a></div>
                    <div className="headerSearchBar headerSearchBarWeb1">
                        <div className="input-group">
                            <div className="fullSearchBox">
                                <input id="searchText" type="search" autoComplete="nope" className="form-control headerSearchBox"
                                    data-content="Type school name or location" placeholder="Enter location & search for nearby Schools & Hobby classes" />
                                <div className="input-group-append search-goup">
                                    <div className="location-icon">
                                        <img src="~/skoolz/assets/img/icon/search_location.svg" alt="location" />
                                    </div>
                                    <button type="submit" className="search-icon">
                                        <img src="~/skoolz/assets/img/icon/search.svg" alt="search" />
                                    </button>
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
                        <div className="logo"><a><img src={skoolzlogo} alt="logo" /></a></div>
                        <div className="headerSearchBar headerSearchBarWeb1 searchtextSignedIn">
                            <div className="input-group">
                                <div className="fullSearchBox">
                                    <input id="searchText" type="search" className="form-control headerSearchBox"
                                        data-content="Type school name or location" placeholder="Enter school name or location or enable location access " />
                                    <div className="input-group-append search-goup">
                                        <div className="location-icon">
                                            <img src="~/skoolz/assets/img/icon/search_location.svg" alt="location" />
                                        </div>
                                        <button type="submit" className="search-icon">
                                            <img src="~/skoolz/assets/img/icon/search.svg" alt="search" />
                                        </button>
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
                        <div className="logo"><a><img src={skoolzlogo} alt="logo" /></a></div>
                        <div className="headerSearchBar headerSearchBarWeb">
                            <div className="input-group">
                                <div className="fullSearchBox">
                                    <input id="searchText" type="search" autoComplete="nope" className="form-control headerSearchBox"
                                        data-content="Type school name or location" placeholder="Enter location & search for nearby Schools & Hobby classes" />
                                    <div className="input-group-append search-goup">
                                        <div className="location-icon">
                                            <img src="~/skoolz/assets/img/icon/search_location.svg" alt="location" />
                                        </div>
                                        <button type="submit" className="search-icon">
                                            <img src="~/skoolz/assets/img/icon/search.svg" alt="search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg schoolLoggedOutUser">
                            <ul className="navbar-nav mr-auto">
                                {/* <li className="nav-item"><a className="nav-link">Partner with us</a></li> */}
                                <li className="nav-item">
                                    {/* <a className="nav-link loginButton" >Partner with us</a>
                                <a className="nav-link loginButton" data-toggle="modal" data-target="#LoginTypeModal" href="javascript:void(0)">Login</a> */}
                                    <a className="nav-link loginButton" target="_blank" href="https://www.partners.skoolz.in/" style={{ "fontSize": "20px" }}>Partner with us</a>
                                </li>
                                {/* <li className="nav-item blogsButton loggedInButton">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Blogs
                                </a>
                                <div className="dropdown-menu blogsButton_dropdown_menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" >General</a>
                                    <a className="dropdown-item" >Kids</a>
                                </div>
                            </li> */}

                                {/* <li className="nav-item"><a className="nav-link">Blogs</a></li> */}
                                <li className="nav-item">
                                    <a className="nav-link loginButton" style={{ "fontSize": "20px" }}>Parent Login</a>
                                    {/* <a className="nav-link loginButton" data-toggle="modal" data-target="#LoginTypeModal" href="javascript:void(0)">Login</a> */}
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="mobileHeaderSection1 mobileHeader">
                        <div className="logo"><a><img src={skoolzlogo} alt="logo" /></a></div>
                        <div className="mobileHeaderMenuButton"></div>
                        <div className="mobileHeaderProfileButton"><i className="fa fa-bars" aria-hidden="false" style={{
                            "color": "black", "fontSize": "40px",
                            "marginTop": "16px",
                            "marginLeft": "28px"
                        }} onClick={Toggle}></i>
                        </div>
                        <div className="headerSearchBar">
                            <div className="input-group">
                                <form>
                                    <input type="search" className="form-control headerSearchBox" id="mobSearchText" autoComplete="nope"
                                        data-content="Type school name or location" placeholder="Enter school name or location " />
                                    <div className="input-group-append search-goup">
                                        <div className="location-icon">
                                            <img src="~/skoolz/assets/img/icon/search_location.svg" alt="location" />
                                        </div>
                                        <button type="submit" className="search-icon">
                                            <img src="~/skoolz/assets/img/icon/search.svg" alt="search" />
                                        </button>
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
export default Header ;