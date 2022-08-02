import React from "react";

//import components
import Users from "../components/Users";

//import image
import Img from "../assets/img/banner-img.png";

const Banner = () => {
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left">
      <div className="container mx-auto ">
        {/* title */}
        <div className="flex flex-col lg:flex-row">
          <div>
            <h1 className="capitalize text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug">
              Let's explore <br />
              three-dimensional visually.
            </h1>
            <p className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0">
              With virtual technology you can see the digital world feel more
              real and you can play the game with a new style.
            </p>
            {/* button */}
            <div
              className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto 
            mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start"
            >
              <button className="btn">Get it now</button>
              <a
                className="border-b-2 border-transparent hover:border-white transition ease-out"
                href="#!"
              >
                Explore Device
              </a>
            </div>
            {/* Users component */}
            <Users />
          </div>
          {/* image */}
          <div>
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
