import React from "react";
import Link from "next/link";


const SoftwareCompany = () => {
  return (
    <div  className="bg-white">
        
      <div className="min-h-screen flex item-center container mx-auto px-5 sm:px-7 pt-32 pb-16 lg:pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/BgSoftwareCompany.png')`,
            height: "103%",
          }}
        ></div>
        <div className="absolute inset-0 flex mt-20 lg:mt-24">
          <div
            id="home"
            className="text-left mx-6 lg:px-12 xl:px-28 2xl:px-48 py-10 mt-24">
            <h1 className=" font-semibold text-white text-lg sm:text-xl lg:text-2xl mb-4 ">
              Software Company
            </h1>
            <h2 className="mt-4 text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 w-full md:w-[500px] lg:w-[700px]">
              Solusi Aman Dan Terjamin Untuk Company Anda
            </h2>
            <p className="mt-4 text-md lg:text-xl text-white w-full md:w-[500px] lg:w-[600px] text-justify">
              Cloudbank Hadir Untuk Membantu Perusahaan Anda Menjadi Yang Terdepan Melalui 
              Layanan Hosting Cloudbank Yang Secure Dan Cepat Untuk Keperluan Company.
            </p>
          </div>
        </div>
      </div>

      <div className="flex max-w-base mx-auto justify-center bg-[#F1F1F1] text-[#606060]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-4">
        <div className="w-80 pr-6">
          <h1 className="font-semibold text-sm text-center mt-16 font-serif">
            Performa Yang Terbaik
          </h1>
          <h2 className="mt-2 text-xs text-justify">
            Performa Maksimal Untuk Pendidikan Yang Lebih Baik Lagi. Cloudbank Memberikan 
            Performa Yang Maksimal Agar Pembelajaran Dapat Dimudahkan.
          </h2>
        </div>
        <div className="w-80 pr-6">
          <h1 className="font-semibold text-sm text-center mt-16 font-serif">
            Keamanan Backup
          </h1>
          <h2 className="mt-2 text-xs text-center">
            Database Anda Akan Di Backup Otomatis Dalam Harian, Mingguan Dan Bulanan.
          </h2>
        </div>
        <div className="w-80">
          <h1 className="font-semibold text-sm text-center mt-16 font-serif">
            Dedicated Support
          </h1>
          <h2 className="mt-2 text-xs text-justify mb-8">
            Kami Memberikan Layanan Support Kepada Pelanggan Dengan Responsif 24/7. 
            Hubungi Kami Kapan Saja, Maka Tim Support Kami Akan Melayani Dan Menyelesaikan Masalah Anda.
          </h2>
        </div>
        </div>
      </div>



    </div>
  );
};  
export default SoftwareCompany;