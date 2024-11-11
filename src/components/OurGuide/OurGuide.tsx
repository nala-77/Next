import { guide } from "@/data";
import React from "react";
import GuidCard from "../GuidCard/GuidCard";

const OurGuide = () => {
  return (
    <section className="flex justify-between items-start py-15 px-60 gap-8  max-724:justify-center max-2xl:gap-3 max-2xl:px-9% flex-wrap max-594:justify-center">
      {guide.map((item, i) => {
        return (
          <GuidCard
            key={i}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        );
      })}
    </section>
  );
};

export default OurGuide;
