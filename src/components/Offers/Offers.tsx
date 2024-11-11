import Image, { StaticImageData } from "next/image";
import React from "react";

interface offersProps {
  img: string | StaticImageData;
  head: string;
  desc: string;
  btn: string;
}

const Offers = ({ img, head, desc, btn } : offersProps) => {
  return(
    <section className="relative px-60 py-15 text-center bg-pattern max-2xl:px-9% bg-no-repeat bg-cover">
        <div className="my-15 p-30 max-w-[509px] bg-[#FFFFFF4D] rounded-3xl max-724:mt-10 max-724:mb-20 ">
            <h3 className="text-32 font-extrabold max-594:text-xl">
                {head}
            </h3>
            <p className="text-lg py-8 max-594:text-base">
                {desc}
            </p>
            <button className="capitalize w-42 max-2xl:w-28 h-12 max-2xl:h-9 bg-main-color rounded-full max-2xl:text-lg text-white max-594:text-sm  max-594:w-18">
            {btn}
          </button>
        </div>

        <div className="absolute max-w-[475px] right-[12%] bottom-0 max-1187:w-1/3 max-1187:right-[0]">
            <Image src={img} alt={head} className="w-full"/>
        </div>
    </section>
  )
};

export default Offers;
