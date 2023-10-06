"use client";
import React, { useState } from "react";
import Image from "next/image";
import Feature from "./our_feature";
import RekanKami from "./RekanKami";
import { Features } from "./datas/our_feature.json";
import { Partnership } from "./datas/partner_data.json";

function page() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Beragam Paket Hosting
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const images = [
    {
      src: "/images/landing/layer-1.png",
    },
    {
      src: "/images/landing/layer-1.png",
    },
    {
      src: "/images/landing/layer-1.png",
    },
  ];

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  // Fitur Kami

  const renderedSections = <Feature FeatureData={Features} />;

  return (
    <>
      <div className="min-h-screen flex item-center container mx-auto px-5 sm:px-7 pt-4 pb-16 lg:pb-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/landing/bg-layer.png')`,
            height: "113%",
          }}
        >
          <div
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
            style={{ bottom: "30%" }}
          >
            <h1 className="text-white text-xl sm:text-2xl lg:text-3xl mb-4 font-semibold">
              Terpercaya Dan Aman
            </h1>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl mb-3 w-full md:w-[500px] lg:w-[700px] font-semibold">
              JASA DOMAIN DAN HOSTING Di BATAM
            </h2>
            <span className="text-white text-md lg:text-lg block mt-3">
              Cloudbank Memberi Penawaran Terbaik Bagi Anda Yang Membutuhkan
              Jasa Domain Dan Hosting Yang Terpercaya,
            </span>
            <span className="text-white text-md lg:text-lg">
              Kembangkan Serta Wujudkan Layanan Usaha Anda Bersama Kami.
            </span>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8 px-8 items-center mt-28 lg:mt-32">
        <div className="lg:pl-12 xl:pl-28 2xl:pl-40 flex flex-col justify-start">
          <div>
            <h1
              className="text-4xl lg:text-4xl xl:text-4xl 2xl:text-2xl font-semibold mb-4 text-blue-500"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Buat Situs Anda Sekarang Disini!
              <br className="mt-2" />
            </h1>
            <p
              className="text-lg text-black tracking-wider text-justify"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Kembangkan dan Wujudkan Usaha Dan Bisnis Online Anda Bersama Kami.
            </p>
            <div className="flex mt-4 max-w-full justify-center">
              <input
                type="text"
                placeholder="Search Domain..."
                className="border rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-r-lg ml-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center justify-end right-0">
          <img
            src="/images/landing/Maskgroup.png"
            alt=""
            className="rounded-2xl w-full h-auto lg:w-96 lg:h-80"
          />
        </div>
      </div>
      <div className="flex items-center -mb-64">
        <img
          src="/images/landing/ROPE.png"
          alt="rope"
          className="max-w-full h-auto w-40 h-30 mr-2"
        />
      </div>
      <div className="flex flex-col items-center mt-1 xl:mt-0 ">
        <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold absolute bg-gradient-to-b from-[#DCDCDC] to-white bg-clip-text text-transparent">
          JASA DOMAIN, HOSTING, VPS TERBAIK
        </h1>
        <h2 className="capitalize text-xl md:text-3xl font-semibold mt-4 xl:mt-6 mb-8 text-center text-[#343A3E] absolute ">
          Jasa Domain, Hosting, VPS Terbaik
        </h2>
      </div>
      <div className="flex flex-col items-center text-center px-6 mt-16">
        <p className="font-cabinet text-center text-gray-500 text-md lg:text-lg block mt-8">
          Kini Memiliki Domain, Hosting Dan VPS Sendiri Dapat Lebih Terjangkau
          Dan Dengan Sistem Customer{" "}
          <span className="font-cabinet text-gray-500 text-md lg:text-lg block mt-1">
            Support 24 Jam Siap Mendampingi Anda Dan Menawarkan Solusi Terbaik
            Bagi Anda.
          </span>
        </p>
      </div>
      <div className="grid justify-center mt-4">
      <img
       src="/images/landing/Group11710.png"
       alt="JasaDomain"
       className="w-full md:w-auto sm:w-1/2 h-auto"
      />
      </div>


      <div className="flex flex-col items-center mt-28 xl:mt-36 ">
        <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold absolute bg-gradient-to-b from-[#DCDCDC] to-white bg-clip-text text-transparent">
          BERAGAM PAKET HOSTING
        </h1>
        <h2 className="capitalize text-xl md:text-3xl font-semibold mt-4 xl:mt-6 mb-8 text-center text-[#343A3E] absolute ">
          Beragam Paket Hosting
        </h2>
      </div>
      <div className="flex flex-col items-center mt-8 md:mt-16 xl:mt-20 relative">
        <div className="absolute inset-0">
          <div style={{ height: "200px" }}>
            <Image
              src="/images/landing/layer.png"
              alt="paket-hosting"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 md:flex-row">
          {images.map((imageData, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-transform transform ${
                selectedImage === index ? "scale-105" : "scale-100"
              } md:ml-4`}
              onClick={() => handleImageClick(index)}
            >
              <div
                className={`relative rounded-2xl m-4 ${
                  index === 1 ? "-mt-4 md:-mt-14" : ""
                }`}
              >
                <Image
                  src={imageData.src}
                  alt={`Image ${index}`}
                  width={360}
                  height={220}
                  className="rounded-2xl m-4"
                />
                <div
                  className="absolute top-2 bg-opacity-75 p-2 text-center ml-28 text-white"
                  style={{ color: "white", fontSize: "19px" }}
                >
                  {index === 0
                    ? "CLOUD LITE"
                    : index === 1
                    ? "CLOUD SOHO"
                    : "CLOUD STARTUP"}
                </div>
                <div
                  className="absolute top-0 bg-opacity-75 p-2 text-center ml-10 mb-8 text-white"
                  style={{
                    color: "gray",
                    marginTop: "100px",
                    textAlign: "left",
                  }}
                >
                  <div style={{ marginBottom: "20px", fontSize: "30px" }}>
                    <span
                      className={index !== 0 ? "text-gray-500" : ""}
                      style={{ fontSize: "14px" }}
                    >
                      Rp.{" "}
                    </span>
                    <span style={{ color: "black", fontWeight: "600" }}>
                      {index === 0
                        ? "18.000"
                        : index === 1
                        ? "36.000"
                        : "81.000"}
                    </span>
                    <span
                      className={index !== 0 ? "text-gray-500" : ""}
                      style={{ fontSize: "14px" }}
                    >
                      /Bulan
                    </span>
                    <hr
                      className="border-t-2 border-blue-100 mt-1"
                      style={{
                        width: "110%",
                        margin: "auto",
                        marginBottom: "10px",
                      }}
                    />

                    <div style={{ marginBottom: "20px", fontSize: "19px" }}>
                      {index === 0 ? (
                        <>
                          <img
                            src="images/landing/Vector.svg"
                            alt="Image1"
                            className="mr-2 inline-block"
                          />
                          1GB Storage
                        </>
                      ) : index === 1 ? (
                        <>
                          <img
                            src="images/landing/Vector.svg"
                            alt="Image2"
                            className="mr-2 inline-block"
                          />
                          3GB Storage
                        </>
                      ) : index === 2 ? (
                        <>
                          <img
                            src="images/landing/Vector.svg"
                            alt="Image3"
                            className="mr-2 inline-block"
                          />
                          5GB Storage
                        </>
                      ) : null}
                    </div>
                    <div style={{ marginBottom: "20px", fontSize: "19px" }}>
                      {index === 0 ? (
                        <>
                          <img
                            src="images/landing/Vector.svg"
                            alt="Database Image"
                            className="mr-2 inline-block"
                          />
                          Unlimited Database
                        </>
                      ) : index === 1 ? (
                        <>
                          <img
                            src="images/landing/Vector.svg"
                            alt="Database Image"
                            className="mr-2 inline-block"
                          />
                          Unlimited Database
                        </>
                      ) : index === 2 ? (
                        <>
                          <img
                            src="images/landing/Vector.svg"
                            alt="Database Image"
                            className="mr-2 inline-block"
                          />
                          Unlimited Database
                        </>
                      ) : null}
                    </div>

                    <div style={{ marginBottom: "20px", fontSize: "19px" }}>
                      {index === 0 ? (
                        <>
                          <img
                            src="images/landing/Vector.svg"
                            alt="SSL Image"
                            className="mr-2 inline-block"
                          />
                          Free SSL
                        </>
                      ) : index === 1 ? (
                        <>
                          <img
                            src="images/landing/Vector.svg"
                            alt="SSL Image"
                            className="mr-2 inline-block"
                          />
                          Free SSL
                        </>
                      ) : index === 2 ? (
                        <>
                          <img
                            src="images/landing/Vector.svg"
                            alt="SSL Image"
                            className="mr-2 inline-block"
                          />
                          Free SSL
                        </>
                      ) : null}
                    </div>

                    <div
                      style={{
                        marginBottom: "20px",
                        fontSize: "19px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="images/landing/Vector.svg"
                        alt="Backup Image"
                        className="mr-2 inline-block"
                      />
                      {index === 0 ? (
                        <>14 Days Backup Retention</>
                      ) : index === 1 ? (
                        <>14 Days Backup Retention</>
                      ) : index === 2 ? (
                        <>14 Days Backup Retention</>
                      ) : null}
                    </div>

                    <div
                      style={{
                        marginBottom: "20px",
                        fontSize: "19px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="images/landing/Vector.svg"
                        alt="Domain Image"
                        className="mr-2 inline-block"
                      />
                      {index === 0 ? (
                        <>1 Domain</>
                      ) : index === 1 ? (
                        <>3 Domain</>
                      ) : index === 2 ? (
                        <>6 Domain</>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div
                  className={`absolute ${
                    index === 1 ? "right-0 md:right-10 md:ml-3" : "right-0"
                  } bottom-2 bg-opacity-85 p-2 text-center ${
                    index === 1 ? "bg-blue-600 text-white" : "text-blue-500"
                  } rounded-md`}
                  style={{
                    fontSize: "20px",
                    width: index === 1 ? "310px" : "100%",
                    height: index === 1 ? "62px" : "auto",
                    top: index === 1 ? "87.5%" : "auto",
                  }}
                >
                  Beli Sekarang
                  <span
                    className={`font-bold cursor-pointer ml-2 ${
                      index === 1 ? "text-white" : "text-blue-500"
                    }`}
                  >
                    <svg
                      className="w-6 h-6 inline-block transform rotate-180 ml-24"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5M12 19l-7-7 7-7"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <span
          className="text-blue-500 text-md cursor-pointer"
          style={{ textDecoration: "underline", fontWeight: "semibold" }}
        >
          Lihat Paket Lainnya
          <img
            src="/images/landing/panah.svg"
            alt="Lihat Paket Lainnya"
            className="inline-block ml-3"
          />
        </span>
      </div>

      <div className="flex items-center">
        <img
          src="/images/landing/maskgroup-4.png"
          alt="maskgroup-4"
          className="max-w-full w-25 h-20 mr-2"
        />
      </div>
      <div className="flex flex-col items-center mt-28 xl:mt-40 ">
        <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold absolute bg-gradient-to-b from-[#DCDCDC] to-white bg-clip-text text-transparent">
          FITUR KAMI
        </h1>
        <h2 className="capitalize text-xl md:text-3xl font-semibold mt-4 xl:mt-6 mb-8 text-center text-[#343A3E] absolute ">
          Fitur Kami
        </h2>
      </div>

      <div className="flex mt-20 justify-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ml-4">
          {renderedSections}
        </div>
      </div>
      <div className="flex justify-end items-center">
        <img
          src="/images/landing/maskgroup-5.png"
          alt="maskgroup-5"
          className="w-35 h-20 ml-2"
        />
      </div>

      <div className="flex justify-left items-left h-screen mt-20">
        <div className="relative md:max-w-lg -mt-4">
          <img
            src="/images/landing/Rekan.png"
            alt="Image 1"
            width={600}
            height={400}
          />
          <img
            src="/images/landing/RekanKerja.png"
            alt="Image 2"
            width={400}
            height={300}
            className="absolute top-6 right-0 w-2/3 h-auto "
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-8 px-8 ">
          <div className="lg:pl-12 xl:pl-28 2xl:pl-40 flex flex-col justify-start">
            <div>
              <h1
                className="text-lg mb-4 text-gray-500"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Support 24/7
              </h1>
              <p
                className="text-4xl sm:text-5xl lg:text-5xl xl:text-4xl 2xl:text-3xl text-black tracking-wider font-bold"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Kami Selalu Ada Untuk Anda
              </p>
              <div className="mt-6">
                <div className="flex items-center">
                  <img
                    src="images/landing/WHATSAPP.svg"
                    className="w-6 h-6 mr-4 -mt-4"
                  />
                  <a
                    href="https://example.com/live-chat"
                    className="text-blue-500 underline block mb-4"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    Live Chat WhatsApp
                  </a>
                </div>
                <div className="flex items-center">
                  <img
                    src="images/landing/SALES SUPPORT.svg"
                    className="w-6 h-6 mr-4 -mt-4"
                  />
                  <a
                    href="https://example.com/sales-support"
                    className="text-blue-500 underline block mb-4"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    Sales Support
                  </a>
                </div>
                <div className="flex items-center">
                  <img
                    src="images/landing/EMAIL.svg"
                    className="w-6 h-6 mr-4 -mt-4"
                  />
                  <a
                    href="mailto:support@example.com"
                    className="text-blue-500 underline block mb-4"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    Email
                  </a>
                </div>
                <div className="flex items-center">
                  <img
                    src="images/landing/KNOWLEDGE BASE.svg"
                    className="w-6 h-6 mr-4 -mt-4"
                  />
                  <a
                    href="https://example.com/knowledge-base"
                    className="text-blue-500 underline block mb-4"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    Knowledge Base
                  </a>
                </div>
                <div className="flex items-center">
                  <img
                    src="images/landing/CONTACT.svg"
                    className="w-6 h-6 mr-4 -mt-4"
                  />
                  <a
                    href="https://example.com/contact"
                    className="text-blue-500 underline block mb-4"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    Contact
                  </a>
                </div>
                <div>
                  <h1
                    className="text-lg mb-4 mt-4 text-black"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    Metode Pembayaran Kami:
                  </h1>
                </div>
                <div className="flex flex-col sm:flex-row items-center md:pt-4">
                  <img
                    src="/images/landing/bca.png"
                    alt="bca"
                    className="w-12 h-4 md:w-16 md:h-6 mr-2 cursor-pointer"
                  />
                  <img
                    src="/images/landing/MANDIRI.png"
                    alt="mandiri"
                    className="w-12 h-4 md:w-16 md:h-6 mr-2 cursor-pointer"
                  />
                  <img
                    src="/images/landing/PERMATA BANK.png"
                    alt="permata-bank"
                    className="w-16 h-6 md:w-18 md:h-8 mr-2 cursor-pointer"
                  />
                  <img
                    src="/images/landing/GOPAY.png"
                    alt="gopay"
                    className="w-13 h-4 md:w-17 md:h-6 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center -mt-80">
          <img
            src="/images/landing/tanya.png"
            alt="tanya"
            className="max-w-full h-auto w-60 h-45 mr-2"
          />
        </div>
      </div>

      <RekanKami RekanKamiData={Partnership} />

      <div className="grid sm:grid-cols-2 gap-0 px-8 items-center mt-28 xl:mt-36">
        <div className="lg:pl-12 xl:pl-28 2xl:pl-40 flex flex-col justify-start ml-20">
          <h1
            className="text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-semibold mb-4 text-blue-700"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Jadilah Rekan Kami
            <br />
            sekarang juga!
            <br />
          </h1>

          <div className="w-full max-w-lg -ml-8">
            <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
              {/* Email Input */}
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password Input */}
              <div className="mb-6 relative">
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                  onClick={handlePasswordVisibility}
                >
                  <Image
                    src="/images/landing/eyes.svg"
                    alt={showPassword ? "Hide Password" : "Show Password"}
                    width={28}
                    height={28}
                  />
                </button>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center">
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline w-full"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="md:max-w-lg -mt-4">
          <img
            src="/images/landing/RekanKerja-2.png"
            alt="RekanKerja"
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}

export default page;
