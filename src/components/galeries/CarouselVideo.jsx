import React from "react";
import { Carousel } from "react-bootstrap";
import video from '../../assets/video.mp4';


function CarouselVideos() {
  return (
    <div className="container">
       <div className='d-flex justify-content-center'>
      <Carousel>
        <Carousel.Item>
          <video className='video-galeries ' width="300" height="300" autoPlay>
            <source src={video} type="video/mp4" />
          </video>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
}
export default CarouselVideos;
