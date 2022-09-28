import React, { useState ,memo} from 'react';
import {useLocation} from 'react-router-dom'
import FooterComponent from '../../Footer/Footer';
import HeaderComponent from '../../Header/Header';
import school1 from '../../../Assets/Images/blog6.jpg'
import './CompairSchools.css'

function CompairSchools() {
    const location =useLocation();
    const search =location.state.from;
    const [compareSchool,setCompareSchool] = useState(search)
    return (
        <div>
            <HeaderComponent />
            <div className='compairSchoolContainer baseContainer'>
                <div className='headingText'>Compare School</div>
                <div className='compairBox'>
                    <div className='row'>
                        <div className='col-lg-3 col-3'>
                            <table className='table table-striped'>
                                <tr  style={{"height":"168px"}}><th>School Image</th></tr>
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
                        {compareSchool.map((data, index) => (
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
                                        <tr><td>{data.smartClasses}</td></tr>
                                        <tr><td>{data.curricularActivities}</td></tr>
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
