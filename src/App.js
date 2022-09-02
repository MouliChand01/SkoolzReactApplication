
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import DeatailsSchoolComponent from './component/DetailsSchoolComponent/DetailsSchoolComponent';
import About_usComponent from './component/Import_Links/About_us_Skoolz';
import Events_WebinarComponent from './component/Import_Links/Events&Webinar';
import KidsArenaComponent from './component/Import_Links/Kids_Arena';
import KidsArenadetailsComponent from './component/Import_Links/KidsArenadetailsComponent';
import EventsWebinardetailsComponent from './component/Import_Links/EventsWebinardetailsComponent';
import SkoolzHomepageComponent from './component/SkoolzHomePage/SkoolzHomePage';
import SearchSchools from './component/SearchSchools/SearchSchools';
import ParentLoginComp from './component/Login/ParentLogin';

// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/thumbs'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       
        <Routes>
          
          <Route path="/" element={<SkoolzHomepageComponent/>}/>
          <Route path="/home/search" element={<SearchSchools/>}/>

          <Route path="/about-us" element={<About_usComponent/>}/>

          <Route path="/events-webinar" element={<Events_WebinarComponent />}/>
          <Route path="/events-webinar-details" element={<EventsWebinardetailsComponent />}/>

          <Route path="/kids-arena" element={<KidsArenaComponent />} />
          <Route path="/kids-arena/:id" element={<KidsArenadetailsComponent />} />

          <Route path="/school-details" element={<DeatailsSchoolComponent/>}/>
          <Route path="/login" element={<ParentLoginComp/>}/>
          
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
