import React, { useState } from 'react'
import "./mobilescroll.css"
import ScreenText from './ScreenText'

const scrollData = [
    {
        heading: "find the best flights",
        description: "Now find the best flights available for you and link it with your itinerary and cancel them at your wish and rewrite your itinerary all at a single platform ",
        mobile_img: require("../../asset/flight.png")
    },
    {
        heading: "you deserve the best hotels",
        description: " Book hotels with our specialized review systems. Now dont trust on fake ads and reviews",
        mobile_img: require("../../asset/map.png")
    },
    
    {
        heading: "Taxi on demand",
        description: " with our specialized itinerary creating feature you can add and remove taxi at a single touch. no more waiting... ",
        mobile_img: require("../../asset/car.png")
    },
]

const MobileScroll = () => {
    const[currentImg, setCurrentImg] = useState(0)
  return (
    <div className='max-width flex mobile-scroll'>
        <div className='scroll-full-screen-wrapper'>
            {scrollData.map((screen,i)=>(
                <div className='scroll=full-screen'> 
                    <ScreenText screen = {screen} i ={i} setCurrentImg = {setCurrentImg}></ScreenText>
                </div>
            ))}
        </div>
        <div className='mobile-mockup-wrapper non-mobile'>
            <div className='mobile-mockup'>
                <div className='mobile-mockup-screen flex absolute-center'>
                    <img src ={scrollData[currentImg].mobile_img} alt="vishnu"
                    className='mobile-screen-img'
                    key = {scrollData[currentImg].mobile_img} />

                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileScroll