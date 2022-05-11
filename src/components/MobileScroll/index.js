import React, { useState } from 'react'
import "./mobilescroll.css"
import ScreenText from './ScreenText'

const scrollData = [
    {
        heading: "book you hotels",
        description: " we are offering you to book your flights at a simple and faster  we are offering you to book your flights at a simple and faster ",
        mobile_img: require("../../asset/flight.png")
    },
    {
        heading: "book you hotels",
        description: " we are offering you to book your flights at a simple and faster  we are offering you to book your flights at a simple and faster ",
        mobile_img: require("../../asset/map.png")
    },
    {
        heading: "book you hotels",
        description: " we are offering you to book your flights at a simple and faster  we are offering you to book your flights at a simple and faster ",
        mobile_img: require("../../asset/travel.png")
    },
    {
        heading: "book you hotels",
        description: " we are offering you to book your flights at a simple and faster  we are offering you to book your flights at a simple and faster ",
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
                    className='mobile-screen-img'/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileScroll