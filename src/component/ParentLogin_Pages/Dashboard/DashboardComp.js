import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import FooterComponent from '../../Footer/Footer'
import HeaderComponent from '../../Header/Header'
import './DashboardComp.css'

function DashboardComp() {
    const [mobileVerified, setMobileVerfied] = useState(false);
    const [emailVerified, setEmailVerfied] = useState(false);
    const [schoolReward, setSchoolReward] = useState(0);
    const [hobbyReward, setHobbyReward] = useState(0);
    const [serviceReward, setServiceReward] = useState(0);
    const [tutionReward, setTutionReward] = useState(0);

    return (
        <div>
            <HeaderComponent />
            <div className='dashBoardContainer baseContainer'>
                <div className='row'>
                    <div className='highlight mt-5 mb-3'>Dashboard</div>
                    <div className='card schoolCard p-4 mb-4'>
                        <div className='subText my-2'>School Appointments</div>
                        <div className='table-responsive-md table-responsive-sm'>
                            <table class="table">
                                <thead>
                                    <tr className='superHead'>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>Total Rewards: {schoolReward}</th>
                                    </tr>
                                    <tr>
                                        <th>School Name</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th>Rewards</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='card HobbyCard p-4 mb-4'>
                        <div className='subText my-2'>Hobby Appointments</div>
                        <div className='table-responsive-md table-responsive-sm'>
                            <table class="table">
                                <thead>
                                    <tr className='superHead'>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>Total Rewards: {hobbyReward}</th>
                                    </tr>
                                    <tr>
                                        <th>Institute Name</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th>Rewards</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='card ServiceCard p-4 mb-4'>
                        <div className='subText my-2'>Service Appointments</div>
                        <div className='table-responsive-md table-responsive-sm'>
                            <table class="table">
                                <thead>
                                    <tr className='superHead'>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>Total Rewards: {serviceReward}</th>
                                    </tr>
                                    <tr>
                                        <th>Company Name</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th>Rewards</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='card TutionCard p-4 mb-4'>
                        <div className='subText my-2'>Tuition Appointments</div>
                        <div className='table-responsive-md table-responsive-sm'>
                            <table className="table">
                                <thead>
                                    <tr className='superHead'>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>Total Rewards: {tutionReward}</th>
                                    </tr>
                                    <tr>
                                        <th>Company Name</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th>Rewards</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='card PartnersCard p-4 mb-4'>
                        <div className='subText my-2'>Our Partners</div>
                        <div className='table-responsive-md table-responsive-sm'>
                           <button className='viewmoreBtn' type='button'>View More</button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default DashboardComp