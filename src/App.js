
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './component/Footer/Footer';
import Testimonials from './component/Testimonials/Testimonials';
import AwardsAndRecognitions from './component/AwardsAndRecognitions/AwardsAndRecognitions';
import Blogs from './component/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Blogs/>
      <AwardsAndRecognitions/>
      <Testimonials/>
      <FooterComponent/>
    </div>
  );
}

export default App;
