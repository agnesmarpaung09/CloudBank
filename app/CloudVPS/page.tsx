import React from "react";
import Image from "next/image";
import { CloudVPSPackage, CloudVPSDatas } from "../datas/cloud_vps.json";
import VPSDatas from "../cloud_vps_data";
import VPSPackages from "../cloud_vps_package";

const VPS = () => {
  return (
    <div className="bg-white">
      <div className="bg-blue-900 h-[200px]">
        <div className="text-white relative">
          <div
            className="relative pb-80"
            style={{
              backgroundImage: `url('/Bg-VPS.png')`,
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
            <h1 className="text-3xl font-bold mt-16">
              Hosting VPS Murah Di Batam Menggunakan SSD Super Cepat
            </h1>
            <p className="text-sm mt-4">
              Setup Sangat Cepat Dalam 1 Menit Dengan Processor Performa Tinggi
              Heza Core Intel Ceon Dan <br />
              Support 24 Jam Melalui Email, Live Chat Dan Remote Access.
            </p>
            <button className="mx-auto mt-6 bg-orange-500 text-white py-1 px-2 rounded w-40">
              Mulai Sekarang
            </button>
          </div>
        </div>
      </div>

      <section className="mt-36 text-center bg-white shadow-lg rounded-lg p-8">
        {/* <div className="flex justify-center items-center pt-6 mb-10 mt-14"> */}
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold z-10 bg-gradient-to-b from-[#DCDCDC] to-white bg-clip-text text-transparent">
          MENGAPA VPS CLOUDBANK?
        </h1>
        <h2 className="capitalize text-xl md:text-3xl font-semibold mb-8 text-[#343A3E] z-10">
          Mengapa VPS Cloudbank?
        </h2>
        {/* </div> */}
        <div className="flex justify-center -mt-10">
          <div className="w-full max-w-5xl overflow-x-auto">
            <div className="md:flex flex-col">
              <div className="bg-white border border-gray-400 shadow-lg p-4 mt-10 rounded-lg">
                <div className="md:flex-row md:grid md:grid-cols-2 md:gap-4 items-center">
                  <div className="flex items-center justify-center md:flex-grow">
                    <Image
                      src="/vps1.png"
                      alt="VPS"
                      width={100}
                      height={100}
                      className="w-20 h-20"
                    />
                    <div className="md:ml-2 text-gray-700 text-justify">
                      <h3 className="text-xs font-semibold">
                        Nikmati Pengalaman 10x Lebih Cepat
                      </h3>
                      <p className="text-xs font-normal">
                        Dengan Hosting VPS SSD, Anda Dialokasikan Dengan Sumber
                        Daya Hosting Yang Mirip Dengan Server Khusus Dan Tidak
                        Ada Yang Akan Berbagi Sumber Daya Server Dengan Anda.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start border-t pt-4 md:border-t-0  mb-6">
                    <Image
                      src="/vps2.png"
                      alt="VPS"
                      width={100}
                      height={100}
                      className="w-20 h-20"
                    />
                    <div className="md:ml-2 text-gray-700  text-justify">
                      <h3 className="text-xs font-semibold">SSD hard drive</h3>
                      <p className=" text-xs font-normal">
                        Dengan Konfigurasi Server Yang Tepat. Didukung Manajemen
                        Jaringan Dan Multiple Upstream Tier 1 Provider Jaringan
                        Serta Multiple Peering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-center -mt-44">
        <div className="flex flex-col justify-center items-center min-h-screen pt-6 mb-8">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold z-10 bg-gradient-to-b from-[#DCDCDC] to-white bg-clip-text text-transparent">
            PERBBANDINGAN PAKET HARGA CLOUD HOSTING
          </h1>
          <h2 className="capitalize text-xl md:text-3xl font-semibold mb-8 text-[#343A3E] z-10">
            Perbandingan Paket Harga Cloud Hosting
          </h2>
        </div>

        <div className="flex justify-center -mt-64">
          <div className="w-full md:max-w-5xl overflow-x-auto">
            <table className="w-full table-auto border md:border-collapse">
              <VPSPackages VPSPack={CloudVPSPackage} />
              <VPSDatas VPSDatas={CloudVPSDatas} />
              {/* <thead>
                <tr className="text-xs">
                  <th className="border border-gray-300 p-2 text-justify">
                    Pilih Rencana Anda
                  </th>
                  {packages.map((pkg, index) => (
                    <th className="border border-gray-300 p-2" key={index}>
                      {pkg.name}
                      <p className="block text-blue-500">
                        <span
                          className="text-xs"
                          style={{ verticalAlign: "0.5em" }}
                        >
                          Rp.
                        </span>{" "}
                        {pkg.price}/
                        <span className="text-normal text-black">bulan</span>
                      </p>
                      <div className="flex justify-center">
                        <button
                          className={`mt-2  text-blue-600 border border-blue-600 py-1 px-2 rounded w-20 ${
                            pkg.buttonBg === "bg-blue-500"
                              ? "bg-blue-500 text-white"
                              : ""
                          }`}
                        >
                          Beli
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead> */}

              {/* <tbody>
                {data.map((row, index) => (
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
              </tbody> */}
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VPS;
