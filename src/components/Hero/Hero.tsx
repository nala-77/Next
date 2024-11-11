import Image, { StaticImageData } from "next/image";
import React from "react";
import hero from "./../../assets/images/hero.png";
import Tabs from "../Tabs/Tabs";
import { tours } from "@/data";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface heroProps {
  bg: string | StaticImageData;
  head?: string;
  desc?: string;
  btn?: boolean;
  tabs?: boolean;
}

const Hero = ({ bg, head, desc, btn, tabs }: heroProps) => {
  const categories = ["Public Tours", "Private Tours"];
  return (
    <header className="h-screen relative">
      <Image
        src={bg}
        alt="hero"
        className="absolute top-0 right-0 left-0 bottom-0 h-full -z-10 object-cover"
      />
      <div className="z-50 flex justify-center items-center h-full text-white flex-col">
        <div className={`max-w-[943px] text-center ${tabs ? "mb-15 max-594:mb-12" : "mb-6"}  max-594:px-30  max-md:mt-28 max-2xl:px-9% max-594:mt-32`}>
          <h2 className="font-podcast text-7xl mb-4 max-594:text-5xl">{head}</h2>
          <p className="text-2xl font-bold max-594:text-lg ">{desc}</p>
        </div>
        {tabs && (
          <div className="bg-[#FFFFFF33] p-5 max-724:w-full">
            <Tabs categories={categories} cardsData={tours} />
          </div>
        )}

        {btn && (
          <button className="py-3.5 max-594:py-2.5 max-594:px-4 px-6 rounded-full border border-solid border-white max-594:text-sm">
            View our Tour Packages
          </button>
        )}
      </div>
    </header>
  );
};

export default Hero;
