import React from "react";

const produk_domain = () => {
  const kotakData = [
    { imageSrc: "images/kotak1.png", title: ".art", buttonText: "Beli" },
    { imageSrc: "images/kotak2.png", title: ".asia", buttonText: "Beli" },
    { imageSrc: "images/kotak3.png", title: ".com", buttonText: "Beli" },
    { imageSrc: "images/kotak4.png", title: ".photo", buttonText: "Beli" },
    { imageSrc: "images/kotak4.png", title: ".photo", buttonText: "Beli" },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="images/produk_cloudhosting/BG LAYER 1.png"
          alt="Background Image"
          className="w-full h-1/4 "
        />
      </div>
      <div className="text-center bg-opacity-10 p-24 font-cabinet-grotesk relative z-10">
        <h2 className="text-2xl font-bold mb-3 text-white">Cek dan Beli Domain</h2>
        <h1 className="text-3xl font-bold mb-3 text-white">
          Dimulai dari sebuah nama domain murah dibatam
        </h1>
        <h3 className="text-lg capitalize mx-auto text-white w-[700px]">
          Apakah anda sedang mencari nama domain? Cek nama domain dan temukan
          domain impian anda hanya dengan satu klik!
        </h3>

        <div className="mt-10 flex justify-center items-center mx-auto pb-16 ">
  <input
    type="text"
    placeholder="Cari Nama Domain..."
    className="border p-2 rounded-l-lg focus:outline-none w-3/5"
  />
  <button className="flex items-center bg-orange-500 text-white p-2 rounded-r-lg hover:bg-orange-600 focus:outline-none">
  <img
        src="/images/produk_domain/SEARCH.svg"
        alt="Search Icon"
        className="h-4 w-4 mx-2"
      />
    <span className="">
      Cari domain
     
    </span>
  </button>
</div>





        <div className="mx-auto max-w-5xl grid mb-44 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-56 text-justify justify-center ml-16 mt-">
          {kotakData.map((item, index) => (
         <div key={index} className="h-64 w-48 relative hover:bg-white ml-3">
         <div className="relative h-full w-full flex items-center">
           <img
             src="images/kotak.png"
             alt="Kotak"
             className="h-full w-full"
           />
           <p className="absolute top-2 left-0 w-full text-center text-gray-800 font-bold text-4xl">{item.title}</p>
           <button className="absolute bottom-0 mt-4 left-0 w-full bg-orange-500 text-white py-1 px-2 text-center hover:bg-blue-600 focus:outline-none">{item.buttonText}</button>
         </div>
       </div>
       
          ))}  
        </div>

   <div className="flex items-start">
  <div className="relative h-96 w-72 mx-72">
    <img
      src="/images/produk_domain/Group 290.svg"
      alt="SVG Group 290 "
      className="h-full w-full object-contain"
    />
  </div>

  <div className="ml-0 ">
    <h1 className=" text-2xl font-bold text-left">Fitur Kami</h1>
    <div>
    <p className=" text-base text-left">Harga Murah</p>
    <a className=" text-xs text-justify">harga domain kami terjangkau dan bisa bersaing dengan harga yang murah, membuat keuntungan anda semakin besar dan semakin banyak pelanggan.</a>
  </div>
  <div>
    <p className=" text-base text-left">Harga Murah</p>
    <a className=" text-xs text-justify">harga domain kami terjangkau dan bisa bersaing dengan harga yang murah, membuat keuntungan anda semakin besar dan semakin banyak pelanggan.</a>
  </div>
  <div>
    <p className=" text-base text-left">Harga Murah</p>
    <a className=" text-xs text-justify">harga domain kami terjangkau dan bisa bersaing dengan harga yang murah, membuat keuntungan anda semakin besar dan semakin banyak pelanggan.</a>
  </div>
  <div>
    <p className=" text-base text-left">Harga Murah</p>
    <a className=" text-xs text-justify">harga domain kami terjangkau dan bisa bersaing dengan harga yang murah, membuat keuntungan anda semakin besar dan semakin banyak pelanggan.</a>
  </div>
  </div>
</div>

              <h1 className="text-3xl mt-28 md:text-4 xl:text-5xl font-bold bg-gradient-to-b from-gray-400 to-white bg-clip-text text-transparent">
                PERTANYAAN YANG SERING DITANYAKAN
              </h1>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-semibold text-gray-900">
              Pertanyaan Yang Sering Ditanyakan
              </h2>
              
  <div className="bg-white  items-start p-4 drop-shadow-xl text-justify ">
  <p className="text-xs text-left text-blue-700 ">Apa itu reseller domain? </p>
  <a className ="text-xs ">Dengan reseller domain, anda bisa menjual kembali domain yang ditawarkan di cloudbank ke pelanggan anda, selain itu anda juga mendapatkan harga reseller yang lebih murah.</a>
  <img src="/images/produk_domain/kurang.svg" alt="SVG Icon" className="ml-auto -mt-4" style={{ width: "10px", height: "10px" }} />
</div>

<div className="bg-white items-start p-4 drop-shadow-xl text-justify mt-6 ">
  <p className="text-xs text-left ">Bagaimana cara membeli VPS di cloudbank?</p>
  <img src="/images/produk_domain/tambah.svg" alt="SVG Icon" className="ml-auto -mt-4" style={{ width: "10px", height: "10px" }} />
</div>
     
<div className="bg-white items-start p-4 drop-shadow-xl text-justify mt-6 ">
  <p className="text-xs text-left">Bagaimana cara mendapatkan key credential untuk VPS? </p>
  <img src="/images/produk_domain/tambah.svg" alt="SVG Icon" className="ml-auto -mt-4" style={{ width: "10px", height: "10px" }} />
</div>

<div className="bg-white items-start p-4 drop-shadow-xl text-justify mt-6 ">
  <p className="text-xs text-left ">Bagaimana Cara Menggunakan VPS dari Cloudbank?</p>
  <img src="/images/produk_domain/tambah.svg" alt="SVG Icon" className="ml-auto -mt-4" style={{ width: "10px", height: "10px" }} />
</div>

<div className="relative mt-48">
  <div className="absolute mt-28 ml-40">
    <p className="text-left text-white font-semibold text-2xl "> Anda Mempunyai Pertanyaan?</p>
    <p className="capitalize text-white text-lg pt-2">Silahkan Hubungi langsung help center kami.</p>
  </div>
  <div className="absolute right-0 top-0 text-white font-bold text-xl pt-[120px] mr-52"><p>Hubungi Kami</p>
  </div>
  <img
    src="/images/produk_domain/Group 291.png"
    alt="png Group 291 "
    className=""
  />
</div>
      </div>
    </div>
  );
};

export default produk_domain;
