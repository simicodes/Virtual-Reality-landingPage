import React from "react";

//import components
import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";

//import icons
import { HiMenu } from "react-icons/hi";

const Header = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto">
        {/* logo */}
        <a href="#!">
          <img src={Logo} alt="" />
        </a>
        {/* nav */}
        <Nav />
        {/* nav mobile btn "react-modal-video": "^1.2.9",*/}
        <HiMenu className="lg:hidden text-white cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
