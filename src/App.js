
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './component/Footer/Footer';
import Testimonials from './component/Testimonials/Testimonials';
import AwardsAndRecognitions from './component/AwardsAndRecognitions/AwardsAndRecognitions';
import Blogs from './component/Blogs/Blogs';
import Header from './component/Header/Header';
import Homeimage from './component/Homeimage/Homeimage';
import Schools from './component/Schools/Schools';
import EvetsAndWeninars from './component/EventsAndWebinars/EventsAndWebinars';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homeimage/>
      <Schools/>
      <EvetsAndWeninars/>
      <Blogs/>
      <AwardsAndRecognitions/> 
      <Testimonials/> 
      <FooterComponent/> 
    </div>
  );
}

export default App;
