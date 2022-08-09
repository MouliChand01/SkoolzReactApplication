
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import {productImages} from './Assets'
import {productsThumbs} from './Assets'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

function App() {
  return (
    <div className="App">
      {/* <HeaderComponent/>
      <Homeimage/>
      <Schools/>
      <EvetsAndWeninars/>
      <Blogs/>
      <AwardsAndRecognitions/> 
      <Testimonials/> 
      <FooterComponent/>  */}

      {/* <SearchSchools/> */}

      <DeatailsSchoolComponent  images={productImages} productsThumbs={productsThumbs}/>
     </div>
  );
}

export default App;
