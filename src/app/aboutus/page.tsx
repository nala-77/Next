import Hero from "@/components/Hero/Hero";
import React from "react";
import heroPic2 from "./../../assets/images/hero2.png";
import WelcomeSection from "@/components/WelcomeSection/WelcomeSection";
import { numbers } from "@/data";
import site from "./../../assets/images/Rectangle 22.png";
import AboutCardsSection from "@/components/AboutCardsSection/AboutCardsSection";
const about = () => {
  return (
    <>
      <Hero
        bg={heroPic2}
        head="Our team cares about your full relax"
        btn={true}
        desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
      />

      <WelcomeSection
        image={site}
        subtitle="WELCOME TO OUR SITE!"
        maintitle="We Are The Center Of Lucca
To Offer You The Best"
        desc="We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!"
        numbers={numbers}
      />

      <AboutCardsSection />
    </>
  );
};

export default about;
