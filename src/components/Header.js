import React from "react";

//import components
import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";

//import icons
import { HiMenu } from "react-icons/hi";

const Header = ({ setNavMobile }) => {
  return (
    <header className="py-6" data-aos="fade-down" data-aos-duration="2000" aos-delay="900">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {" "}
          {/* logo "react-modal-video": "^1.2.9",*/}
          <a href="#!">
            <img className="h-[30px]" src={Logo} alt="" />
          </a>
          {/* nav */}
          <Nav />
          {/* nav mobile btn */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-white cursor-pointer text-3xl"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
