import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from '../../../Assets/Images/DeekshaSchool.jpg';
import img1 from '../../../Assets/Images/DeekshaSchool1.jpg';
import img2 from '../../../Assets/Images/DeekshaSchool2.jpg';
import img3 from '../../../Assets/Images/DeekshaSchool3.jpg';
import './schoolsImageSlider.css'

const SchoolsImageSlide = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={img} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img1} alt="second slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img2} alt="threed slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img3} alt="Fourth slide"/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default SchoolsImageSlide;