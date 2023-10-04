"use client";
import React from "react";
import { Features } from "./datas/our_feature.json";

export const getStaticProps = async () => {
  return {
    props: { FeatureData: Features },
  };
};

interface Feature {
  image: string;
  name: string;
  description: string;
}

interface FeatureProps {
  FeatureData: Feature[];
}

const Feature: React.FC<FeatureProps> = ({ FeatureData }) => {


  return FeatureData.map((section, index) => (
    <div
      key={index}
      className={`p-4 flex flex-col justify-center mb-4 ${
        index !== FeatureData.length - 1 ? "sm:mb-0" : ""
      }`}
    >
      <div className="flex items-center mb-2">
        <img
          src={section.image}
          alt={`Gambar ${index + 1}`}
          className="w-20 h-auto mb-2"
        />
      </div>
      <h1 className="text-black text-md lg:text-lg font-bold">
        {section.name}
      </h1>
      <p className="text-black text-md lg:text-lg mt-2 text-justify">
        {section.description}
      </p>
    </div>
  ));
};

export default Feature;
