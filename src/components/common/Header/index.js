import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const[showMobMenu, setShowMobMenu] = useState("false")
  const toggleMobileMenu = ()=>{
    setShowMobMenu(!showMobMenu)
  }
  return (
    <div className="mobile-menu-wrapper">
      
      <div className="flex max-width header">
        {/* <img
          src="https://mpng.subpng.com/20200213/yz/transparent-world-globe-flag-earth-logo-fetouh-yousef-technical-services-uae-directory-adv5e47587658e907.7518759115817340063642.jpg"
          alt="vishnu"
          className="header-logo"
        /> */}
        <div className="only-mobile mobile-menu-button-wrapper"> 
          <button class={`hamburger hamburger--spin ${showMobMenu ? 'is-active': ''}`} type="button" onClick = {toggleMobileMenu}>
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
