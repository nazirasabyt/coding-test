import React from "react";
import Image from "next/image";
import { trips } from "../../utils/data";

const Place = () => {
  return (
    <section className='grid  sm:grid-cols-3 gap-8'>
      {trips.map((el) => {
        return (
          <div
            key={el.id}
            className='rounded-xl shadow-md  flex items-center gap-6 px-3 text-xs sm:text-sm'>
            <Image
              className='rounded-lg py-4 '
              src={el.image}
              width={80}
              height={80}
              alt={el.name}
              loading='lazy'
            />
            <div className='text-[#112211]'>
              {" "}
              <h1 className=' opacity-80'>{el.name}</h1>
              <p>Flights • Hotels • Resorts </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Place;
