"use client";
import React from "react";
import { dataCloudHosting, dataCloudVPS } from "./datas/reseller.json";

export const getStaticProps = async () => {
  return {
    props: {
      CloudHostingData: dataCloudHosting,
      CloudVPS: dataCloudVPS,
    },
  };
};

interface CloudVPS {
  PackageName: any;
  NormalPrice: any;
  basicPackagePrice: any;
  intermidiatePackagePrice: any;
  proPackagePrice: any;
}

interface CloudVPSProps {
  CloudVPS: CloudVPS[];
}

const CloudVPS: React.FC<CloudVPSProps> = ({ CloudVPS }) => {
  return (
    <div className="items-center mt-36 xl:mt-38 ">
      <div className="flex justify-center mt-12 px-6 sm:px-12">
        <div className="w-full max-w-[1060px] overflow-x-auto ">
          <div className="md:flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">Cloud Vps</h2>
            <table className="w-full md:w-auto table-auto border md:border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr>
                  <th
                    className="pl-2 xl:pl-4 bg-[#1171F5] text-left text-[#FFFFFF] w-48"
                    rowSpan={2}
                  >
                    Nama Paket
                  </th>
                  <th
                    className="pl-2 xl:pl-4 bg-[#1171F5] text-left border-b border text-[#FFFFFF] w-80"
                    rowSpan={2}
                  >
                    Harga Normal / Bulan
                  </th>
                  <th
                    className="py-2 xl:py-3 bg-[#1171F5] border-b border text-[#FFFFFF] "
                    colSpan={3}
                  >
                    Harga Reseller / Bulan
                  </th>
                </tr>
                <tr className="bg-[#1171F5] text-[#FFFFFF]">
                  <td className="border py-2 xl:py-3 text-center">Basic</td>
                  <td className="border text-center">Intermidiate</td>
                  <td className="border text-center">Pro</td>
                </tr>
              </thead>
              <tbody>
                {dataCloudVPS.map((row, index) => (
                  <tr>
                    <td className="border pl-2 xl:pl-4 py-3 text-left font-semibold text-[#343A3E]">
                      {row.PackageName}
                    </td>
                    <td className="border pl-2 xl:pl-4 text-left text-[#909090]">
                      {row.NormalPrice}
                    </td>
                    <td className="border pl-2 xl:pl-4text-left  text-[#909090]">
                      {row.basicPackagePrice}
                    </td>
                    <td className="border pl-2 xl:pl-4 text-left text-[#909090]">
                      {row.intermidiatePackagePrice}
                    </td>
                    <td className="border pl-2 xl:pl-4text-left  text-[#909090]">
                      {row.proPackagePrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudVPS;
