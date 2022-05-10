import React from "react";
import Header from "../components/common/Header";
import Experience from "../components/Experience";
import FileSecond from "../components/FileSecond";
import HeroSection from "../components/HeroSection";
import WindowPeak from "../components/WindowPeak";

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <WindowPeak></WindowPeak>
      <FileSecond></FileSecond>
      {/* <div className="non-mobile"> */}
        {/* <WindowPeak></WindowPeak> */}
      {/* </div> */}
      <Experience></Experience>
    </>
  );
};

export default HomePage;
