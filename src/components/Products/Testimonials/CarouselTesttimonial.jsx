import React from "react";
import { Carousel } from "react-bootstrap";
import image2 from '../../../assets/depo1.png';
import image3 from "../../../assets/depo2.png";
import image1 from "../../../assets/depo3.png";


function CarouselTestimonial() {
  return(
<div >
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 width" src={image3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 width"
            src={image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 width" src={image1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
</div>
  )
}

export default CarouselTestimonial;
