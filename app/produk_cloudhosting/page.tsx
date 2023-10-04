"use client";
import React, { useState } from "react";
import Modal from "../components/modal";
import ProductCloudHosting from "../product_cloud";
import { ProductCloudHostings } from "../datas/productcloudhosting.json";

const ProdukCloudHosting = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <div className="relative  overflow-auto">
        <div className=" w-full overflow-auto" >
          <div className="inset-0">
            <img
              src="images/produk_cloudhosting/BG LAYER 1.png"
              alt="Background Image"
              className="w-full h-1/4 "
            />
          </div>


          <div className="top-0 left-0 flex flex-col justify-center items-center text-white bg-opacity-50 -mt-52 ">
            <h1 className="capitalize text-3xl font-bold ">
              Hosting Batam Cepat dan Terpercaya
            </h1>
            <h3 className="text-lg text-center text-md-start capitalize mx-auto w-100 w-md-75">
              Mulailah pengalaman bisnis online anda dengan hosting bersama
              cloudbank dengan layanan terpercaya
            </h3>

          </div>

          <div className="text-center bg-opacity-10 p-8 md:p-24 font-cabinet-grotesk relative  ">

            <div className="flex justify-center items-center h-screen  ">
              <div className="text-center ">
                <h1 className="text-3xl md:text-4 xl:text-5xl font-bold bg-gradient-to-b from-gray-400 to-white bg-clip-text text-transparent">
                  PAKET HARGA CLOUD HOSTING
                </h1>
                <h2 className="text-xl md:text-2xl xl:text-3xl font-semibold text-gray-900">
                  Paket Harga Cloud Hosting
                </h2>

                <div className=" flex justify-center mt-4 ">
                  <div className='w-full md:max-w-5xl overflow-x-auto'>

                    <table className=" w-full table-auto border md:border-collapse ">
                      <thead>
                        <tr className="text-sm">
                          <th className="border bg-cyan-50 text-xl text-justify px-4 py-2 w-[150px] ">
                            Pilih Rencana Anda
                          </th>
                          <th className="border text-gray-700 text-sm px-4 py-2 w-[100px]">
                            Cloud Lite
                            <p className="text-blue-800 mt-3">
                              <span
                                className="text-xs"
                                style={{ verticalAlign: "0.5em" }}
                              >
                                Rp
                              </span>{" "}
                              18rb/Bulan
                            </p>
                            <button
                              onClick={() => {
                                setOpenModal(true)
                              }}
                              className="border z-[99] bg-blue-500 border-blue-400 w-24 p-2 text-white px-2 py-1 rounded-lg mt-3"
                            >
                              Beli
                            </button>
                          </th>
                          <th className="border px-4 py-2 w-[100px]">
                            Cloud Soho
                            <p className="text-blue-800 mt-3">
                              <span
                                className="text-xs"
                                style={{ verticalAlign: "0.5em" }}
                              >
                                Rp
                              </span>{" "}
                              36rb/Bulan
                            </p>
                            <button className=" border z-[99] border-blue-400 w-24 text-blue-500 px-2 py-1 rounded-lg mt-3">
                              Beli
                            </button>
                          </th>
                          <th className="border px-4 py-2 w-[100px]">
                            Cloud Startup
                            <p className="text-blue-800 mt-3">
                              <span
                                className="text-xs"
                                style={{ verticalAlign: "0.5em" }}
                              >
                                Rp
                              </span>{" "}
                              81rb/Bulan
                            </p>
                            <button className="border border-blue-400 w-24 p-2 text-blue-500 px-2 py-1 rounded-lg mt-3">
                              Beli
                            </button>
                          </th>
                          <th className="border px-4 py-2 w-[100px]">
                            Cloud SME
                            <p className="text-blue-800 mt-3">
                              <span
                                className="text-xs"
                                style={{ verticalAlign: "0.5em" }}
                              >
                                Rp
                              </span>{" "}
                              126rb/Bulan
                            </p>
                            <button className="border border-blue-400 w-24 p-2 text-blue-500 px-2 py-1 rounded-lg mt-3">
                              Beli
                            </button>
                          </th>
                          <th className="border px-4 py-2 w-[100px]">
                            Cloud Pro
                            <p className="text-blue-800 mt-3">
                              <span
                                className="text-xs"
                                style={{ verticalAlign: "0.5em" }}
                              >
                                Rp
                              </span>{" "}
                              225rb/Bulan
                            </p>
                            <button className="border border-blue-400 p-2 w-24 text-blue-500 px-2 py-1 rounded-lg mt-3">
                              Beli
                            </button>
                          </th>
                          <th className="border px-4 py-2 w-[100px]">
                            Cloud Premium
                            <p className="text-blue-800 mt-3">
                              <span
                                className="text-xs"
                                style={{ verticalAlign: "0.5em" }}
                              >
                                Rp
                              </span>{" "}
                              540rb/Bulan
                            </p>
                            <button className="border border-blue-400  w-24 p-2 text-blue-500 px-2 py-1 rounded-lg mt-3">
                              Beli
                            </button>
                          </th>
                          <th className="border  px-4 py-2 w-[150px]">
                            Cloud Enterprise
                            <p className="text-blue-800 mt-3">
                              <span
                                className="text-xs"
                                style={{ verticalAlign: "0.5em" }}
                              >
                                Rp
                              </span>{" "}
                              1.080rb/Bulan
                            </p>
                            <button className="border border-blue-400 p-2 w-24 text-blue-500 px-2 py-1 rounded-lg mt-3">
                              Beli
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <ProductCloudHosting ProductCloudHostingData={ProductCloudHostings} />
                    </table>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  w-full sm:w-[1050px] mx-auto  ">
          <div className="">
            <p className=" text-gray-800 font-semibold text-2xl ">
              {" "}
              Pelayanan Kami
            </p>
            <p className="capitalize  text-gray-700 text-lg pt-2 w-[350px]">
              kenapa memilih cloudbank sebagai partner anda?
            </p>
            <img src="images/produk_cloudhosting/Group 1.png" className="w-96 h-96" alt=" Image" />
          </div>
          <div className=" pt-8 flex ">


            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-12">
              <div className="bg-white drop-shadow-xl p-4 rounded-lg shadow-md w-64 h-64 hover:bg-gray-50 transition duration-100">
                <div className=" flex  justify-center">
                  <img
                    src="images/produk_cloudhosting/aman dan terjaga.png"
                    alt=" Image"
                    className=" max-w-full max-h-16"
                  />
                </div>

                <p className="text-gray-800 font-semibold text-lg text-center mr-2 mb-2 mt-8 ">
                  Aman dan Terjaga
                </p>
                <h3 className="text-gray-500  mr-2 mb-2 text-xs capitalize text-justify">
                  Kepercayaan anda adalah prioritas kami untuk memastikan keamanan
                  data, tampilan, informasi maupun responsibilitas agar tetap
                  terjaga dari malware atau pun hacker.
                </h3>
              </div>

              {/* Kotak kedua */}
              <div className="bg-white drop-shadow-xl p-4 rounded-lg shadow-md w-64 h-64 hover:bg-gray-50 transition duration-100">
                <div className=" flex  justify-center">
                  <img
                    src="images/produk_cloudhosting/dedicate.png"
                    alt=" Image"
                    className=" max-w-full max-h-16"
                  />
                </div>

                <p className="text-gray-800 font-semibold text-lg text-center mr-2 mb-2 mt-8 ">
                  Dedicate Support
                </p>
                <h3 className="text-gray-500  mr-2 mb-2 text-xs capitalize text-justify">
                  Kami memberikan layanan support kepada pelanggan dengan
                  responsif 24/7. Hubungi kami kapan saja, maka tim support kami
                  akan melayani dan menyelesaikan masalah Anda.
                </h3>
              </div>

              {/* Kotak ketiga */}
              <div className="bg-white drop-shadow-xl p-4 rounded-lg shadow-md w-64 h-64 hover:bg-gray-50 transition duration-100">
                <div className=" flex  justify-center">
                  <img
                    src="images/produk_cloudhosting/garansi uptime.png"
                    alt=" Image"
                    className=" max-w-full max-h-16"
                  />
                </div>

                <p className="text-gray-800 font-semibold text-lg text-center mr-2 mb-2 mt-8 ">
                  Garansi Uptime
                </p>
                <h3 className="text-gray-500  mr-2 mb-2 text-xs capitalize text-justify">
                  Ketidakpuasan anda terhadap layanan Cloudbank dapat diklaim
                  sehingga garansi uang kembali sesuai syarat dan ketentuan yang
                  berlaku.
                </h3>
              </div>

              {/* Kotak keempat */}
              <div className="bg-white drop-shadow-xl p-4 rounded-lg shadow-md w-64 h-64 hover:bg-gray-50 transition duration-100">
                <div className=" flex  justify-center">
                  <img
                    src="images/produk_cloudhosting/keamanan backup.png"
                    alt=" Image"
                    className=" max-w-full max-h-16"
                  />
                </div>

                <p className="text-gray-800 font-semibold text-lg text-center mr-2 mb-2 mt-8 ">
                  keamanan backup
                </p>
                <h3 className="text-gray-500  mr-2 mb-2 text-xs capitalize text-justify">
                  Database anda akan di backup otomatis dalam harian, mingguan,
                  dan bulanan.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <Modal
          open={openModal}
          setOpen={setOpenModal}
          key={1}
        />
      </div>
    </>
  );
};

export default ProdukCloudHosting;