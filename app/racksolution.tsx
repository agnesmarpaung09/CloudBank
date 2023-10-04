"use client";
import React from "react";
import Slider from "react-slick";
import Image from 'next/image';
import { Package } from "./datas/racksolutionpack.json";
import { CheckIcon } from "@heroicons/react/solid";


const PackageCard = ({
    title,
    price,
    discountedPrice,
    features,
    iconColor,
    buttonBg,
  }: any) => {
    return (
      <div
        className={`bg-white p-4 rounded-lg shadow-2xl relative ${
          title === 2 ? "-mt-16 mb-10 shadow-inner" : ""
        } `}
        style={{ zIndex: title === 2 ? 3 : 2, position: "relative" }}
      >
        <div className="-ml-6 -mt-5">
          <Image
            src={`/col${title}.png`}
            alt={`col${title}`}
            width={30}
            height={30}
            className="w-16 h-16"
          />
          <p className="font-bold text-white text-xl -mt-12 ml-3">
            {title === 1
              ? "10U"
              : title === 2
              ? "21U"
              : title === 3
              ? "42U"
              : "Title"}
          </p>
        </div>
        <div className="ml-10 text-center">
          <h1 className={`block text-${iconColor} text-xl -mt-6`}>
            <span className="text-sm" style={{ verticalAlign: "0.5em" }}>
              Rp.
            </span>
            {price}/<span className="text-sm text-gray-600">bulan</span>
          </h1>
  
          <h2 className="block text-gray-500 text-sm mt-2 mr-14">
            <span className="text-xs" style={{ verticalAlign: "0.5em" }}>
              Rp.
            </span>
            <del>{discountedPrice}</del> /
            <span className="text-xs text-gray-500">bulan</span>
          </h2>
  
          <div className="text-left mt-6">
            {features.map((feature, index) => (
              <p
                key={index}
                className="text-gray-600 mb-6 -ml-10 flex items-center"
              >
                <CheckIcon
                  className={`h-6 w-6 mr-2 ${
                    iconColor === "orange-500"
                      ? "border-orange-500 text-orange-500"
                      : iconColor === "blue-500"
                      ? "border-blue-500 text-blue-500"
                      : iconColor === "green-500"
                      ? "border-green-500 text-green-500"
                      : ""
                  } border rounded-full p-1`}
                  style={{ borderColor: iconColor, color: iconColor }}
                />
                {feature}
              </p>
            ))}
          </div>
  
          <button
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 border-2 ${
              iconColor === "orange-500"
                ? "border-orange-500"
                : iconColor === "blue-500"
                ? "border-blue-500"
                : iconColor === "green-500"
                ? "border-green-500"
                : ""
            } text-${iconColor} py-1 px-2 font-bold text-sm rounded-full w-56 h-10 mt-6 -mb-4 ${
              buttonBg === "blue-500"
                ? "bg-blue-600 text-white"
                : buttonBg === "green-500"
                ? "bg-green-600 text-white"
                : "bg-white"
            }`}
          >
            Order
          </button>
        </div>
      </div>
    );
  };

export const getStaticProps = async () => {
    return {
        props: { RackSolutionData: Package },
    };
};

interface RackSolution {
    title: any;
    price: any;
    iconColor: any;
    discountedPrice: any;
    borderColor: any;
    features: any;
}

interface RackSolutionProps {
    RackSolutionData: RackSolution[];
}


const RackSolution: React.FC<RackSolutionProps> = ({ RackSolutionData }) => {
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
        <div className="mx-auto max-w-4xl grid md:grid-cols-3 gap-12 -mt-72 text-justify text-xs justify-center">
            {Package.map((pkg) => (
                <PackageCard key={pkg.title} {...pkg} />
            ))}
        </div>
    );
};

export default RackSolution;