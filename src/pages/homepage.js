import React from "react";
import Header from "../components/common/Header";
import Experience from "../components/Experience";
import FileSecond from "../components/FileSecond";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll";
import WindowPeak from "../components/WindowPeak";

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <WindowPeak></WindowPeak>
      <FileSecond></FileSecond>
     <MobileScroll></MobileScroll>
      <Experience></Experience>
    </>
  );
};

export default HomePage;
