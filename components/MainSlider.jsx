import React from 'react'
import Link from 'next/link'

export default function MainSlider({bannerData}) {
  console.log({bannerData})
    return (
    <div className="main-slider">
    <div id="main-slider" className="owl-carousel owl-theme">
      <div className="item">
        <div className="slide-caption slide-2">
          <div className="container">
            <h1>{bannerData.heading}</h1>
            <p>{bannerData.subheading}</p>
            <Link href="#appointment-form"><a className="btn-1">Ask Cardiologist</a></Link> </div>
        </div>
        {bannerData.image && <span className="simg"><img src={`/images/${bannerData.image}`} alt=""/></span>}</div>
      </div>
  </div>
    )
}
