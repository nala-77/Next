"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./../../app/globals.css";
import chevron from "./../../assets/images/chevron-down.svg";
import Sign from "../Sign/Sign";
import { logIn, signUp } from "@/data";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface navProps {
  logo: string | StaticImageData;
  links: linkArray[];
}

interface linkArray {
  to: string;
  name: string;
}

const Navbar = ({ logo, links }: navProps) => {
  const [signType, setSignType] = useState<string | null>(null);

  const closeSign = () => setSignType(null);
  const showLogin = () => setSignType("login");
  const showSignUp = () => setSignType("signup");

  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // -------------------------------------------------------

  return (
    <nav
      className={`   ${
        scrolling ? "shadow-lg bg-[#333333e8]" : "bg-[#FFFFFF33] "
      } flex justify-between items-center px-60 py-5 max-2xl:py-2 text-[#FFFFFF] bg-[#FFFFFF33] fixed w-full max-2xl:px-9% max-594:px-30 text-xl  max-2xl:text-lg z-50`}
    >
      <div className="w-[133px] max-2xl:w-[90px] max-594:w-[75px]">
        <Image src={logo} alt="tourLogo" className="w-full" />
      </div>

      <div
        className={`   ${
          active ? "right-0" : "-right-[100%]"
        }   transition-all duration-200 flex justify-between w-3/4 max-1187:absolute max-1187:flex-col  max-1187:top-[0] max-1187:max-w-[370px] max-1187:bg-[#333333e8] max-1187:h-screen max-1187:justify-start max-1187:p-16 max-1187:items-start max-2xl:gap-4`}
      >
        <ul className="flex gap-x-10 max-2xl:gap-4 capitalize items-center justify-between max-1187:flex-col max-1187:items-start">
          {links.map((item, i) => (
            <li key={i}>
              <Link onClick={handleClick} href={item.to}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-2.5 items-center max-1187:flex-col max-1187:items-start max-2xl:gap-4 ">
          <div className="flex items-center gap-1">
            <span className="text-[#ffffffc4]">Eng</span>
            <Image src={chevron} alt="chevron" />
          </div>

          <button onClick={showLogin} className="capitalize">
            login
          </button>

          <button
            onClick={showSignUp}
            className="capitalize w-42 max-2xl:w-28 h-12 max-2xl:h-9 bg-main-color rounded-full max-2xl:text-lg"
          >
            sign up
          </button>
        </div>
      </div>

      <div className="hidden max-1187:block">
        {active ? (
          <FontAwesomeIcon
            onClick={handleClick}
            className="text-main-color  max-500:text-2xl w-7 h-7 cursor-pointer absolute z-40     top-[25%];
    right-[7%]"
            icon={faXmark}
          />
        ) : (
          <FontAwesomeIcon
            onClick={handleClick}
            className="text-main-color  max-500:text-2xl w-7 h-7 cursor-pointer "
            icon={faBars}
          />
        )}
      </div>
      {signType && (
        <Sign
          head={signType === "login" ? "Log In" : "Create an Account"}
          inputs={signType === "login" ? logIn : signUp}
          btnOne={signType === "login" ? "Sign In" : "Sign Up"}
          btnTwo={
            signType === "login" ? "Sign In with Google" : "Sign Up with Google"
          }
          login={signType === "login"}
          note={
            signType === "login"
              ? "Don’t have an account?"
              : "Already have an account?"
          }
          link={signType === "login" ? "Sign Up" : "Log In"}
          closeSign={closeSign}
        />
      )}
    </nav>
  );
};

export default Navbar;
