import Image, { StaticImageData } from "next/image";
import React from "react";

interface PackagesCardsProps {
  img: string | StaticImageData;
  note: string;
  price: number;
  list: pachageList[];
}

interface pachageList {
  icon: string;
  listItem: string;
}

const PackagesCards = ({ img, note, price, list }: PackagesCardsProps) => {
  return (
    <div className="border border-solid border-[#EFEFEF] rounded-3xl w-[23.4%] max-594:w-full max-1187:w-[340px]">
      <Image src={img} alt={note} />
      <div className=" p-6 max-1187:p-5">
        <p className="text-xl font-extrabold text-myBlack">{note}</p>
        <h3 className="text-main-color text-5xl max-1187:text-4xl font-bold relative ml-2  my-4">
          <span className="text-myBlack opacity-60 font-normal text-lg absolute top-0 -left-[3%]">
            €
          </span>

          {price}

          <span className="text-myBlack opacity-60 text-lg font-normal">
            /day
          </span>
        </h3>

        <ul className="flex flex-col gap-4">
          {list.map((item, i) => {
            return (
              <li key={i} className="flex max-1187:items-start  text-lg gap-4 text-myBlack max-1187:gap-2  max-1187:text-sm ">
                <Image src={item.icon} alt={note} />
                {item.listItem}
              </li>
            );
          })}
        </ul>
        <button className="max-1187:text-base max-1187:py-1 capitalize w-full text-center border border-solid border-main-color mt-4 rounded-full text-main-color text-xl py-3">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default PackagesCards;
