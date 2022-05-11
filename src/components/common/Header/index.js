import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState("false");
  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
  };
  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
      >
         <div className="mobile-navbar">
          <div className="mobile-nav-item">Sign in</div>
        <div className="mobile-nav-item">Sign up</div>
      </div>
        
      </div>
      <div className="flex max-width header">
        {/* <img
          src="https://www.vhv.rs/dpng/d/320-3207853_transparent-travel-agency-logo-png-png-download.png"
          alt="vishnu"
          className="header-logo"
        /> */}
        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            class={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-item">Sign in</div>
          <div className="header-nav-item">Sign up</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
