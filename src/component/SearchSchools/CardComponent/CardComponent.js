import React,{useState} from "react";
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
        }
    ])
    return (
        <div>
            <div className='container cardFilter'>
                <div className='row'>
                    <div className='col-12 col-md-12 col-lg-9 buttons'>
                        <button className='btn-selected button col-lg-1'>Schools</button>
                        <button className='buttonHobby'>Hobby classes</button>
                        <button className='buttonTuition'>Tuitions</button>
                    </div>

                </div>
                {schoolData && schoolData.map((data) => {
                    return <div className='row'>
                        <div className='col-8 cardFilterData'>
                            <div className='card' style={{ "marginTop": "80px", "marginLeft": "300px", "height": "275px", "width": "990px" }}>
                                <div className='card-body'>
                                    <img src={skoolslogo} style={{ "height": "274px", "width": "424px", "float": "left" }} />
                                    <div className='schoolDetails'>
                                        {/* <h5>DEEKSHA PLAY SCHOOL</h5> */}
                                        <h5>{data.schoolname}</h5>
                                        {/* <h6 >Plot No., 107, Lalitha Nagar, Adikmet, Hyderabad,<br /> Telangana,,Hyderabad,Telangana,500044</h6> */}
                                        <h6>{data.address}</h6>
                                        <div className='row'>
                                            <div className='col-6 col-md-4 starIcon'>
                                                "Montessori"
                                                <br />
                                                <span style={{ "color": "black" }}>Pre-School Type</span>
                                            </div>
                                            <div className='col-6 col-md-4 starIcon'>
                                                "Montessori"
                                                <br />
                                                <span style={{ "color": "black" }}>Pre-School Type</span>
                                            </div>
                                            <div className='col-6 col-md-4 starIcon1'>
                                                "Montessori"
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
                })
                }
            </div>
        </div>
    )
}

export default CardFilter;