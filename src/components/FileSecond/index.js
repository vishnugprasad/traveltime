import React from "react";
import Button from "../common/button";
import "./filesecond.css";
const FileSecond = () => {
  return (
    <div className="file-second photo-section">
      <div className="max-width">
        <div className="photo-section-child">
            <div className="photo-section-top">
                <div className="photo-section-heading">
                create personalised  itinerary
                </div>
                <div className="photo-section-subheading">
                at your finger tip
                </div>
            </div>
            <div className="photo-section-bottom">
                <div className="photo-section-description">

                add the places you want to visit and find the smartest way to reach all the destination. make it a 
                memorable one and dont miss any spots anymore

                </div>
                <div>
                    <Button buttonText="Explore"></Button>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default FileSecond;
