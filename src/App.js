
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeatailsSchoolComponent from './component/DetailsSchoolComponent/DetailsSchoolComponent';
import About_usComponent from './component/Import_Links/About_us_Skoolz';
import Events_WebinarComponent from './component/Import_Links/Events&Webinar';
import KidsArenaComponent from './component/Import_Links/Kids_Arena';
import KidsArenadetailsComponent from './component/Import_Links/KidsArenadetailsComponent';
import EventsWebinardetailsComponent from './component/Import_Links/EventsWebinardetailsComponent';
import SkoolzHomepageComponent from './component/SkoolzHomePage/SkoolzHomePage';
import SearchSchools from './component/SearchSchools/SearchSchools';
import ParentLoginComp from './component/Login/ParentLogin';
import ParentRegistrationComp from './component/Login/ParentRegistr';
import ForgotPassword from './component/Login/ForgotPassword';
import BlogsComp from './component/Import_Links/BlogsComp';
import BlogsDetailsComp from './component/Import_Links/BlogsDetailsComp';
import TestimonialDetailsComp from './component/Testimonials/TestimonialDetails';
import AwardAndRecognitionsComp from './component/AwardsAndRecognitions/AwardAndRecognitions';
import AwardDetailsComp from './component/AwardsAndRecognitions/AwardDetailsComp';
import HobbyClassesComp from './component/Hobby Classes/HobbyClasses';
import Fbcomp from './component/DummyTasks/facecom';
import TuitionsClassComp from './component/TuitionsClasses/TuitionsClass';
import Banercomp from './component/DummyTasks/skoolz';
import StudentProfileComp from './component/ParentLogin_Pages/Student Profile/StudentProfileComp';



function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* <Route path="/" element={<SkoolzHomepageComponent/>}/> */}

            <Route path="/home/search" element={<SearchSchools />} />
            <Route path="/about-us" element={<About_usComponent />} />

            <Route path="/events-webinar" element={<Events_WebinarComponent />} />
            <Route path="/events-webinar-details" element={<EventsWebinardetailsComponent />} />

            <Route path="/awards" element={<AwardAndRecognitionsComp />} />
            <Route path="/awards/index" element={<AwardDetailsComp />} />

            <Route path="/kids-arena" element={<KidsArenaComponent />} />
            <Route path="/kids-arena/:id" element={<KidsArenadetailsComponent />} />

            <Route path="/blogs" element={<BlogsComp />} />
            <Route path="/blogs-details" element={<BlogsDetailsComp />} />

            <Route path="/school-details" element={<DeatailsSchoolComponent />} />
            <Route path="/testimonial/index" element={<TestimonialDetailsComp />} />

            <Route path="/" element={<ParentLoginComp />} />
            <Route path="/register" element={<ParentRegistrationComp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />


            <Route path="/student/profile" element={<StudentProfileComp/>} />


            <Route path="/baner" element={<Banercomp/>} />   
            {/* this is homenew Baner */}

            <Route path="/test" element={<Fbcomp />} />
            {/* this is fb login and google api classcomp */}

           

          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
