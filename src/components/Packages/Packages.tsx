import React from "react";
import Title from "../Title/Title";
import PackagesCards from "../PackagesCards/PackagesCards";
import { PackagesData } from "@/data";

const Packages = () => {
  return (
    <div className="py-15 px-60 max-2xl:px-9% ">
      <Title head="The Most Popular Packages" />

      <div className="flex gap-5 flex-wrap justify-between items-start max-724:justify-center ">
        {PackagesData.map((item, i) => {
          return <PackagesCards note={item.note} price={item.price} list={item.list} img={item.img} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Packages;
