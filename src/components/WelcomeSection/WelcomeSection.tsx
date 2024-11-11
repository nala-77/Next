import Image, { StaticImageData } from "next/image";
import React from "react";

interface WelcomeSectionProps {
  image: string | StaticImageData;
  subtitle: string;
  maintitle: string;
  desc: string;
  numbers: customer[];
}
interface customer {
    num: number,
    txt: string
}
const WelcomeSection = ({
  image,
  subtitle,
  maintitle,
  desc,
  numbers,
}: WelcomeSectionProps) => {
  return (
    <section className="px-60 flex justify-between items-center pt-15 pb-32 max-2xl:px-9% max-1187:flex-col">
      <div className="w-2/5 max-2xl:w-1/4 max-1187:mb-4 max-724:w-3/5">
        <Image src={image} alt={subtitle} />
      </div>

      <div className="max-w-[700px] max-1187:text-center">
        <h3 className="uppercase text-myBlack font-semibold opacity-60">{subtitle}</h3>
        <p className="font-extrabold text-32 ">{maintitle}</p>
        <p className="text-myBlack text-lg my-8 ">{desc}</p>

        <div className="flex justify-between items-center">
            {numbers.map((item, i) => {
                return(
                    <div key={i} className="w-20">
                        <h4 className="text-32 max-724:text-xl text-main-color font-bold">
                            {item.num}+
                        </h4>

                        <p className="text-myBlack opacity-60 max-724:text-base">
                            {item.txt}
                        </p>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
