import React, { useState } from "react";
import skoolslogo from "../../../Assets/Images/skoolz.PNG"
import "./CardComponent.css"

const CardFilter = () => {
    const [schoolData, setSchoolData] = useState([
        {
            id: 0,
            schoolname: "DEEKSHA PLAY SCHOOL",
            Image: 'skoolslogo',
            address: "Plot No., 107, Lalitha Nagar, Adikmet, Hyderabad,Telangana,,Hyderabad,Telangana,500044",
            section: "Montessori",
            type: "Pre-School Type"
        },
        {
            id: 1,
            schoolname: "BACHPAN PLAY SCHOOL",
            Image: 'skoolslogo',
            address: "Plot No., 108, Lalitha Nagar, Adikmet, Hyderabad,Telangana,,Hyderabad,Telangana,500045",
            section: "Montessori",
            type: "Pre-School Type"
        },
        {
            id: 2,
            schoolname: "SMART KIDZ",
            Image: 'skoolslogo',
            address: "Plot No., 109, Lalitha Nagar, Adikmet, Hyderabad,Telangana,,Hyderabad,Telangana,500046",
            section: "Montessori",
            type: "Pre-School Type"
        },
        {
            id: 3,
            schoolname: "ACADEMIC PLAY SCHOOL",
            Image: 'skoolslogo',
            address: "Plot No., 110, Lalitha Nagar, Adikmet, Hyderabad,Telangana,,Hyderabad,Telangana,500047",
            section: "Montessori",
            type: "Pre-School Type"
        },
        {
            id: 4,
            schoolname: "BACHPAN PLAY SCHOOL",
            Image: 'skoolslogo',
            address: "Plot No., 108, Lalitha Nagar, Adikmet, Hyderabad,Telangana,,Hyderabad,Telangana,500045",
            section: "Montessori",
            type: "Pre-School Type"
        },
        {
            id: 5,
            schoolname: "SMART KIDZ",
            Image: 'skoolslogo',
            address: "Plot No., 109, Lalitha Nagar, Adikmet, Hyderabad,Telangana,,Hyderabad,Telangana,500046",
            section: "Montessori",
            type: "Pre-School Type"
        },
        {
            id: 6,
            schoolname: "ACADEMIC PLAY SCHOOL",
            Image: 'skoolslogo',
            address: "Plot No., 110, Lalitha Nagar, Adikmet, Hyderabad,Telangana,,Hyderabad,Telangana,500047",
            section: "Montessori",
            type: "Pre-School Type"
        },
        {
            id: 7,
            schoolname: "BACHPAN PLAY SCHOOL",
            Image: 'skoolslogo',
            address: "Plot No., 108, Lalitha Nagar, Adikmet, Hyderabad,Telangana,,Hyderabad,Telangana,500045",
            section: "Montessori",
            type: "Pre-School Type"
        },
        {
            id: 8,
            schoolname: "SMART KIDZ",
            Image: 'skoolslogo',
            address: "Plot No., 109, Lalitha Nagar, Adikmet, Hyderabad,Telangana,,Hyderabad,Telangana,500046",
            section: "Montessori",
            type: "Pre-School Type"
        },
        {
            id: 9,
            schoolname: "ACADEMIC PLAY SCHOOL",
            Image: 'skoolslogo',
            address: "Plot No., 110, Lalitha Nagar, Adikmet, Hyderabad,Telangana,,Hyderabad,Telangana,500047",
            section: "Montessori",
            type: "Pre-School Type"
        }
    ])
    return (
        <div>
            <div className='container cardFilter'>
                <div className='row mb-3'>
                    <div className='col-12 col-md-12 col-lg-9 buttons'>
                        <button className='btn-selected button col-lg-1'>Schools</button>
                        <button className='buttonHobby'>Hobby classes</button>
                        <button className='buttonTuition'>Tuitions</button>
                    </div>

                </div>
                {schoolData && schoolData.map((data) => {
                    return <div className='mb-2'>
                        <div className='cardFilterData'>
                            <div className='card cardGroup'>
                                <div className='card-body p-2'>
                                    <div className="row">
                                        <div className="col-lg-4 d-flex align-items-center">
                                            <img className="img-fluid px-2" src={skoolslogo} />
                                        </div>
                                        <div className="col-lg-8">
                                            <div className='schoolDetails mt-2 mb-2'>
                                                <h5>{data.schoolname}</h5>
                                                <h6>{data.address}</h6>
                                                <div className='row'>
                                                    <div className='col-6 col-lg-4  starIcon'>
                                                        Montessori
                                                        <br />
                                                        <span style={{ "color": "black" }}>Pre-School Type</span>
                                                    </div>
                                                    <div className='col-6 col-lg-4 starIcon'>
                                                        Co-Ed
                                                        <br />
                                                        <span style={{ "color": "black" }}>Pre-School Type</span>
                                                    </div>
                                                    <div className='col-6 col-lg-4 starIcon1'>
                                                        Rs.
                                                        <br />
                                                        <span style={{ "color": "black" }}>Pre-School Type</span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='btnGroup'>
                                                <a className='compareBtn mx-3'>+Compare</a>
                                                <button className='applyBtn'>Book Appointment</button>
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

export default CardFilter;