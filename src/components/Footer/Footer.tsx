import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface footerProps {
  image: string | StaticImageData;
  footerData: footerArray[];
  socialLink: social[];
}

interface footerArray {
  head: string;
  list?: linksArray[];
}

interface linksArray {
  to: string;
  name: string;
  icon?: IconDefinition;
}

interface social {
  icon: IconDefinition;
  to: string;
}
const Footer = ({ image, footerData, socialLink }: footerProps) => {
  return (
    <footer className="px-60 bg-myBlack text-white max-2xl:px-9%">
      <div className="w-[133px] max-2xl:w-[100px] pb-33 pt-10">
        <Image src={image} alt="tours" className="w-full" />
      </div>

      <div className="flex justify-between py-33 border-y border-[#FFFFFF] border-solid flex-wrap max-858:flex-col max-858:gap-4 max-858:items-center max-858:text-center">
        {footerData.map((item, i) => {
          return (
            <div key={i}>
              <h3 className="capitalize text-xl font-extrabold mb-5">
                {item.head}
              </h3>

              <ul className="flex flex-col gap-2.5 max-858:gap-1">
                {item.list?.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className={`flex items-center max-858:items-baseline max-858:gap-x-1.5   gap-x-3.5 text-lg max-858:justify-center ${
                        link.icon ? " mb-5" : ""
                      }`}
                    >
                      {link.icon && (
                        <FontAwesomeIcon
                          icon={link.icon}
                          className="w-[24px] text-main-color"
                        />
                      )}
                      <Link href={link.to} className="w-max">{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <div>
          <h3 className="text-xl capitalize font-extrabold mb-5">
            social meadia
          </h3>
          <ul className="flex justify-between items-center gap-x-5 ">
            {socialLink.map((item, i) => {
              return (
                <li key={i}>
                  <Link
                    href={item.to}
                    className="bg-main-color w-[50px] h-[50px] flex justify-center items-center rounded-full"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="w-[20px] h-[22px] text-myBlack"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="text-center pt-33 pb-10">Copyright © 2022. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
