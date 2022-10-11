import React, { useState } from 'react';
import FooterComp from '../../Footer/Footer';
import HeaderComp from '../../Header/Header';
import blog from '../../../Assets/Images/SSPanMP.png'
import './AddCartComp.css';

function AddCartComp() {
    const [cartItems, setCartItems] = useState([
        {
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
        },
        {
            "schoolId": 43,
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
        
    ])
    const removecartSchools =(id)=>{
        const updatedData = cartItems.filter((val)=>val.schoolId !== id);
        setCartItems(updatedData)
    }
    return (
        <div>
            <HeaderComp />
            <br /><br /><br />
            <div className='cartContainer'>
                <div className="joinOurNetwork">
                    <div className='baseContainer d-flex align-items-center'>
                        <div className='cartIcon'>
                            <i class="bi bi-cart" style={{ "fontSize": "34px", "color": "#fff" }} />&nbsp;
                        </div>
                        <div className="joinOurNetworkText">
                            Applications Cart
                        </div>
                    </div>
                </div>

                <div className='cartBody baseContainer'>
                    <div className='heilghtText'>{cartItems.length}
                        &nbsp;School applications in the cart
                    </div>
                    <div className='row'>
                        <div className='col-lg-9'>
                            {cartItems && cartItems.map((val, index) => (
                                <div className='card rightCard mt-3 mb-3'>
                                    <div className='row m-4'>
                                        <div className='col-6'>
                                            <div className='row'>
                                                <div className='col-3'>
                                                    <img className='img-fluid' src={blog} />
                                                </div>
                                                <div className='col-9'>
                                                    <div className='schoolName'>{val.schoolName}</div>
                                                    <div className='schooladdress'>{val.schoolAddress}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-6' style={{"textAlign":"right"}}>
                                            <div className='row'>
                                                <div className='col-8'>
                                                    <div><a onClick={()=>removecartSchools(val.schoolId)}>RemoveList</a></div>
                                                    <div><a href='#'>Move To Shortlist</a></div>
                                                </div>
                                                <div className='col-4'>
                                                    <div className='rupesText'>
                                                        <i class="bi bi-currency-rupee" style={{ "color": "#D6712D", "fontSize": "30px" }} />0
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-3'>
                            <div className='card leftcard p-2 mt-3 m-4'>
                                <div className='me-auto headText'>Total :</div>
                                <div className='rupesText mt-2 mb-2'><i class="bi bi-currency-rupee" style={{ "color": "#D6712D;", "fontSize": "40px" }} />0</div>
                                <button className='m-3 checkoutBth'>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComp />
        </div>
    )
}
export default AddCartComp;



