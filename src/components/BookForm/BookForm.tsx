"use client";
import { form } from "@/data";
import React, { useState } from "react";

const BookForm = () => {
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form className="flex justify-between flex-wrap w-full gap-y-30 bg-[#FFFFFF4D] max-594:px-3 p-8 rounded-3xl">
      {form.map((item, i) => {
        return (
          <div key={i}>
            {item.select ? (
              <div className="flex flex-col text-left max-594:w-full w-[322px]">
                <label htmlFor="selectInput" className=" font-semibold">{item.label}</label>
                <select
                  id="selectInput"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  className="border py-3.5 rounded-lg px-6 mt-2"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            ) : (
              <div className="flex flex-col text-left w-[322px]">
                <label className="font-semibold opacity-60">{item.label}</label>

                <input
                  type={item.type}
                  name="name"
                  // defaultValue={item.placeholder}
                  placeholder={item.placeholder}
                  className="border py-3.5 px-6 text-[#333333] rounded-lg bg-white mt-2 w-full"
                />
              </div>
            )}
          </div>
        );
      })}
    </form>
  );
};

export default BookForm;
