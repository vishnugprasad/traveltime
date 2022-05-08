import React from 'react'
import Button from '../common/button/index'
import "./heroSection.css"

const HeroSection = () => {
  return (
    <div className='hero-section-wrapper'>
        <div className='flex absolute-center hero-label'>
            <div> refer and earn free subscription</div>
        </div>
        <div className='flex absolute-center flex-col hero-section max-width'>
           <div className='hero-heading'>
               Become your own tour guide
           </div>
           <div className='hero-subheading'>lets build the biggest travel community</div>
           <Button buttonText="Download APP"></Button>
        </div>
    </div>
  )
}

export default HeroSection