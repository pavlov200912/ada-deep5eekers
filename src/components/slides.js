import React from 'react'

import Script from 'dangerous-html/react'

import './slides.css'

const Slides = (props) => {
  return (
    <section className="slides-slides">
      <div className="slides-slider slider blaze-slider">
        <div className="slides-slider-container blaze-container">
          <div className="slides-slider-track-container blaze-track-container"></div>
        </div>
      </div>
      <div>
        <div className="slides-container2">
          <Script
            html={`<script defer>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
          ></Script>
        </div>
      </div>
    </section>
  )
}

export default Slides
