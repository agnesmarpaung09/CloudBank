import React from "react";
import { dataCloudHosting, dataCloudVPS } from "../datas/reseller.json";
import CloudVPS from "../reseller_page_vps";
import CloudHosting from "../reseller_page_hosting";

const reseller = () => {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen "
        style={{ backgroundImage: `url('/images/bgAffiliate.png')` }}
      >
        <div className="pt-24">
          <h1 className=" text-3xl sm:text-4xl text-center text-[#2C323F] font-bold">
            Cloudbank Reseller
          </h1>
          <p className="capitalize text-sm sm:text-lg text-justify md:text-center text-gray-600 mt-4 px-6 sm:px-12 mx-auto xl:w-[1000px]">
            gabung sekarang untuk membuat bisnis web hosting anda menjadi lebih
            profesional dan dapatkan fitur integrasi user management, white
            label invoice dan markup dengan harga yang jauh lebih murah
          </p>
          <div className=" flex items-center justify-center md:justify-end pt-6 lg:mt-16 px-6 md:px-0 md:pr-32">
            <div className="bg-[#FCFCFC] shadow-2xl rounded-2xl  max-w-lg">
              <div className="bg-[#1373F6]  text-white rounded-t-2xl py-4 ">
                <h2 className=" text-sm sm:text-lg font-semibold mb-2 text-center capitalize">
                  daftar cloudbank reseller sekarang juga!
                </h2>
                <p className="text-xs text-justify sm:text-center capitalize px-4 sm:px-8">
                  dengan bergabung di cloudbank reseller, anda akan mendapatkan
                  harga khusus, prioritas support admin dan berbagai kemudahan
                  lain untuk mengelola website client anda.
                </p>
              </div>
              <form className="px-6 sm:px-8 py-6">
                <span className="text-left text-[#0F70F3] font-bold text-sm sm:text-lg">
                  Daftar Sekarang Juga!
                </span>
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm sm:text-md text-left text-[#606060] pt-2 sm:pt-4"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="-Ketik Nama Lengkap Anda-"
                  className="block text-xs sm:text-sm italic mb-4 p-2 w-full border-blue-300 border rounded-lg placeholder-[#909090] bg-[#f8f8f8] "
                />
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm sm:text-md  text-left text-[#606060] pt-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="-Ketik Email Anda-"
                  className="block text-xs sm:text-sm  italic mb-4 p-2 w-full border-blue-300 border rounded-lg placeholder-[#909090] bg-[#f8f8f8]"
                />
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2  text-sm sm:text-md  text-left text-[#606060] pt-2"
                >
                  Nomor Telepon
                </label>
                <div className="flex">
                  <select
                    id="countryCode"
                    className="block text-xs sm:text-sm  appearance-none p-2 w-12 border-blue-300 border rounded-l-lg bg-white text-[#909090]"
                  >
                    <option value="+62">+62</option>
                    <option value="+62">+93</option>
                    <option value="+62">+91</option>
                    <option value="+62">+33</option>
                    <option value="+62">+34</option>
                    <option value="+62">+51</option>
                  </select>
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="-ketik Nomor telepon anda-"
                    className="block text-xs sm:text-sm  italic p-2 w-full border-blue-300 border rounded-r-lg placeholder-[#909090] bg-[#f8f8f8]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#F97341] text-white text-sm p-2 rounded-lg w-full shadow-inner mt-10 mb-4"
                >
                  DAFTAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9FAFE]">
        <img src="/bgResseller1.svg" alt="" className=" w-12 xl:w-[70px]" />
        <div className="flex justify-center items-center xl:pt-6 ">
          <h1 className="text-center text-2xl md:text-4xl xl:text-5xl  font-bold absolute bg-gradient-to-b from-[#DCDCDC] to-white bg-clip-text text-transparent ">
            KENAPA HARUS BERGABUNG DENGAN
          </h1>
          <h2 className="capitalize text-xl md:text-3xl font-semibold pt-6 md:pt-16 px-6  text-center text-[#343A3E] absolute">
            kenapa harus bergabung dengan cloudbank reseller?
          </h2>
        </div>

        <div className="mx-auto flex flex-col-reverse lg:flex-row">
          <div className="xl:w-2/5  pt-6 sm:pl-12  xl:pl-0 order-2">
            <img src="/images/resseller1.png" alt="resseller" />
          </div>
          <div className="xl:w-3/5 text-[#343A3E] xl:pt-16  leading-relaxed px-6 sm:px-12  xl:pl-32 order-1">
            <div className="mt-4 xl:w-[1060px]  xl:pl-96">
              <img src="/HargaTermurah.svg" alt="HargaTermurah" />
              <h2 className="text-md font-semibold">Harga Termurah</h2>
              <p className=" text-xs capitalize">
                mulai kesuksesan online anda dengan modal bisnis minimal,
                dapatkan harga jual yang bahkan lebih murah dari layanan
                cloudbank. hal ini berlaku untuk order baru dan perpanjangannya
              </p>
            </div>
            <div className="mt-4  xl:w-[1000px] xl:pl-[300px]">
              <img src="/MarkUPHarga.svg" alt="MarkUPHarga" />
              <h2 className="text-md  font-semibold">Mark Up Harga</h2>
              <p className=" text-xs  capitalize">
                beri nama paket hosting yang anda gunakan dan tentukan sendiri
                harga untuk para pelanggan menggunakan fitur markup harga, anda
                dapat mengambil keuntungan tanpa batas sesuai kebutuhan
              </p>
            </div>
            <div className="mt-4  xl:w-[940px] xl:pl-52">
              <img src="/WhiteLabel.svg" alt="WhiteLabel" />
              <h2 className="text-md  font-semibold">White Label</h2>
              <p className="text-xs    capitalize">
                tampilkan identitas bisnis anda dengan memberikan client area
                yang terintegrasi untuk mengelola order dan tagihan dari sistem.
                fitur ini membuat anda seakan-akan memiliki layanan hosting
                sendiri
              </p>
            </div>
            <div className="mt-4  xl:w-[850px] xl:pl-32">
              <img src="/TanpaDeposit.svg" alt="TanpaDeposit" />
              <h2 className="text-md  font-semibold">
                Tanpa Deposit & Biaya Bulanan
              </h2>
              <p className="text-xs  capitalize">
                cloudbank reseller hadir tanpa deposit maupun biaya langganan
                bulanan, anda tidak perlu mengeluarkan cost untuk order yang
                tidak diperlukan. tidak perlu boros lagi. pilih dan bayar order
                hosting sesuai dengan penggunaan client
              </p>
            </div>
            <div className="mt-4  xl:w-[750px] xl:pl-10">
              <img src="/DukunganLayanan.svg" alt="DukunganLayanan" />
              <h2 className="text-md  font-semibold">
                Dukungan Layanan Khusus
              </h2>
              <p className="text-xs  capitalize">
                dengan bergabung di cloudbank reseller, anda akan mendapatkan
                harga khusus, prioritas admin dan berbagai kemudahan lain untuk
                mengelola website client anda
              </p>
            </div>
          </div>
        </div>
        <CloudVPS CloudVPS={dataCloudVPS} />
        <CloudHosting CloudHosting={dataCloudHosting} />
      </div>
    </>
  );
};

export default reseller;
