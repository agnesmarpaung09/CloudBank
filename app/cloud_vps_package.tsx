"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { CloudVPSPackage, CloudVPSDatas } from "./datas/cloud_vps.json";

export const getStaticProps = async () => {
  return {
    props: {
      VPSDatas: CloudVPSDatas,
      VPSPack: CloudVPSPackage,
    },
  };
};

interface VPSPackages {
  name: any;
  price: any;
  description: any;
}

interface VPSPackagesProps {
  VPSPack: VPSPackages[];
}

const VPSPackages: React.FC<VPSPackagesProps> = ({ VPSPack }) => {
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
    <thead>
      <tr className="text-xs">
        <th className="border border-gray-300 p-2 text-justify">
          Pilih Rencana Anda
        </th>
        {CloudVPSPackage.map((pkg, index) => (
          <th className="border border-gray-300 p-2" key={index}>
            {pkg.name}
            <p className="block text-blue-500">
              <span className="text-xs" style={{ verticalAlign: "0.5em" }}>
                Rp.
              </span>{" "}
              {pkg.price}/<span className="text-normal text-black">bulan</span>
            </p>
            <div className="flex justify-center">
              <button
                className={`mt-2  text-blue-600 border border-blue-600 py-1 px-2 rounded w-20 ${
                  pkg.buttonBg === "bg-blue-500" ? "bg-blue-500 text-white" : ""
                }`}
              >
                Beli
              </button>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default VPSPackages;
