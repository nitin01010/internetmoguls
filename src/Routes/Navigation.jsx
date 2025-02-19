import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/home'
import Nav from '../Pages/Nav'
import Footer from '../Pages/Footer'
import VaranasiPic from '../images/VaranasiPic.webp';
import { useState } from "react";

const HeroSection = () => {
  const [background, setBackground] = useState("video"); // Default is video
  const backgrounds = {
    video: "https://cdn.pixabay.com/video/2019/06/26/24746-344986280_large.mp4", // Replace with actual video URL
    image1: `${VaranasiPic}`,
    image2: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image3: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image4: "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat h-[750px] relative">
      {background === "video" ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={backgrounds.video} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgrounds[background]})` }}
        />
      )}

      <div className="h-[400px] bg-white w-[1px] rounded-full absolute left-10 md:left-20 lg:left-40 top-44 z-10 flex flex-col items-center justify-between">
  {["video", "image1", "image2", "image3", "image4"].map((item, index) => (
    <div
      key={index}
      className="cursor-pointer bg-white rounded-full w-[10px] h-[10px] transition-all duration-300 ease-in-out hover:w-[12px] hover:h-[12px] hover:bg-gray-300"
      onClick={() => setBackground(item)}
    />
  ))}
</div>



      {/* Navbar */}
      <Nav />

      {/* Title */}
      <div className="absolute right-5 md:right-10 text-white text-4xl md:text-5xl top-24 text-end">
        <h1 className="HeadingText">
          Click Hotel <b className="font-bold">Yathartha Inn</b>
        </h1>
        <h1 className="HeadingText mt-5">Varanasi</h1>
      </div>
    </div>
  );
};

const Navigation = () => {
  return (
    <>
      <HeroSection />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Navigation