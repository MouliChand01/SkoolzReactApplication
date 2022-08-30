
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import FooterComponent from './component/Footer/Footer';
import Testimonials from './component/Testimonials/Testimonials';
import AwardsAndRecognitions from './component/AwardsAndRecognitions/AwardsAndRecognitions';
import Blogs from './component/Blogs/Blogs';
import HeaderComponent from './component/Header/Header';
import Homeimage from './component/HomeImage/Homeimage';
import Schools from './component/HomeSchools/HomeSchools';
import EvetsAndWeninars from './component/EventsAndWebinars/EventsAndWebinars';
import SearchSchools from './component/SearchSchools/SearchSchools';
import DeatailsSchoolComponent from './component/DetailsSchoolComponent/DetailsSchoolComponent';
import About_usComponent from './component/Import_Links/About_us_Skoolz';
import Events_WebinarComponent from './component/Import_Links/Events&Webinar';
import KidsArenaComponent from './component/Import_Links/Kids_Arena';
import KidsArenadetailsComponent from './component/Import_Links/KidsArenadetailsComponent';
import RegistrationKidsEvent from './component/Import_Links/RegistrationKidsEvent';
import EventsWebinardetailsComponent from './component/Import_Links/EventsWebinardetailsComponent';
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/thumbs'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* 
        <HeaderComponent/>
        <Homeimage/>
        <Schools/>
        <EvetsAndWeninars/>
        <Blogs/>
        <AwardsAndRecognitions/> 
        <Testimonials/> 
        <FooterComponent/>  */}

        {/* 
         <SearchSchools/>
         <DeatailsSchoolComponent/> 

        {/* <About_usComponent/> */}

        <Routes>
          <Route path="/" element={<Events_WebinarComponent />} />
          <Route path="/events-webnair" element={<EventsWebinardetailsComponent />} />

          <Route path="/kids-arena" element={<KidsArenaComponent />} />
          <Route path="/kids-arena/:id" element={<KidsArenadetailsComponent />} />
        </Routes>

       


      </div>
    </BrowserRouter>
  );
}

export default App;
