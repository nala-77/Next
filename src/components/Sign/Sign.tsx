"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import google from "./../../assets/images/google.png";
import Txt from "../Txt/Txt";

interface SignProps {
  head: string;
  inputs: InputArray[];
  btnOne: string;
  btnTwo: string;
  login: boolean;
  note: string;
  link: string;
  closeSign: () => void; // Add closeSign prop
}

interface InputArray {
  label: string;
  value: string;
  type: string;
}

const Sign = ({
  head,
  inputs,
  btnOne,
  btnTwo,
  login,
  note,
  link,
  closeSign,
}: SignProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="bg-[#333333cc] absolute top-0 bottom-0 w-full h-screen right-0 left-0 flex justify-center items-center z-50 ">
      <div className="w-max bg-white z-50 py-10 px-15 rounded-3xl w-[488px] max-594:w-11/12 max-594:px-10 max">
        <div className="flex justify-between items-baseline mb-5">
          <h3 className="text-32 font-bold text-myBlack mb-6 max-858:text-xl">
            {head}
          </h3>
          <FontAwesomeIcon
            icon={faXmark}
            className="w-3 h-3 text-myBlack cursor-pointer"
            onClick={closeSign}
          />
        </div>

        <form className="flex flex-col gap-5">
          {inputs.map((item, i) => (
            <div key={i} className="flex flex-col text-left">
              <label className="font-semibold text-myBlack opacity-60 text-lg max-858:text-base">
                {item.label}
              </label>
              <input
                type={item.type}
                placeholder={item.value}
                className="border py-3.5 px-6 text-[#333333] rounded-lg bg-white mt-2 w-full max-858:text-sm"
              />
            </div>
          ))}
        </form>

        {login ? (
          <p className="text-end max-858:text-sm">Forgot your password?</p>
        ) : (
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className={`max-858:w-3 max-858:h-3 w-5 h-5 border-2 rounded-sm ${
                  isChecked ? "bg-main-color" : "bg-white"
                } focus:outline-none`}
              />
              <p className="py-5 text-[#333333cc] max-858:text-sm">
                I agree with the{" "}
                <span className="text-main-color capitalize">terms</span> and{" "}
                <span className="text-main-color capitalize">Privacy</span>.
              </p>
            </label>
          </div>
        )}

        <div>
          <button className="max-858:text-base mt-4 text-white py-2 px-4 rounded-full bg-main-color w-full text-xl capitalize">
            {btnOne}
          </button>
          <p className="max-858:text-sm my-1 text-myBlack opacity-40 text-center">
            or
          </p>
          <button className="max-858:text-base text-[#33333366] py-2 px-4 rounded-full text-xl capitalize flex justify-center items-center border border-solid border-[#33333366] w-full">
            <Image src={google} alt="google" className="w-6 h-6 mr-4 " />
            {btnTwo}
          </button>
        </div>

        <div className="text-myBlack text-center text-base mt-6 flex items-center justify-center">
          <p> {note}</p>

          <Txt link={link} />
        </div>
      </div>
    </div>
  );
};

export default Sign;
