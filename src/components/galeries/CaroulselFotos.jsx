import React from "react";
import { Carousel } from "react-bootstrap";
// import image1 from '../../assets/hero.jpg'
import image2 from "../../assets/hero2.jpg";
import image3 from "../../assets/hero3.jpg";


function CarouselFotos() {
  return (
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
          <img className="d-block w-100 width" src={image3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default CarouselFotos;