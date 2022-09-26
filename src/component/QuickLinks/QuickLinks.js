import React, {memo} from "react";
import { Link } from "react-router-dom";
import './QuickLinks.css';

const QuickLinksComp = () => {
    return (
        <div className="QuickLinksContainer">
            <div className="QuicklinksListOne">
                <h5 className="highlightText"> Quick links</h5>
                <ul className="QuicklinksButtonGroup">
                    <li><Link to='/' className="QuicklinksButton m-1 my-2">Home</Link></li>
                    <li><Link to='/home/search' className="QuicklinksButton m-1 my-2">School Search</Link></li>
                    <li><Link to='/events-webinar' className="QuicklinksButton m-1 my-2">Events/Webinar</Link></li>
                    <li><Link to='/blogs' className="QuicklinksButton m-1 my-2">Blogs</Link></li>
                    <li><Link to='/awards' className="QuicklinksButton m-1 my-2">Awards & Recongnition</Link></li>
                    <li><Link to='/' className="QuicklinksButton m-1 my-2">Contact Us</Link></li>
                    <li><Link to='/about-us' className="QuicklinksButton m-1 my-2">About Skoolz</Link></li>
                </ul>
            </div>
            <div className="QuicklinksListTwo">
                <h5 className="highlightText">Quick schools<br /> search</h5>
                <ul className="QuicklinksButtonGroup">
                    <li><button type="button" className="QuicklinksButton m-1 my-2">CBSE Schools in Bengaluru</button></li>
                    <li><button type="button" className="QuicklinksButton m-1 my-2">ICSE Schools in Bengaluru</button></li>
                    <li><button type="button" className="QuicklinksButton m-1 my-2">IGCES Schools in Bengaluru</button></li>
                    <li><button type="button" className="QuicklinksButton m-1 my-2">Pre-School in Bengaluru</button></li>
                </ul>
            </div>
        </div>
    )
}
export default memo(QuickLinksComp);