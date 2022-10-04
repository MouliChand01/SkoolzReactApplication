import React from 'react';
import FooterComponent from '../../Footer/Footer';
import HeaderComponent from '../../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './ChangePassword.css';

function ChangePasswords() {
  return (
    <div>
      <HeaderComponent />
      <div className='passwordContainer'>
        <div className='heroImage'>
          <div className="col-12">
            <div className="card changepassCard mt-5">
              <div className="cardLogo d-flex"><FontAwesomeIcon className="fa-2xl" icon={faUser} /></div>
              <div className="card-header">
                <h3 className="title text-center">Pick a new password</h3>
              </div>
              <div className="card-body mb-1">
                <form>
                  <div className="px-2">
                    <div class="input-group flex-nowrap my-4">
                      <span class="input-group-text" style={{ "backgroundColor": "#ffff", "border": "none" }} ><FontAwesomeIcon icon={faLock} /></span>
                      <input type="tel" class="form-control" placeholder="Old Password" />
                    </div>
                    <div class="input-group flex-nowrap my-4">
                      <span class="input-group-text" style={{ "backgroundColor": "#ffff", "border": "none" }} ><FontAwesomeIcon icon={faLock} /></span>
                      <input type="tel" class="form-control" placeholder="New Password" />
                    </div>
                    <div class="input-group flex-nowrap my-4">
                      <span class="input-group-text" style={{ "backgroundColor": "#ffff", "border": "none" }} ><FontAwesomeIcon icon={faLock} /></span>
                      <input type="tel" class="form-control" placeholder="Re-enter New Password" />
                    </div>
                    <button className="submitBtn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  )
}
export default ChangePasswords;
