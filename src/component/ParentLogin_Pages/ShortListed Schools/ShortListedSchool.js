import React,{memo}from 'react';
import { useState } from 'react';
import FooterComponent from '../../Footer/Footer';
import HeaderComponent from '../../Header/Header';
import blog from '../../../Assets/Images/blog6.jpg'
import './ShortListedSchool.css'

function ShortListedSchool() {
    const[shortListedSchool,setShortListedSchool]=useState([])
  return (
    <div>
        <HeaderComponent/>
        <br/><br/><br/><br/><br/><br/>
        <div className='shortListContainer baseContainer'>
             <div className='row'>
                <div className='col-lg-2'></div>
                 <div className='col-lg-8'>
                    <div className='subText mb-3'>{shortListedSchool.length}&nbsp;Shorlisted Schools</div>
                    <div className='card shortListedCard'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='Imagepart'>
                                    <img className='img-fluid' src={blog}/>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                            <div className='schoolDetails mt-2 mb-2'>
                                                <h5>{data.schoolName}</h5>
                                                <div className="schoolAddress my-3"></div>
                                                <div className='row'>
                                                    <div className='col-6 col-lg-4  starIcon'>
                                                        {/* {data.schoolType} */}
                                                        <br />
                                                        <span style={{ "color": "black" }}>Pre-School Type</span>
                                                    </div>
                                                    <div className='col-6 col-lg-4 starIcon'>
                                                        {/* {data.schoolClassification} */}
                                                        <br />
                                                        <span style={{ "color": "black" }}>School Classification</span>
                                                    </div>
                                                    <div className='col-6 col-lg-4 starIcon'>
                                                        {/* {data.annualFees} */}
                                                        <br />
                                                        <span style={{ "color": "black" }}>Annual Fees</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='btnGroup'>
                                                <a className='compareBtn mx-3' style={{ "color": " #35a84f" }}>+Compare</a>
                                                <button className='applyBtn'>Book Appointment</button>
                                                <button className='callmeBtn1 BB'>CALL</button>
                                            </div>
                                        </div>
                        </div> 
                    </div>
                 </div>
                 <div className='col-lg-2'></div>
             </div>
        </div>
        <FooterComponent/>
    </div>
  )
}
export default memo(ShortListedSchool);
