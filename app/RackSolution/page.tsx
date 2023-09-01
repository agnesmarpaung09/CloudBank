import React from "react";
import Image from "next/image";
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
const packages = [
  {
    title: 1,
    price: "1.933.146,75",
    iconColor: "orange-500",
    discountedPrice: "2.577.529",
    borderColor: "orange-500",
    features: [
      "Power 1200 Watts",
      "Allocation 5 IP (/29)",
      "Bandwidth 100 Mbps Local",
      "Bandwidth 100 Mbps Intl",
      "Power Outlet 3 Slot PSU",
      "Setup Fee IDR 1.500.000",
    ],
  },
  {
    title: 2,
    price: "3.229.146,75",
    iconColor: "blue-500",
    buttonBg: "blue-500",
    discountedPrice: "4.305.146,75",
    borderColor: "blue-500",
    features: [
      "Power 2200 Watts",
      "Allocation 5 IP (/29)",
      "Bandwidth 100 Mbps Local",
      "Bandwidth 100 Mbps Intl",
      "Power Outlet 6 Slot PSU",
      "Setup Fee IDR 2.250.000",
    ],
  },
  {
    title: 3,
    price: "6.080.346,75",
    iconColor: "green-500",
    discountedPrice: "8.107.129/",
    borderColor: "green-500",
    features: [
      "Power 4400 Watts",
      "Allocation 5 IP (/29)",
      "Bandwidth 100 Mbps Local",
      "Bandwidth 100 Mbps Intl",
      "Power Outlet 12 Slot PSU",
      "Setup Fee IDR 3.000.000",
    ],
  },
];

const RankSolution = () => {
  return (
    <div className="bg-white">
      <div className="bg-blue-900 h-[200px]">
        <div className="text-white relative">
          <div
            className="relative pb-60"
            style={{
              backgroundImage: `url('/Bg-VPS.png')`,
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
            <h1 className="text-3xl font-bold mt-10">
              Sewa Rack Solution Di Batam Termurah
            </h1>
            <p className="text-sm mt-4">
              Sewa Full Rack, Half Rack, Quarter Rack Colocation Dengan Pilihan
              <br />
              Data Center Terbaik Di Batam.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white rounded-lg p-8 text-center">
        <div className="flex justify-center items-center pt-6 mb-10 mt-14">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold absolute z-10 bg-gradient-to-b from-[#DCDCDC] to-white bg-clip-text text-transparent">
            SERVIS KAMI
          </h1>
          <h2 className="capitalize text-xl pt-14 md:text-3xl font-semibold mt-4 xl:mt-6 mb-8 text-center text-[#343A3E] absolute z-10 w-[800px]">
            Servis Kami
          </h2>
        </div>

        <div className="mx-auto max-w-4xl grid md:grid-cols-1 lg:grid-cols-3 gap-16 mt-12 text-justify text-sm justify-center">
          <div className="bg-white shadow-lg p-4 rounded-lg relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-8xl -ml-7 font-bold text-blue-300">
              1
            </div>
            <div className="ml-4">
              <h1 className="text-blue-800 text-sm font-semibold">
                Server Online 24/7
              </h1>
              <p className="mt-2">
                Cloudbank Colocation Server Ini Terletak Pada Pusat Kota Batam
                Yang Akan Selalu Aktif 24 Jam Non Stop Sehingga Menjamin Server
                Anda Akan Selalu Online.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-8xl -ml-8 font-bold text-blue-300">
              2
            </div>
            <div className="ml-4">
              <h1 className="text-blue-800 text-sm font-semibold">
                Keamanan Terjamin
              </h1>
              <p className="mt-2">
                Keamanan Sudah Menjadi Faktor Penting Palam Sebuah Server.
                Cloudbank Colocation Server Menjamin Anda Bahwa Server Ini Akan
                Aman Dari Malware Ataupun Hacker.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-8xl -ml-8 font-bold text-blue-300">
              3
            </div>
            <div className="ml-4">
              <h1 className="text-blue-800 text-sm font-semibold ">
                Bantuan Tim
              </h1>
              <p className="mt-2">
                Cloudbank Colocation Server Akan Siap Membantu Anda Untuk
                Merawat Server Anda Dari Berbagai Jenis Kemungkinan Yang
                Terjadi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center -mt-16">
        <div className="flex justify-center items-center pt-6 mt-24">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold absolute z-10 bg-gradient-to-b from-[#DCDCDC] to-white bg-clip-text text-transparent">
            PILIH PAKET COLOCATION
          </h1>
          <h2 className="capitalize text-xl pt-14 md:text-3xl font-semibold mt-4 xl:mt-6 mb-8 text-center text-[#343A3E] absolute z-10 w-[800px]">
            Pilih Paket Colocation
          </h2>
        </div>

        <div className="relative z-10 ">
          <img
            src="/shape.png"
            alt="Shape"
            width="100"
            height="84"
            className="w-28 h-16 absolute top-0 left-0 mt-44"
          />
        </div>

        <div className="mx-auto">
          <Image
            src="/unsplash.png"
            alt="VPS"
            width={1200}
            height={200}
            className="w-[1920px] h-[200px] top-[1316px] bg-gray-200 mt-52"
          />
          <div className="mx-auto max-w-4xl grid grid-cols-3 gap-8 -mt-72 text-justify text-xs justify-center">
            {packages.map((pkg) => (
              <PackageCard key={pkg.title} {...pkg} />
            ))}
          </div>
        </div>
        <div className="relative z-10 ">
          <img
            src="/shape.png"
            alt="Shape"
            width="100"
            height="84"
            className="w-28 h-16 absolute top-0 right-0 -mt-40"
          />
        </div>
      </section>
    </div>
  );
};

export default RankSolution;
