'use client'; // Ensure this is at the top

import React from 'react';
import Slider from '../Slider/Slider';
import DestinantionsCard from '../DestinantionsCard/DestinantionsCard';
import Title from '../Title/Title';
import { dest } from '@/data';

const Destinantions = () => {
  return (
    <section className="py-15 px-60 max-2xl:px-9%">
      <Title head="Explore Our Popular Destinations" />

      <div className='flex gap-8'>
        <Slider
          items={dest}
          itemsToShow={4}
          renderItem={(items) => (
            <>
              {items.map((item, i) => (
                <DestinantionsCard
                  key={i}
                  image={item.image}
                  title={item.title}
                  time={item.time}
                  date={item.date}
                  price={item.price}
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

export default Destinantions;

