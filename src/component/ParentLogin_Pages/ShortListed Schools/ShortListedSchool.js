import React, { memo, useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faAngleDown, faTrashCan, faXmarkSquare, faCalendar, faEnvelope, faUser, faClock } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import FooterComponent from '../../Footer/Footer';
import HeaderComponent from '../../Header/Header';
import blog from '../../../Assets/Images/blog6.jpg';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
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
    const [cartList, setCartList] = useState([]);
    const [show, setShow] = useState(false);
    const [parentNameField, setparentNameField] = useState(true);
    const [emailField, setemailField] = useState(true);
    const [dateField, setDateField] = useState(true);
    const [timeField, setTimeField] = useState(true);
    const [mobileField, setMobileField] = useState(true);
    const [otpField, setOtpField] = useState(true);
    const [meetingField, setMeetingField] = useState(true);
    const [parentName, setParentName] = useState("");
    const [parentEmail, setParentEmail] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [timeSelected, setTimeSelected] = useState("");
    const [parentMobile, setParentMobile] = useState();
    const [enterotp, setEnterotp] = useState();
    const [meetingMode, setMeetingMode] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handelSubmit = () => {
        if (!parentName) {
            setparentNameField(false)
        }
        if (!parentEmail) {
            setemailField(false)
        }
        if (!selectedDate) {
            setDateField(false)
        }
        if (!timeSelected) {
            setTimeField(false)
        }
        if (!parentMobile) {
            setMobileField(false)
        }
        if (!enterotp) {
            setOtpField(false)
        }
        if (!meetingMode) {
            setMeetingField(false)
        }
    }
    const seletedinput = (name, e) => {
        ;
        if (name === 'parentname') {
            setparentNameField(true);
            setParentName(e.target.value)
        }
        if (name === 'parentmail') {
            setemailField(true);
            setParentEmail(e.target.value)
        }
        if (name === 'parentmail') {
            setemailField(true);
            setParentEmail(e.target.value)
        }
        if (name === 'date') {
            setDateField(true);
            setSelectedDate(e.target.value)
        }
        if (name === 'time') {
            setTimeField(true);
            setTimeSelected(e.target.value)
        }
        if (name === 'Mobilenumber') {
            setMobileField(true);
            setParentMobile(e.target.value)
        }
        if (name === 'otp') {
            setOtpField(true);
            setEnterotp(e.target.value)
        }
        if (name === 'meetingMode') {
            setMeetingField(true);
            setMeetingMode(e.target.value)
        }
    }

    const ToogleFooterDispaly = () => {
        setFooterDisplay(!footerdisplay)
    }
    const compairSchoolFun = (id) => {
        if (compairSchool.length <= 2) {
            let selectedSchool = shortListedSchool.find((val) => val.schoolId == id);
            let uniqueschool = compairSchool && compairSchool.find((ele) => ele.schoolId === selectedSchool.schoolId)
            if (uniqueschool === undefined) {
                compairSchool.push(selectedSchool);
                let updated = [...compairSchool];
                setCompairSchool(updated);
            }
            else{
                Swal.fire({
                    title:'Error!',
                    text:'Looks like you have already added school in compare list!',
                    type:'error',
                    confirmButtonColor:'#34a853',
                })
            }

        }
        else{
            Swal.fire("You are running out of limit !!", "Are you sure want to compare the schools ?  delete a school from the list ", "question");
        }
    }
    const deletingItem = (id) => {
        let updatedObjects = compairSchool.filter((ele) => ele.schoolId !== id);
        setCompairSchool(updatedObjects);
    }
    const addingCart = (id) => {
        let checked = shortListedSchool.find((val) => val.schoolId == id);
        cartList.push(checked);
        let updated = [...cartList];
        setCartList(updated)
    }
    useEffect(() => {
        if (compairSchool.length) {
            setFooterDisplay(true)
        }
    }, [compairSchool])
    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="Bookapp">
                <Modal.Header>
                    <div className="closeBtn"><a onClick={handleClose}><FontAwesomeIcon icon={faXmarkSquare} className="fa-xl" /></a></div>
                    <div className="cardLogo d-flex"><FontAwesomeIcon className="fa-2xl" icon={faCalendar} /></div>
                    <Modal.Title>Book Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="px-2">
                            <div class="input-group flex-nowrap my-4">
                                <span class="input-group-text" style={{ "backgroundColor": "rgb(235, 234, 234)", "border": "none" }} ><FontAwesomeIcon icon={faUser} /></span>
                                <input type="text" class="form-control" placeholder="Parent Full Name" onChange={(evant) => seletedinput('parentname', event)} />
                            </div>
                            {!parentNameField ? (<p className="errorMsg">Please enter name</p>) : ""}
                            <div class="input-group flex-nowrap my-4">
                                <span class="input-group-text" style={{ "backgroundColor": "rgb(235, 234, 234)", "border": "none" }} ><FontAwesomeIcon icon={faEnvelope} /></span>
                                <input type="email" class="form-control" placeholder="Email" onChange={(evant) => seletedinput('parentmail', event)} />
                            </div>
                            {!emailField ? (<p className="errorMsg">Please enter valid email</p>) : ""}
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 col-md-12">
                                    <div class="input-group flex-nowrap my-4">
                                        <span class="input-group-text" style={{ "backgroundColor": "rgb(235, 234, 234)", "border": "none" }} ><FontAwesomeIcon icon={faClock} /></span>
                                        <input type="date" class="form-control" onChange={(evant) => seletedinput('date', event)} />
                                    </div>
                                    {!dateField ? (<p className="errorMsg">Enter proper date</p>) : ""}
                                </div>

                                <div className="col-lg-6 col-sm-12 col-md-12">
                                    <div class="input-group flex-nowrap my-4">
                                        <select name="cars" id="cars" style={{ "width": "100%", "height": "39px", "border": "none" }} onChange={(evant) => seletedinput('time', event)}>
                                            <option disabled selected>Select Time</option>
                                            <option value="9:00 AM - 9:30 AM">9:00 AM - 9:30 AM</option>
                                            <option value="9:30 AM - 10:00 AM">9:30 AM - 10:00 AM</option>
                                            <option value="10:00 AM - 10:30 AM">10:00 AM - 10:30 AM</option>
                                            <option value="10:30 AM - 11:00 AM">10:30 AM - 11:00 AM</option>
                                            <option value="11:00 AM - 11:30 AM">11:00 AM - 11:30 AM</option>
                                            <option value="11:30 AM - 12:00 PM">11:30 AM - 12:00 PM</option>
                                            <option value="12:00 PM - 12:30 PM">12:00 PM - 12:30 PM</option>
                                            <option value="12:30 PM - 1:00 PM">12:30 PM - 1:00 PM</option>
                                            <option value="1:00 PM - 1:30 PM">1:00 PM - 1:30 PM</option>
                                            <option value="1:30 PM - 2:00 PM">1:30 PM - 2:00 PM</option>
                                            <option value="2:00 PM - 2:30 PM">2:00 PM - 2:30 PM</option>
                                            <option value="2:30 PM - 3:00 PM">2:30 PM - 3:00 PM</option>
                                            <option value="3:00 PM - 3:30 PM">3:00 PM - 3:30 PM</option>
                                            <option value="3:30 PM - 4:00 PM">3:30 PM - 4:00 PM</option>
                                            <option value="4:00 PM - 4:30 PM">4:00 PM - 4:30 PM</option>
                                            <option value="4:30 PM - 5:00 PM">4:30 PM - 5:00 PM</option>
                                        </select>
                                    </div>
                                    {!timeField ? (<p className="errorMsg">Select atleast one time slot</p>) : ""}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 col-md-12">
                                    <div class="input-group flex-nowrap my-4">
                                        <span class="input-group-text" style={{ "backgroundColor": "#FFFFFF", "border": "none" }} >+ 91 </span>
                                        <input type="tel" class="form-control" placeholder="Mobile Number" maxLength={10} onChange={(evant) => seletedinput('Mobilenumber', event)} />
                                    </div>
                                    {!mobileField ? (<p className="errorMsg">Please enter phone number</p>) : ""}
                                </div>
                                <div className="col-md-3  col-6 mt-3">
                                    <button className="otpBtn">Get OTP</button>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div class="input-group flex-nowrap my-4">
                                        <input type="tel" class="form-control" placeholder="OTP" maxLength={4} onChange={(evant) => seletedinput('otp', event)} />
                                    </div>
                                    {!otpField ? (<p className="errorMsg">Please enter OTP</p>) : ""}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 col-md-12">
                                    <div class="input-group flex-nowrap my-4">
                                        <select name="meetingMode" id="meetingMode" style={{ "width": "100%", "height": "39px", "border": "none" }} onChange={(evant) => seletedinput('meetingMode', event)}>
                                            <option disabled selected>Select Meeting Mode</option>
                                            <option value="Meeting Meet">Meeting Meet</option>
                                            <option value="Virtual Meet">Virtual Meet</option>
                                            <option value="Physical Meet">Physical Meet</option>
                                            <option value="Get call back">Get call back</option>
                                        </select>
                                    </div>
                                    {!meetingField ? (<p className="errorMsg">Select appointment type</p>) : ""}
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="submitBtn m-auto" onClick={handelSubmit}>Submit</button>
                </Modal.Footer>
            </Modal>
            <HeaderComponent />
            <div className='shortListContainer baseContainer'>
                <div className='row justify-content-md-center'>
                    <div className='col-lg-10'>
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
                                            <div className='col-6 col-lg-2'>
                                                <span><FontAwesomeIcon icon={faStar} style={{ "color": "#FA802E", "fontSize": "20px" }} /></span>&nbsp;0
                                                <div className='helightText'>
                                                    Reviews
                                                </div>
                                            </div>
                                            <div className='col-6 col-lg-2'>
                                                <div className='mainText'>{ele.boardTwo}</div>
                                                <div className='helightText'>
                                                    School Board
                                                </div>
                                            </div>
                                            <div className='col-6 col-lg-4'>
                                                <div className='mainText'>{ele.schoolClassification}</div>
                                                <div className='helightText'>
                                                    Gender Classification
                                                </div>
                                            </div>
                                            <div className='col-6 col-lg-4'>
                                                <div className='mainText'>{ele.annualFees}</div>
                                                <div className='helightText'>
                                                    Annual Fees
                                                </div>
                                            </div>
                                        </div>
                                        <div className='btnGroup px-2 mb-2'>
                                            <a className='compareBtn mx-3' style={{ "color": " #35a84f" }} onClick={() => compairSchoolFun(ele.schoolId)}>+Compare</a>
                                            <button className='applyBtn bookAppBtn' onClick={handleShow}>Book Appointment</button>
                                            <button className='applyBtn ms-2' onClick={() => addingCart(ele.schoolId)}>Apply</button>
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
                                                        <div className="col-2 d-flex align-items-center"><FontAwesomeIcon icon={faTrashCan} style={{ "color": "red" }} onClick={() => deletingItem(ele.schoolId)} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                            <div className="col-3">
                                <div><Link to="/home/compare" state={{ from: compairSchool }}><button className="compairBtn">Compare</button></Link></div>
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
