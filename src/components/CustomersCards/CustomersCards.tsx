import Image, { StaticImageData } from "next/image";
import React from "react";
import comma from "./../../assets/images/comma.svg";

interface CustomersCardsProps {
  img: string | StaticImageData;
  desc: string;
  name: string;
}
const CustomersCards = ({ img, desc, name }: CustomersCardsProps) => {
  return (
    <div className="w-6/12 p-30 max-858:px-4 border border-solid border-[#EFEFEF] rounded-3xl max-724:w-11/12">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={img}
          alt="profilePic"
          width={80}
          height={80}
          className="rounded-full object-fit text-center"
        />
        <h3 className="text-lg capitalize mt-3.5">{name}</h3>
      </div>
      <Image src={comma} alt="comma" />
      <p className="p-5 text-lg text-myBlack max-858:text-base">{desc}</p>
      <div className="flex justify-end">
        <Image src={comma} alt="comma" className="object-right" />
      </div>
    </div>
  );
};

export default CustomersCards;
