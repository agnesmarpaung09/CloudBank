"use client";
import React from "react";
import { CloudVPSPackage, CloudVPSDatas } from "./datas/cloud_vps.json";

export const getStaticProps = async () => {
  return {
    props: {
      VPSDatas: CloudVPSDatas,
      VPSPackage: CloudVPSPackage,
    },
  };
};

interface VPSDatas {
  PilihRencanaAnda: any;
  cloudVPS1: any;
  cloudVPS2: any;
  cloudVPS3: any;
  cloudVPS4: any;
  cloudVPS5: any;
  cloudVPS6: any;
  cloudVPS7: any;
}

interface VPSDatasProps {
  VPSDatas: VPSDatas[];
}

const VPSDatas: React.FC<VPSDatasProps> = ({ VPSDatas }) => {


  return (
    <tbody>
      {VPSDatas.map((row, index) => (
        <tr key={index} className="text-center text-xs">
          <td className="border border-gray-300 p-2 text-justify font-semibold">
            {row.PilihRencanaAnda}
          </td>
          <td className="border border-gray-300 p-2 text-[#4A596B]">
            {row.cloudVPS1}
          </td>
          <td className="border border-gray-300 p-2 text-[#4A596B]">
            {row.cloudVPS2}
          </td>
          <td className="border border-gray-300 p-2 text-[#4A596B]">
            {row.cloudVPS3}
          </td>
          <td className="border border-gray-300 p-2 text-[#4A596B]">
            {row.cloudVPS4}
          </td>
          <td className="border border-gray-300 p-2 text-[#4A596B] ">
            {row.cloudVPS5}
          </td>
          <td className="border border-gray-300 p-2 text-[#4A596B]">
            {row.cloudVPS6}
          </td>
          <td className="border border-gray-300 p-2 text-[#4A596B]">
            {row.cloudVPS7}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default VPSDatas;
