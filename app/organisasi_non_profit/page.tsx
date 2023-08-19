import React from "react";
import Image from 'next/image';
import Testimonial from "../testimonial";


const OrganisasiNonProfit = () => {
  return (
    <div  className="bg-white">
      <div className="min-h-screen flex item-center container mx-auto px-5 sm:px-7 pt-32 pb-16 lg:pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/BgOrganisasiNonProfit.png')`,
            height: "103%",
          }}
        ></div>
        <div className="absolute inset-0 flex mt-20 lg:mt-24">
          <div
            id="home"
            className="text-left mx-6 lg:px-12 xl:px-28 2xl:px-48 py-10 mt-24">
            <h1 className=" font-semibold text-white text-sm sm:text-lg lg:text-lg mb-2 ">
              Organisasi Non Profit
            </h1>
            <h2 className="mt-2 text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 w-full md:w-[400px] lg:w-[600px]">
              Cloudbank Memahami Pentingnya Misi Anda
            </h2>
            <p className="mt-8 text-md lg:text-lg text-white w-full md:w-[400px] lg:w-[600px] text-justify">
              Cloudbank Menawarkan Layanan Hosting Yang Memadai, kami Selalu Memberikan Performa Yang Tinggi,
              Keamanan Yang Terjamin dan Integrasi Mudah Dengan Sistem Manajemen Pembelajaran.
            </p>
          </div>
        </div>
      </div>
      <div className="flex max-w-base mx-auto justify-center bg-[#F1F1F1] text-[#606060]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-4 ml-10">
        <div className="w-80">
          <div className="border-r-4 h-20 mt-16 "></div>
          <h1 className="font-semibold text-sm text-center -mt-24 mr-6">
            Performa Yang Terbaik
          </h1>
          <h2 className="mt-2 text-xs text-justify mr-10">
            Performa Maksimal Untuk Pendidikan Yang Lebih Baik Lagi. Cloudbank Memberikan 
            Performa Yang Maksimal Agar Pembelajaran Dapat Dimudahkan.
          </h2>
        </div>
        <div className="w-72">
        <div className="border-r-4 h-20 mt-16"></div>
          <h1 className="font-semibold text-sm text-center -mt-24">
            Keamanan Backup
          </h1>
          <h2 className="mt-2 text-xs text-center mr-4">
            Database Anda Akan Di Backup Otomatis Dalam Harian, Mingguan Dan Bulanan.
          </h2>
        </div>
        <div className="w-72">
          <h1 className="font-semibold text-sm text-center mt-12">
            Dedicated Support
          </h1>
          <h2 className="mt-2 text-xs text-justify mb-8">
           layanan Hosting Kami Memberikan Platform Yang Handal Bagi Organisasi Non Profit 
           Untuk Membagikan Pesan Mereka Dan Mengumpulkan Donasi Dengan Aman
          </h2>
        </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 px-8 items-center mt-24 lg:mt-28">
      <div className="grid justify-center">
        <Image 
          src="/images/OrganisasiNonProfit.PNG"
          alt="Another Image"
          width={300} 
          height={300}
          className="rounded-2xl sm:w-auto sm:h-64 lg:w-auto lg:h-80"
        />
      </div>

      <div className="lg:pr-12 xl:pr-28 2xl:pr-40 text-left">
        <h1 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl font-bold mb-4 lg:w-[500px]">
          Cloudbank Memberikan Layanan Terbaik Untuk Keperluan Organisasi Mu
        </h1>
        <p className="text-md tracking-wider text-justify">
          Manfaatkan Layanan Hosting Kami Yang Terjangkau Dan Dukungan Yang Berdedikasi Untuk 
          Menciptakan Dampak Yang Baik Secara Online.
        </p>
        </div>
      </div>

      <div className="flex items-center flex-col mt-24 bg-contain bg-no-repeat font-cabinet-grotesk relative">
        <div className="relative w-full h-48">
          <Image 
            src="/images/banner.PNG"
            alt="Another Image"
            layout="fill"
            objectPosition="center"
            className="w-full h-full"
          />
          <div className="absolute top-10 w-full h-full text-center text-white  ">
            <h1 className=" font-bold text-white sm:text-lg lg:text-xl w-full mb-2">Beragam Paket Hosting</h1>
            <p className="text-xs sm:text-base lg:text-lg">
             Kami Menyediakan Berbagai Paket Cloud Hosting Yang Sesuai Dengan Keperluan Anda.
            </p>
            <button className="text-xs text-white bg-[#FA753E] px-4 py-2 rounded-xl mt-2">Cek Paket Cloud Hosting</button>
          </div> 
        </div>
      </div>  
      <Testimonial />
    </div>
  );
};  
export default OrganisasiNonProfit;