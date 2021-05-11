import React from "react";
import { Carousel } from "react-bootstrap";
import galeria1 from '../../assets/fotos_galeria/galeria1.jpeg'
import galeria2 from '../../assets/fotos_galeria/galeria2.jpeg'
import galeria3 from '../../assets/fotos_galeria/galeria3.jpeg'
import galeria4 from '../../assets/fotos_galeria/galeria4.jpeg'
import galeria7 from '../../assets/fotos_galeria/galeria7.jpeg'


function CarouselFotos() {
  return (
    <div className="container">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 width fotos" src={galeria1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 width" src={galeria2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 width" src={galeria3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 width" src={galeria4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 width" src={galeria7} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default CarouselFotos;