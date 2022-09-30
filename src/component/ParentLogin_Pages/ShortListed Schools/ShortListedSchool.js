import React, { memo, useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faFilter, faAngleDown, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import FooterComponent from '../../Footer/Footer';
import HeaderComponent from '../../Header/Header';
import blog from '../../../Assets/Images/blog6.jpg';
import { Link } from 'react-router-dom';

import './ShortListedSchool.css'

function ShortListedSchool() {
    const [shortListedSchool, setShortListedSchool] = useState([
        {
            "schoolId": 36,
            "schoolName": "1 The Learning Curve a Preschool in Mumbai, Maharashtra",
            "userIdentity": "a89bc78f-b422-4657-b2d0-f98d8d5591b1",
            "schoolAddress": "The Learning Curve Kamothe 36 sec, Mansarovar, Sector 36, Kamothe, Panvel, Mumbai, Maharashtra\r\n,,Navi Mumbai,Maharashtra,410209",
            "boardOne": "Not Applicable",
            "boardTwo": "NA",
            "boardThree": "NA",
            "schoolClassification": "Co-Ed",
            "schoolType": "1St",
            "annualFees": "₹20,000 - ₹55,000",
            "schoolRating": 0,
            "coverPicturePath": "a89bc78f-b422-4657-b2d0-f98d8d5591b1_CoverPicture.jpg",
            "latitude": 19.02585333,
            "longitude": 73.09024185,
            "preSchoolType": "NA",
            "cityName": "Navi Mumbai",
            "stateName": "Maharashtra",
            "distance": 578.1,
            "schoolBoard": null,
            "transport": "Yes",
            "classes": "Pre-School - KG2",
            "schoolstrength": "0",
            "classstrength": "0",
            "establishmentYear": "2016",
            "smartClasses": "Yes",
            "curricularActivities": "Yes",
            "outdoorSports": "Yes",
            "indoorSports": "Yes"
        },
        {
            "schoolId": 37,
            "schoolName": "2 LITTLE WORLD PLAY SCHOOL & DAY CARE HSR LAYOUT",
            "userIdentity": "a89bc78f-b422-4657-b2d0-f98d8d5591b1",
            "schoolAddress": "The Learning Curve Kamothe 36 sec, Mansarovar, Sector 36, Kamothe, Panvel, Mumbai, Maharashtra\r\n,,Navi Mumbai,Maharashtra,410209",
            "boardOne": "Not Applicable",
            "boardTwo": "NA",
            "boardThree": "NA",
            "schoolClassification": "Co-Ed",
            "schoolType": "2nd",
            "annualFees": "₹20,000 - ₹55,000",
            "schoolRating": 0,
            "coverPicturePath": "a89bc78f-b422-4657-b2d0-f98d8d5591b1_CoverPicture.jpg",
            "latitude": 19.02585333,
            "longitude": 73.09024185,
            "preSchoolType": "NA",
            "cityName": "Navi Mumbai",
            "stateName": "Maharashtra",
            "distance": 578.1,
            "schoolBoard": null,
            "transport": "Yes",
            "classes": "Pre-School - KG2",
            "schoolstrength": "0",
            "classstrength": "0",
            "establishmentYear": "2016",
            "smartClasses": "Yes",
            "curricularActivities": "Yes",
            "outdoorSports": "Yes",
            "indoorSports": "Yes"
        },
        {
            "schoolId": 38,
            "schoolName": "3 LITTLE WORLD PLAY SCHOOL & DAY CARE HSR LAYOUT",
            "userIdentity": "a89bc78f-b422-4657-b2d0-f98d8d5591b1",
            "schoolAddress": "The Learning Curve Kamothe 36 sec, Mansarovar, Sector 36, Kamothe, Panvel, Mumbai, Maharashtra\r\n,,Navi Mumbai,Maharashtra,410209",
            "boardOne": "Not Applicable",
            "boardTwo": "NA",
            "boardThree": "NA",
            "schoolClassification": "Co-Ed",
            "schoolType": "3rd",
            "annualFees": "₹20,000 - ₹55,000",
            "schoolRating": 0,
            "coverPicturePath": "a89bc78f-b422-4657-b2d0-f98d8d5591b1_CoverPicture.jpg",
            "latitude": 19.02585333,
            "longitude": 73.09024185,
            "preSchoolType": "NA",
            "cityName": "Navi Mumbai",
            "stateName": "Maharashtra",
            "distance": 578.1,
            "schoolBoard": null,
            "transport": "Yes",
            "classes": "Pre-School - KG2",
            "schoolstrength": "0",
            "classstrength": "0",
            "establishmentYear": "2016",
            "smartClasses": "Yes",
            "curricularActivities": "Yes",
            "outdoorSports": "Yes",
            "indoorSports": "Yes"
        }, {
            "schoolId": 39,
            "schoolName": "4 LITTLE WORLD PLAY SCHOOL & DAY CARE HSR LAYOUT",
            "userIdentity": "a89bc78f-b422-4657-b2d0-f98d8d5591b1",
            "schoolAddress": "The Learning Curve Kamothe 36 sec, Mansarovar, Sector 36, Kamothe, Panvel, Mumbai, Maharashtra\r\n,,Navi Mumbai,Maharashtra,410209",
            "boardOne": "Not Applicable",
            "boardTwo": "NA",
            "boardThree": "NA",
            "schoolClassification": "Co-Ed",
            "schoolType": "4Th",
            "annualFees": "₹20,000 - ₹55,000",
            "schoolRating": 0,
            "coverPicturePath": "a89bc78f-b422-4657-b2d0-f98d8d5591b1_CoverPicture.jpg",
            "latitude": 19.02585333,
            "longitude": 73.09024185,
            "preSchoolType": "NA",
            "cityName": "Navi Mumbai",
            "stateName": "Maharashtra",
            "distance": 578.1,
            "schoolBoard": null,
            "transport": "Yes",
            "classes": "Pre-School - KG2",
            "schoolstrength": "0",
            "classstrength": "0",
            "establishmentYear": "2016",
            "smartClasses": "Yes",
            "curricularActivities": "Yes",
            "outdoorSports": "Yes",
            "indoorSports": "Yes"
        }
    ]);
    const [compairSchool, setCompairSchool] = useState([]);
    const [footerdisplay, setFooterDisplay] = useState(false);
    const [cartList,setCartList]=useState([]);

    const ToogleFooterDispaly = () => {
        setFooterDisplay(!footerdisplay)
    }
    const compairSchoolFun = (id) => {
        let checked = shortListedSchool.find((val) => val.schoolId == id);
        compairSchool.push(checked);
        let updated = [...compairSchool];
        setCompairSchool(updated);
    }
    const deletingItem =(id)=>{
        let updatedObjects = compairSchool.filter((ele)=>ele.schoolId !== id);
        setCompairSchool(updatedObjects);
    }
    const addingCart=(id)=>{
        let checked =shortListedSchool.find((val)=>val.schoolId == id);
        cartList.push(checked);
        let updated=[...cartList];
        setCartList(updated)
    }
    useEffect(()=>{
        if (compairSchool.length){
            setFooterDisplay(true)
        }
    },[compairSchool])
    return (
        <div>
            <HeaderComponent />
            <div className='shortListContainer baseContainer'>
                <div className='row justify-content-md-center'>
                    <div className='col-lg-8 '>
                        <div className='heilghtText'>{shortListedSchool.length}&nbsp;Shorlisted Schools</div>
                        {shortListedSchool.map((ele, index) => (
                            <div className='card shortlistedSchoolCard m-2' key={index}>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-12 col-sm-12'>
                                        <div className='Imgcontainer'>
                                            <img className='img-fluid' src={blog} />
                                        </div>
                                    </div>
                                    <div className='col-lg-8 col-md-12 col-sm-12'>
                                        <div className='schoolName'>{ele.schoolName}</div>
                                        <div className='schoolAddress'>{ele.schoolAddress}</div>
                                        <div className='row'>
                                            <div className='col-6 col-lg-3'>
                                                <span><FontAwesomeIcon icon={faStar} style={{ "color": "#FA802E", "fontSize": "20px" }} /></span>&nbsp;0
                                                <div className='helightText'>
                                                    Reviews
                                                </div>
                                            </div>
                                            <div className='col-6 col-lg-3'>
                                                <div className='mainText'>{ele.boardTwo}</div>
                                                <div className='helightText'>
                                                    School Board
                                                </div>
                                            </div>
                                            <div className='col-6 col-lg-3'>
                                                <div className='mainText'>{ele.schoolClassification}</div>
                                                <div className='helightText'>
                                                    Gender Classification
                                                </div>
                                            </div>
                                            <div className='col-6 col-lg-3'>
                                                <div className='mainText'>{ele.annualFees}</div>
                                                <div className='helightText'>
                                                    Annual Fees
                                                </div>
                                            </div>
                                        </div>
                                        <div className='btnGroup'>
                                            <a className='compareBtn mx-3' style={{ "color": " #35a84f" }} onClick={() => compairSchoolFun(ele.schoolId)}>+Compare</a>
                                            <button className='bookAppBtn'>Book Appointment</button>
                                            <button className='applyBtn'onClick={()=>addingCart(ele.schoolId)}>Apply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {footerdisplay &&
                <div className={`footerModel baseContainer ${footerdisplay ? 'active' : ''}`}>
                    <div className="footerTop pt-2 pb-1">
                        Compare School
                    </div>
                    <div className="closeFooter">
                        <FontAwesomeIcon icon={faAngleDown} onClick={ToogleFooterDispaly} />
                    </div>
                    <div className="footerBody">
                            <div className="row">
                                <div className="col-9">
                                    <div className="row">
                                        {compairSchool.length &&
                                            compairSchool.map((ele, index) => (
                                                <div key={index} className="col-4">
                                                    <div className="card footerSchoolCard">
                                                        <div className="row">
                                                            <div className="col-2"></div>
                                                            <div className="col-8">{ele.schoolName}</div>
                                                            <div className="col-2 d-flex align-items-center"><FontAwesomeIcon icon={faTrashCan} style={{ "color": "red" }} onClick={()=>deletingItem(ele.schoolId)}/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div><Link to="/home/compare" state={{from:compairSchool}}><button className="compairBtn">Compare</button></Link></div>
                                </div>
                            </div>
                        </div>
                </div>
            }
            <FooterComponent />
        </div>
    )
}
export default memo(ShortListedSchool);
