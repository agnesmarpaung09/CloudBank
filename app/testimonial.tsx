"use client";
import React from "react";
import Slider from "react-slick";
import Image from 'next/image';
import { Testimonials } from "./datas/testimonial.json";

export const getStaticProps = async () => {
  return {
    props: { TestimonialData: Testimonials },
  };
};

interface Testimonial {
  name: string;
  business: string;
  description: string;
  image: string;
}

interface TestimonialProps {
  TestimonialData: Testimonial[];
}


const Testimonial: React.FC<TestimonialProps> = ({ TestimonialData }) => {
  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    responsive: [
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="items-center mt-36 xl:mt-38 ">
      <Slider {...sliderSettings}>
        {TestimonialData.map((row, index) => (
          <div key={index} className="flex items-center mb-24">
            <div className="xl:flex bg-white rounded-2xl shadow-2xl xl:w-auto xl:h-80 mr-10 sm:mr-8 md:mr-16 lg:mr-28 xl:mr-8 2xl:mr-12 items-center ">
              <div className="xl:w-1/3 h-full bg-cover bg-center rounded-xl">
                <Image
                  src={row.image}
                  alt={`Testimonial ${index + 1}`}
                  width={380} 
                  height={544} 
                  className="rounded-2xl shadow-xl w-full h-90 sm:w-full sm:h-80"
                />
              </div>
              <div className="xl:w-2/3 p-4 xl:p-0 mx-2 xl:mx-6 2xl:p-4">
                <h2 className="text-lg sm:text-md font-semibold mt-2">
                  {row.name}
                </h2>
                <p className="text-sm sm:text-xs mt-2 ">
                  {row.business}
                </p>
                <p className="text-md sm:text-sm mt-2 text-justify">
                  {row.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;