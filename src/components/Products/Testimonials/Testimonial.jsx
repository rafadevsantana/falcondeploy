import React  from 'react';
import CarouselTestimonial from './CarouselTesttimonial';
import './testimonial.css';

function Testimonial() {
  const URL = ''
  return(
    <div className='container bg-testimonial'>
      <h1 id='depoimentos' className='h1-t '>Depoimentos dos clientes</h1>
      <CarouselTestimonial />
      <br/>
    </div>
  )
}

export default Testimonial;