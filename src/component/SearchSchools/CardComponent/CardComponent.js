import React, { useState } from "react";
import skoolslogo from "../../../Assets/Images/skoolz.PNG"
import school1 from "../../../Assets/Images/school_CoverPicture2.png"
import SearchData from "../../../Assets/searchSchool.json"
import "./CardComponent.css"

const CardFilter = () => {
    const [schoolData, setSchoolData] = useState(SearchData)
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
                                            <img className="img-fluid px-2" src={school1} />
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
                                                <a className='compareBtn mx-3' style={{"color":" #35a84f"}}>+Compare</a>
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