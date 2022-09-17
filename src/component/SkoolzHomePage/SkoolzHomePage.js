import React from "react";
import AwardsAndRecognitions from "../AwardsAndRecognitions/HomeAwards&Recognitions";
import Blogs from "../Blogs/BlogsComponent";
import EvetsAndWeninars from "../EventsAndWebinars/EventsAndWebinars";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import HobbyClassesComp from "../Hobby Classes/HobbyClasses";
import Homeimage from "../HomeImage/Homeimage";
import Schools from "../HomeSchools/HomeSchools";
import Testimonials from "../Testimonials/Testimonials";
import TuitionsClassComp from "../TuitionsClasses/TuitionsClass";

const SkoolzHomepageComponent =()=>{
    return(
        <div>
            {/* <HeaderComponent/> */}
            <Homeimage/>
            <Schools/>
            <HobbyClassesComp/>
            <TuitionsClassComp/>
            <EvetsAndWeninars/>
            <Blogs/>
            <AwardsAndRecognitions/>
            <Testimonials/>
            {/* <FooterComponent/> */}
         </div>
    )
}
export default SkoolzHomepageComponent;