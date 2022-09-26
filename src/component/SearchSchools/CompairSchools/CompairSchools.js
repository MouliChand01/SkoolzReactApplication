import React, { useState ,memo} from 'react';
import FooterComponent from '../../Footer/Footer';
import HeaderComponent from '../../Header/Header';
import school1 from '../../../Assets/Images/blog6.jpg'
import './CompairSchools.css'

function CompairSchools() {
    const searchs =[
        {
            "schoolId": 36,
            "schoolName": "The Learning Curve a Preschool in Mumbai, Maharashtra",
            "userIdentity": "a89bc78f-b422-4657-b2d0-f98d8d5591b1",
            "schoolAddress": "The Learning Curve Kamothe 36 sec, Mansarovar, Sector 36, Kamothe, Panvel, Mumbai, Maharashtra\r\n,,Navi Mumbai,Maharashtra,410209",
            "boardOne": "Not Applicable",
            "boardTwo": "NA",
            "boardThree": "NA",
            "schoolClassification": "Co-Ed",
            "schoolType": "Pre-School",
            "annualFees": "₹30,000 - ₹50,000",
            "schoolRating": 0,
            "coverPicturePath": "a89bc78f-b422-4657-b2d0-f98d8d5591b1_CoverPicture.jpg",
            "latitude": 19.02585333,
            "longitude": 73.09024185,
            "preSchoolType": "NA",
            "cityName": "Navi Mumbai",
            "stateName": "Maharashtra",
            "distance": 578.1,
            "schoolBoard": null,
            "schoolImage":school1,
            "transport":"Yes",
            "classes":"Pre-School - KG2",
            "schoolstrength":"0",
            "classstrength":"0",
            "establishmentYear":"2016",
            "smartClasses":"Yes",
            "outdoorSports":"Yes",
            "indoorSports":"Yes",
          },
          {
            "schoolId": 39,
            "schoolName": "The Learning Curve",
            "userIdentity": "a490f03e-83f1-4594-a8ac-afabd439fd7b",
            "schoolAddress": "the learning curve near Poonam Residency, Holy Cross Road, D-WING, I C Colony, Borivali West, Mumbai, Maharashtra\r\n,Above Axis Bank,Mumbai,Maharashtra,401107",
            "boardOne": "Not Applicable",
            "boardTwo": "NA",
            "boardThree": "NA",
            "schoolClassification": "Co-Ed",
            "schoolType": "Pre-School",
            "annualFees": "₹30,000 - ₹50,000",
            "schoolRating": 0,
            "coverPicturePath": "a490f03e-83f1-4594-a8ac-afabd439fd7b_CoverPicture.jpg",
            "latitude": 19.2792404,
            "longitude": 72.87758715,
            "preSchoolType": "NA",
            "cityName": "Mumbai",
            "stateName": "Maharashtra",
            "distance": 607.6,
            "schoolBoard": null,
            "schoolImage":school1,
            "transport":"Yes",
            "classes":"Pre-School - KG2",
            "schoolstrength":"250",
            "classstrength":"20",
            "establishmentYear":"2019",
            "smartClasses":"Yes",
            "outdoorSports":"No",
            "indoorSports":"Yes",


          }
        //   {
        //     "schoolId": 41,
        //     "schoolName": "The Learning Curve",
        //     "userIdentity": "09cf0384-b970-4eb3-b76a-f7379a68b6a7",
        //     "schoolAddress": "The Learning Curve, Anushaktinagar, Sector 10, Kharghar, Navi Mumbai, Maharashtra 410210\r\n,,,Maharashtra,410210",
        //     "boardOne": "Not Applicable",
        //     "boardTwo": "NA",
        //     "boardThree": "NA",
        //     "schoolClassification": "Co-Ed",
        //     "schoolType": "Pre-School",
        //     "annualFees": "",
        //     "schoolRating": 0,
        //     "coverPicturePath": "09cf0384-b970-4eb3-b76a-f7379a68b6a7_CoverPicture.jpg",
        //     "latitude": 19.03465449,
        //     "longitude": 73.07805448,
        //     "preSchoolType": "NA",
        //     "cityName": "bengaluru",
        //     "stateName": "Maharashtra",
        //     "distance": 579.6,
        //     "schoolBoard": null,
        //     "schoolImage":school1
        //   }
    ]
    const [dum, setDum] = useState(searchs)
    return (
        <div>
            <HeaderComponent />
            <div className='compairSchoolContainer baseContainer'>
                {console.log("asdfghjklkjhgfdsdfghjhgfdsdfghjjhgfds")}
                <div className='headingText'>Compare School</div>
                <div className='compairBox'>
                    <div className='row'>
                        <div className='col-lg-3 col-3'>
                            <table>
                                <tr className='ImagePreview'><th>School Image</th></tr>
                                <tr><th>Type of School</th></tr>
                                <tr><th>Examination Board</th></tr>
                                <tr><th>Annual Fees</th></tr>
                                <tr><th>School Classifiation</th></tr>
                                <tr><th>Transport Facility</th></tr>
                                <tr><th>Classes</th></tr>
                                <tr><th>School Strength</th></tr>
                                <tr><th>Classroom Strength</th></tr>
                                <tr><th>Establishment Year</th></tr>
                                <tr><th>Smart Classes</th></tr>
                                <tr><th>Co-Curricular Activities</th></tr>
                                <tr><th>Outdoor Sports</th></tr>
                                <tr><th>Indoor Sports</th></tr>
                            </table>
                        </div>
                        {dum.map((data, index) => (
                            <div key={index} className='col-lg-3 col-3'>
                                <div className='card'>
                                    <table className="table table-striped">
                                        <tr><td><img className='img-fluid ImagePreview p-1' src={school1}/></td></tr>
                                        <tr><td>{data.schoolType}</td></tr>
                                        <tr><td>{data.boardThree}</td></tr>
                                        <tr><td>{data.annualFees}</td></tr>
                                        <tr><td>{data.schoolClassification}</td></tr>
                                        <tr><td>{data.transport}</td></tr>
                                        <tr><td>{data.classes}</td></tr>
                                        <tr><td>{data.schoolstrength}</td></tr>
                                        <tr><td>{data.classstrength}</td></tr>
                                        <tr><td>{data.establishmentYear}</td></tr>
                                        <tr><td>{data.outdoorSports}</td></tr>
                                        <tr><td>{data.indoorSports}</td></tr>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default memo(CompairSchools);
