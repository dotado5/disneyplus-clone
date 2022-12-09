import React from "react"
import { Carousel, Wrap } from "./components styles/ImgSliderStyle"

function ImgSlider() {
  let settings = {
    dots: true,
    isfinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="" />
      </Wrap>
    </Carousel>
  )
}

export default ImgSlider
