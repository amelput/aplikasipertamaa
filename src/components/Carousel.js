import React from 'react';
import './Carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-magic-slider-dots/dist/magic-dots.css';
import banner1 from '../image/1.PNG';
import banner2 from '../image/2.PNG';
import banner3 from '../image/3.PNG';
import banner4 from '../image/4.PNG';

const settings = ({
    dots: true,
    autoplay: true,
    slidesToShow: 1.052,
    slidesToScroll: 1,
    speed: 500,
  });

const Carousel=()=> {
    return(
        <div className="container">
        <Slider {...settings}>
        <div><img src={banner1} alt="banner1"></img></div>
        <div><img src={banner2} alt="banner2"></img></div>
        <div><img src={banner3} alt="banner3"></img></div>
        <div><img src={banner4} alt="banner4"></img></div>
        </Slider>
      </div>
    )
}

export default Carousel;