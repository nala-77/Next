import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import heroPic from "./../assets/images/hero.png";
import Destinantions from "@/components/Destinantions/Destinantions";
import WelcomeSection from "@/components/WelcomeSection/WelcomeSection";
import welcomeGirlie from "./../assets/images/about picture.png";
import { numbers, signUp } from "@/data";
import Offers from "@/components/Offers/Offers";
import offerGirlie from "./../assets/images/offer.png";
import Bike from "./../assets/images/bike picture.png";
import OurGuide from "@/components/OurGuide/OurGuide";
import Book from "@/components/Book/Book";
import Packages from "@/components/Packages/Packages";
import Customers from "@/components/Customers/Customers";
import Sign from "@/components/Sign/Sign";
export default function Home() {
  return (
    <>
      <Hero
        bg={heroPic}
        head="Enjoy in the best way!"
        tabs={true}
        desc="Enjoy our services for your trip anytime"
      />
      <Destinantions />
      <WelcomeSection
        image={welcomeGirlie}
        subtitle="WELCOME TO OUR SITE!"
        maintitle="We are the best company for your visit"
        desc="After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!"
        numbers={numbers}
      />
      <Offers
        img={offerGirlie}
        head="Get Special Offers for Organizations"
        btn="Contact Us"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <OurGuide />
      <Book img={Bike} head="Book Now Bike" />
      <Packages />
      <Customers />
      </>
  );
}
