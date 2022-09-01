import React from "react";
import AwardsAndRecognitions from "../AwardsAndRecognitions/AwardsAndRecognitions";
import Blogs from "../Blogs/Blogs";
import EvetsAndWeninars from "../EventsAndWebinars/EventsAndWebinars";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import Homeimage from "../HomeImage/Homeimage";
import Schools from "../HomeSchools/HomeSchools";
import Testimonials from "../Testimonials/Testimonials";

const SkoolzHomepageComponent =()=>{
    return(
        <div>
            <HeaderComponent/>
            <Homeimage/>
            <Schools/>
            <EvetsAndWeninars/>
            <Blogs/>
            <AwardsAndRecognitions/>
            <Testimonials/>
            <FooterComponent/>
         </div>
    )

}
export default SkoolzHomepageComponent;