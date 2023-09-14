"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const RekanKami = () => {
  const dataRekan = [
    {
      image: "/images/landing/rekankami.png",
    },
    {
      image: "/images/landing/rekankami.png",
    },
    {
      image: "/images/landing/rekankami.png",
    },
    {
      image: "/images/landing/rekankami.png",
    },
    {
      image: "/images/landing/rekankami.png",
    },
    {
      image: "/images/landing/rekankami.png",
    },
  ];

  const sliderSettings = {
    className: "center",
    centerMode: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center  mt-28 xl:mt-36">
      <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold absolute bg-gradient-to-b from-[#DCDCDC] to-white bg-clip-text text-transparent">
        REKAN KAMI
      </h1>
      <h2 className="capitalize text-xl md:text-3xl font-semibold mt-4 xl:mt-6 mb-8 text-center text-[#343A3E] absolute ">
        Rekan Kami
      </h2>
      <div className="grid grid-cols-1 items-center mt-20">
        <Slider {...sliderSettings}>
          {dataRekan.map((row, index) => (
            <div key={index} className="flex items-center mb-32 justify-center">
              <div className="bg-center  xl:w-auto xl:h-60 sm:w-64 sm:h-44 md:w-80 md:h-56 lg:w-96 lg:h-64 xl:mr-8 2xl:mr-12 items-center">
                <Image
                  src={row.image}
                  alt={`RekanKami ${index + 1}`}
                  layout="responsive"
                  width={200}
                  height={150}
                  className="rounded-2xl"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RekanKami;
