"use client";
import React from "react";
import { Affiliates } from "./datas/affiliate.json";

export const getStaticProps = async () => {
  return {
    props: { AffiliateData: Affiliates },
  };
};

interface Affiliate {
  image: string;
  name: string;
  description: string;
}

interface AffiliateProps {
  AffiliateData: Affiliate[];
}

const Affiliate: React.FC<AffiliateProps> = ({ AffiliateData }) => {

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row justify-center items-center pt-24 md:pt-32">
        {AffiliateData.map((row, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-4 pb-10 transform transition-transform hover:scale-105 relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-72 relative">
              <div className="">
                <img src={row.image} alt={`images ${index + 1}`} className="" />
              </div>
              <h2 className="font-semibold text-xl text-[#343A3E] pt-3">
                {row.name}
              </h2>
              <p className="capitalize text-[#606060] text-sm">
                {row.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Affiliate;
