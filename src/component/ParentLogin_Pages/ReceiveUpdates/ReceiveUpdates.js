import React from 'react';
import FooterComponent from '../../Footer/Footer';
import HeaderComponent from '../../Header/Header';
import updateIcon from '../../../Assets/Images/Updates icon.png'
import './ReceiveUpdates.css';

function ReceiveUpdates() {
    return (
        <div>
            <HeaderComponent />
            <br /><br /><br />
            <div className='receiveUpdateContainer baseContainer'>
                <div className='row justify-content-md-center'>
                    <div className='col-lg-9'>
                        <div className='m-3'>
                            <div className='ImgIcon'>
                                <img className='img-fluid' src={updateIcon} />
                            </div>
                            <div className='ContainerText p-3'>Receive weekly updates from your shortlisted & nearby schools</div>
                            <div className='card shortlistedCard p-4 mb-3'>
                                <div className='row'>
                                    <div className='col-10'>
                                        <div className='ContainerText'>Receive Updates from Shortlisted Schools</div>
                                        <div className='subText mt-1'>You have <span>2</span> Shorlisted Schools</div>
                                    </div>
                                    <div className='col-2'>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="toogleForShortlisted"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card nearByCard p-4'>
                                <div className='row'>
                                    <div className='col-10'>
                                        <div className='ContainerText'>Recieve Updates from Nearby Schools</div>
                                        <div className='subText mt-1'>You have 0 Nearby Schools</div>
                                        <div className='selectLoc mt-1'>Your selected location is <span>Kukatpally, Hyderabad, Telangana, India
                                            Update Location</span></div>
                                    </div>
                                    <div className='col-2'>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="toogleForNearby" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='footerText'>Dont have a school of your choice? Please share the school details, and we shall reachout to school management to get you the update.&nbsp;<a href=''>Click here</a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}
export default ReceiveUpdates;
