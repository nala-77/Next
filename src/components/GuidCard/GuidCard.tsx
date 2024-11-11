import Image, { StaticImageData } from "next/image";
import React from "react";

interface guidProps {
  img: string | StaticImageData;
  title: string;
  desc: string;
}

const GuidCard = ({ img, title, desc }: guidProps) => {
  return (
    <div className=" max-1187:w-[330px] max-2xl:w-[24%]  w-[22%] max-594:w-full max-594:object-cover">
        <Image src={img} alt={title} className="w-full h-[300px] mb-5 rounded-3xl"/>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>

      <p className="text-lg text-myBlack">{desc}</p>
    </div>
  );
};

export default GuidCard;
