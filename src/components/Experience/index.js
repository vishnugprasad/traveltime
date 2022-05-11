import React from 'react'
import "./experience.css"
import Button from "../common/button";


function Experience() {
  return (
    <div>
        <div className="experience photo-section">
      <div className="max-width">
        <div className="photo-section-child">
            <div className="photo-section-top">
                <div className="photo-section-heading experience-heading">
                    we got your back
                </div>
                <div className="photo-section-subheading">
                with the amazing and honest user reviews
                </div>
            </div>
            <div className="photo-section-bottom">
                <div className="photo-section-description experience-description">

                we assure you  a tension free trip where you itself is planning everything and you get to familiar
                with the corners of the street even before you visiting there. 

                </div>
                <div>
                    <Button buttonText="Explore"></Button>
                </div>

            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Experience