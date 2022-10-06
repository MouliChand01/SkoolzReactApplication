
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
import Banercomp from './component/HomeImage/skoolz';
import StudentProfileComp from './component/ParentLogin_Pages/Student Profile/StudentProfileComp';
import DashboardComp from './component/ParentLogin_Pages/Dashboard/DashboardComp';
import CompairSchools from './component/SearchSchools/CompairSchools/CompairSchools';
import ShortListedSchool from './component/ParentLogin_Pages/ShortListed Schools/ShortListedSchool';
import AddCartComp from './component/ParentLogin_Pages/AddCartComp/AddCartComp';
import ReceiveUpdates from './component/ParentLogin_Pages/ReceiveUpdates/ReceiveUpdates';
import ChangePasswords from './component/ParentLogin_Pages/ChangePassword/ChangePassword';
import Dummyform from './component/Login/Dummyform';




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


            <Route path="/parent/profile" element={<StudentProfileComp/>} />
            <Route path="/parent/dashboard" element={<DashboardComp/>} />
            <Route path="/parent/shortlist-schools" element={<ShortListedSchool/>} />
            <Route path="/parent/receive-updates" element={<ReceiveUpdates/>} />
            <Route path="/parent/changepassword" element={<ChangePasswords/>} />
            <Route path="/student/cart" element={<AddCartComp/>} />


            <Route path='/home/compare' element={<CompairSchools/>}/>


            <Route path="/baner" element={<Banercomp/>} />   
            <Route path="/dummy" element={<Dummyform/>} />   
            {/* this is homenew Baner */}

          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
