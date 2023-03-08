import React from "react";
import Place from "./Place";

const Places = () => {
  return (
    <section className='w-[75%] flex flex-col gap-14 mt-20 md:-mt-48 mb-36'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl sm:text-4xl font-semibold'>
          Plan your perfect trip
        </h1>
        <p className='text-xs sm:text-sm'>
          Search Flights & Places from our most popular destinations
        </p>
      </div>
      <Place />
    </section>
  );
};

export default Places;
