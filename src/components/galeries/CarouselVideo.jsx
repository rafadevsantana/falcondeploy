import React from "react";
import { Carousel } from "react-bootstrap";
import video from '../../assets/video.mp4';
// import video2 from '../../assets/video2.mp4';

function CarouselVideos() {
  return (
    <div className='d-flex justify-content-center'>
      <Carousel>
        <Carousel.Item>
          <video className='video-galeries ' width="300" height="300" autoPlay>
            <source src={video} type="video/mp4" />
          </video>
        </Carousel.Item>
        {/* <Carousel.Item>
          <video className='video-galeries ' width="300" height="300"  autoPlay>
            <source src={video2} type="video/mp4" />
          </video>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}
export default CarouselVideos;
