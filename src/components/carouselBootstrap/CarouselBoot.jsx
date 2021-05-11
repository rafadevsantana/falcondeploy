import React from "react";
import { Carousel } from "react-bootstrap";
import video1 from '../../assets/initial1.mp4';
import video2 from '../../assets/initial2.mp4';
import video3 from '../../assets/initial3.mp4';
import "./carouselBoot.css";

function CarouselBoot() {
  return (
    <div >
      <Carousel fade>
        <Carousel.Item>
          <video className="d-block w-100 width" autoPlay loop src={video1}  />
        </Carousel.Item>
        <Carousel.Item>
          <video className="d-block w-100 width" autoPlay loop src={video2} />
        </Carousel.Item>
        <Carousel.Item>
          <video className="d-block w-100 width" autoPlay loop src={video3}  />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default CarouselBoot;
