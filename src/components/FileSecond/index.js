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
                    Fell special more often
                </div>
                <div className="photo-section-subheading">
                exclusive rewards for paying your bills
                </div>
            </div>
            <div className="photo-section-bottom">
                <div className="photo-section-description">

                every time you pay your credit card bills on CRED, you receive CRED coins.
                 you can use these to win exclusive rewards or get special access to curated products and experiences.
                  on CRED, good begets good.

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
