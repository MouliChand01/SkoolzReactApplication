import React, { useState, useEffect, memo } from "react";
import skoolzlogo from "../../Assets/Images/skoolz.PNG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import {geocodeByAddress,geocodeByPlaceId,getLatLng} from 'react-places-autocomplete';
import PlacesAutocomplete from 'react-places-autocomplete';
import google from '../../Assets/Images/googleimage.png'
import "./Header.css"

const HeaderComponent = (props) => {

    const clientId = "280716774713-ln7m28uobck7kbmpkd5do2h4ci2ipj5j.apps.googleusercontent.com";
    const [flag, setFlag] = useState("");
    const [addcount, setAddCount] = useState(0);
    const [display, setDisplay] = useState(false);
    const [email, setEmail] = useState('');
    const [address,setAddress]=useState("");
    const [corodinates,setCorodinates]=useState({
        lat: 12.925317,
        lng: 77.6166666
    });

    const handleSelect =async value =>{
        const results = await geocodeByAddress(value);
        const data= await getLatLng(results[0])
        console.log(data);
        setAddress(value);
        setCorodinates(data)
    };

    useEffect(() => {
        let data = localStorage.getItem('email');
        setEmail(data)
    });

    const Toggle = () => {
        return (
            setDisplay(!display)
        )
    };

    const onLogoutSuccess = (res) => {
        console.log("logout Sucess !!!")
        setEmail('')
        localStorage.clear()

    };

    const searchLocation =()=>{
        console.log(corodinates)
    };

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
                                        <FontAwesomeIcon icon={faSearch} style={{ "color": "white" }} />
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
                </div>) : email ? (
                    <div className="header baseContainer webHeader d-flex align-item-center">
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
                                        <Link to={'/home/search'} type="submit" className="search-icon" style={{"lineHeight":"36px"}}>
                                            <FontAwesomeIcon icon={faSearch} style={{ "color": "white" }} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hearderRight d-flex align-items-center">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span><i className="bi bi-person-circle fa-lg" style={{ "color": "green" }}></i></span>&nbsp;&nbsp;&nbsp;
                                    {email}
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><Link to="/parent/profile"><a class="dropdown-item">Student Profile</a></Link></li>
                                    <li><Link to="/parent/dashboard"><a class="dropdown-item">Dashboard</a></Link></li>
                                    <li><Link to="/parent/shortlist-schools"><a class="dropdown-item">Shortlisted Schools</a></Link></li>
                                    <li><Link to="/parent/receive-updates"><a class="dropdown-item">Recive Updates</a></Link></li>
                                    <li><Link to="/parent/changepassword"><a class="dropdown-item">Change Password</a></Link></li>
                                    <li class="dropdown-item logout"><GoogleLogout
                                        clientId={clientId}
                                        buttonText="Logout"
                                        onLogoutSuccess={onLogoutSuccess} /></li>
                                </ul>
                            </div>
                            <div className="cart d-flex align-item-center">
                               <Link to="/student/cart"> <i class="bi bi-cart2" style={{"color":"black"}}/></Link>
                                <span>{addcount}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                <div>
                    <div className="header baseContainer webHeader">
                        <div className="logo"><Link to={'/'}><img src={skoolzlogo} alt="logo" /></Link></div>
                        <div className="headerSearchBar headerSearchBarWeb">
                            <div className="input-group">
                                <div className="fullSearchBox">
                                    <PlacesAutocomplete
                                        value={address}
                                        onChange={setAddress}
                                        onSelect={handleSelect}
                                    >
                                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                            <div>
                                                <input type="search"
                                                    {...getInputProps({
                                                        placeholder: 'Enter location & search for nearby Schools & Hobby classes',
                                                        className: 'location-search-input',
                                                    })}
                                                />
                                                <div className="autocomplete-dropdown-container">
                                                    {loading && <div>Loading...</div>}
                                                    {suggestions.map(suggestion => {
                                                        const className = suggestion.active
                                                            ? 'suggestion-item--active'
                                                            : 'suggestion-item';
                                                        // inline style for demonstration purpose
                                                        const style = suggestion.active
                                                            ? { backgroundColor: '#F2F2F2', cursor: 'pointer' }
                                                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                        return (
                                                            <div
                                                                {...getSuggestionItemProps(suggestion, {
                                                                    className,
                                                                    style,
                                                                })}
                                                            >
                                                                <span><i class="bi bi-geo-alt-fill"></i>&nbsp;{suggestion.description}</span>

                                                            </div>
                                                        );

                                                    })}
                                                    {/* {suggestions.length && <div className='googleIcon ms-auto'><img src={google} /></div>} */}

                                                </div>
                                            </div>
                                        )}
                                    </PlacesAutocomplete>
                                    <div className="input-group-append search-goup">
                                        <Link to={'/home/search'} type="submit" className="search-icon" style={{ "lineHeight": "37px" }}>
                                            <FontAwesomeIcon icon={faSearch} style={{ "color": "white" }} onClick={searchLocation} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg schoolLoggedOutUser">
                            <ul className="navbar-nav mr-auto m-0">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link loginButton" style={{ "fontSize": "20px", "font-weight": "500" }}>Partner with us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link loginButton" style={{ "fontSize": "20px", "font-weight": "500" }} onClick={() => props.seingGoogle()}>Parent Login</Link>
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
                                            <FontAwesomeIcon icon={faSearch} style={{ "color": "white" }} />
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
export default memo(HeaderComponent);