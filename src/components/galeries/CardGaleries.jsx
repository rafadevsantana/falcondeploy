import React, { useEffect, useState } from 'react'
import CarouselFotos from './CaroulselFotos'
import CarouselVideos from './CarouselVideo';

function CardGaleries({value}) {
  const  [render, setRender] = useState('')

    useEffect(() => {
        setRender(value)
    })
if (render === 'fotos') {
    return(
        <CarouselFotos />
    )
}
else if (render === 'videos') {
    return (
        <CarouselVideos />
    )
}
else {
    return(
        <CarouselFotos />
    )
}
       
}

export default CardGaleries;