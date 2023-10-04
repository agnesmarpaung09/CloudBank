import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Colocations from "../colocations";
import { Package } from "../datas/colocations.json";

const Colocation = () => {
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
            <h1 className="text-4xl font-bold mt-10">
              Colocation Server Batam Dan Indonesia
            </h1>
            <p className="text-sm mt-4">
              Colocation Server Termurah, Mulai Dari 510rb / bulan Dengan
              Pilihan <br />
              Datacenter Terbaik Di Batam.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white rounded-lg p-8 text-center">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold z-10 bg-gradient-to-b from-[#DCDCDC] to-white bg-clip-text text-transparent">
          SERVIS KAMI
        </h1>
        <h2 className="capitalize text-xl md:text-3xl font-semibold mb-8 text-[#343A3E] z-10">
          Servis Kami
        </h2>
        <div className="mx-auto max-w-4xl grid md:grid-cols-1 lg:grid-cols-3 gap-16 mt-12 text-justify text-sm justify-center">
          <div className="bg-white shadow-lg p-4 flex items-center rounded-lg relative">
            <div className="left-0 top-1/2 transform text-8xl -ml-12 font-bold text-blue-300">
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
          <div className="bg-white shadow-lg p-4 flex items-center rounded-lg relative">
            <div className="left-0 top-1/2 transform text-8xl -ml-12 font-bold text-blue-300">
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
          <div className="bg-white shadow-lg p-4 rounded-lg relative flex items-center">
            <div className="left-0 top-1/2 transform text-8xl -ml-12 font-bold text-blue-300">
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
        {/* <div className="flex justify-center items-center pt-6 mt-24"> */}
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold z-10 bg-gradient-to-b from-[#DCDCDC] to-white bg-clip-text text-transparent">
          PILIH PAKET COLOCATION
        </h1>
        <h2 className="capitalize text-xl md:text-3xl font-semibold mb-8 text-[#343A3E] z-10">
          Pilih Paket Colocation
        </h2>
        {/* </div> */}

        <div className="relative z-10 ">
          <img
            src="/shape.png"
            alt="Shape"
            width="100"
            height="84"
            className="w-28 h-16 absolute top-0 left-0 mt-36"
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
          {/* <div className="mx-auto max-w-4xl grid md:grid-cols-3 gap-12 -mt-72 text-justify text-xs justify-center">
            {Package.map((pkg) => (
              <PackageCard key={pkg.title} {...pkg} />
            ))}
          </div> */}
          <Colocations ColocationsData={Package} />
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
export default Colocation;
