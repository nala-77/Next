'use client'
import React from "react";
import Title from "../Title/Title";
import Slider from "../Slider/Slider";
import { customer } from "@/data";
import CustomersCards from "../CustomersCards/CustomersCards";

const Customers = () => {
  return (
    <section className="py-15 px-60 max-2xl:px-9%">
        <Title head="Happy Customers Says" />

        <div className="flex gap-8 ">
          <Slider
            items={customer}
            itemsToShow={2}  
            renderItem={(items) => (
              <>
                {items.map((item, i) => (
                  <CustomersCards
                    key={i}
                    name={item.name}
                    img={item.img}
                    desc={item.desc}
                  />
                ))}
              </>
            )}
          />
        </div>
    </section>
  );
};

export default Customers;
