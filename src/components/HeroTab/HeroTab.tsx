import Image, { StaticImageData } from "next/image";
import React from "react";
import chevron from "./../../assets/images/chevron-down.svg"
interface heroTabsProps {
  img: string | StaticImageData;
  title: string;
  desc: string;
  category: string
}
const HeroTab = ({ img, title, desc, category }: heroTabsProps) => {
  return (
    <div className="flex justify-between items-baseline py-4 gap-1.5 max-594:gap-1 ">
        <Image src={img} alt={category} className="max-594:w-4"/> 
      <div>
        <h3 className="text-myBlack text-lg font-bold mb-1.5 max-594:text-base">{title}</h3>
        <div className="flex">
            <p className="text-lg opacity-80  max-2xl:text-base max-594:text-sm">{desc}</p>
            <Image src={chevron} alt="chevron" /> 
        </div>
      </div>

    </div>
  );
};

export default HeroTab;
