import React from "react";
import Container from "../Common/Container";
import logo from "../assets/Logo .png";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  return (
    <nav className="py-[22px]">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img className="w-[60px] h-[60px]" src={logo} alt="Logo" />
            <h2 className="text-2xl font-semibold text-primaryColor font-manrope">
              HRM Streaming
            </h2>
          </div>
          <div className="py-[10px] px-[40px] border-[2px] border-[#1F1F1F] rounded-md">
            <ul className="flex gap-8 items-center">
              <Link to="/">
                <li
                  className={`text-lg ${
                    location.pathname === "/"
                      ? "text-primaryColor font-semibold"
                      : "text-thirdColor/75 font-normal"
                  }  font-manrope ${
                    location.pathname === "/" &&
                    "py-[14px] px-[24px] bg-[#1A1A1A]  rounded-md"
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link to="/movieshow">
                {" "}
                <li
                  className={`text-lg ${
                    location.pathname === "/movieshow"
                      ? "text-primaryColor font-semibold"
                      : "text-thirdColor/75 font-normal"
                  }  font-manrope ${
                    location.pathname === "/movieshow" &&
                    "py-[14px] px-[24px] bg-[#1A1A1A]  rounded-md"
                  }`}
                >
                  Movies & Shows
                </li>
              </Link>
              <Link to="/support">
                <li
                  className={`text-lg ${
                    location.pathname === "/support"
                      ? "text-primaryColor font-semibold"
                      : "text-thirdColor/75 font-normal"
                  }  font-manrope ${
                    location.pathname === "/support" &&
                    "py-[14px] px-[24px] bg-[#1A1A1A]  rounded-md"
                  }`}
                >
                  Support
                </li>
              </Link>
              <Link to="/subscription">
                <li
                  className={`text-lg ${
                    location.pathname === "/subscription"
                      ? "text-primaryColor font-semibold"
                      : "text-thirdColor/75 font-normal"
                  }  font-manrope ${
                    location.pathname === "/subscription" &&
                    "py-[14px] px-[24px] bg-[#1A1A1A]  rounded-md"
                  }`}
                >
                  Subscriptions
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-8">
            <CiSearch className="text-[34px] text-primaryColor" />
            <IoMdNotificationsOutline className="text-[34px] text-primaryColor" />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
