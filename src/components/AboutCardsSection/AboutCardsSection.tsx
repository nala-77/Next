import { miniCards } from "@/data";
import React from "react";
import AboutMiniCard from "../AboutMiniCard/AboutMiniCard";

const AboutCardsSection = () => {
  return (
    <section className="px-60 py-15 flex justify-between max-724:justify-center bg-no-repeat bg-cover   items-start bg-pattern max-2xl:px-9% flex-wrap gap-4">
      {miniCards.map((item, i) => {
        return <AboutMiniCard key={i} image={item.img} head={item.head} />;
      })}
    </section>
  );
};

export default AboutCardsSection;
