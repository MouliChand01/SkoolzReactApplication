import React, { useState, memo, useEffect } from "react";
import school1 from "../../../Assets/Images/school_CoverPicture2.png";
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faUser, faClock, faXmarkSquare, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import SearchData from "../../../Assets/searchSchool.json";
import Swal from 'sweetalert2';
import "./CardComponent.css";

const CardFilter = (props) => {
    const [schoolData, setSchoolData] = useState(SearchData);
    // const [schoolData, setSchoolData] = useState(props.state.schoolData);

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
    const [compairSchool, setCompairSchool] = useState([]);
    const [shortlistedSchools, setShortlistedSchools] = useState([]);

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
 
    const comapairSchoolFun = (id) => {
        if (compairSchool.length <= 2) {
           let seletingSchool = schoolData.find((ele) => ele.schoolId === id);
           let uniqueschool = compairSchool && compairSchool.find((ele)=>ele.schoolId === seletingSchool.schoolId)
           if( uniqueschool === undefined){
            compairSchool.push(seletingSchool);
            let selectedObject = [...compairSchool]
            setCompairSchool(selectedObject);
            props.comapredObject(selectedObject)  /* this is help to send object card component to school searchcomponent*/
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

    const shortListedschoolsFun = (id) => {
        let seletingSchool = schoolData.find((ele) => ele.schoolId === id);
        shortlistedSchools.push(seletingSchool);
        let selectedObject = [...shortlistedSchools];
        setShortlistedSchools(selectedObject)  /* this is to store locally in shortlisted scholls but we need api for that we just send sample purpose*/
    }

    useEffect(()=>{
        compairSchool.splice(props.deletingaitem,1)
        setCompairSchool(compairSchool)
    },[props.deletingaitem])

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
{/* ####################################################################
    ## above one Model pop up bookappoinment bellow one cards filters ##
    #################################################################### */}
            <div className='container cardFilter'>
                {console.log(props.sendingselectedNames)}
                <div className='row mb-3'>
                    <div className='col-12 col-md-12 col-lg-9 buttons'>
                        <button className='btn-selected button col-lg-1'>Schools</button>
                        <button className='buttonHobby'>Hobby classes</button>
                        <button className='buttonTuition'>Tuitions</button>
                    </div>
                </div>
                {schoolData && schoolData.map((data) => {
                    return <div key={data.schoolId} className='mb-2'>
                        <div className='cardFilterData'>
                            <div className='card cardGroup'>
                                <div className='card-body p-2'>
                                    <div className="row">
                                        <div className="col-lg-4 leftContainer">
                                            <div className="imageIcons d-flex p-2">
                                                <div className="addAhortList me-auto">
                                                    <i class="bi bi-heart-fill" onClick={() => shortListedschoolsFun(data.schoolId)} />
                                                </div>
                                                <div className="addNearLoc me-2">
                                                    <button className="btn"><FontAwesomeIcon icon={faLocationDot} />0.2Km</button>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <img className="img-fluid px-2" src={school1} />
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className='schoolDetails mt-2 mb-2'>
                                                <h5>{data.schoolName}</h5>
                                                <div className="schoolAddress my-3">{data.schoolAddress}</div>
                                                <div className='row'>
                                                    <div className='col-6 col-lg-4  starIcon'>
                                                        {data.schoolType}
                                                        <br />
                                                        <span style={{ "color": "black" }}>Pre-School Type</span>
                                                    </div>
                                                    <div className='col-6 col-lg-4 starIcon'>
                                                        {data.schoolClassification}
                                                        <br />
                                                        <span style={{ "color": "black" }}>School Classification</span>
                                                    </div>
                                                    <div className='col-6 col-lg-4 starIcon'>
                                                        {data.annualFees}
                                                        <br />
                                                        <span style={{ "color": "black" }}>Annual Fees</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='btnGroup'>
                                                <a className='compareBtn mx-3' style={{ "color": " #35a84f" }} onClick={() => comapairSchoolFun(data.schoolId)}>+Compare</a>
                                                <button className='applyBtn' onClick={handleShow}>Book Appointment</button>
                                                <button className='callmeBtn1 BB'>CALL</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default memo(CardFilter);