import React from "react";

const reseller = () => {
  const dataCloudHosting = [
    {
      namaPaket: "Cloud Lite",
      HargaNormalBulan: "Rp.18.000",
      basic: "Rp.16.200",
      intermidiate: "Rp.15.300",
      pro: "Rp.14.400",
    },
    {
      namaPaket: "Cloud Soho",
      HargaNormalBulan: "Rp.36.000",
      basic: "Rp.32.400",
      intermidiate: "Rp.30.600",
      pro: "Rp.28.800",
    },
    {
      namaPaket: "Cloud Start Up",
      HargaNormalBulan: "Rp.81.000",
      basic: "TBA",
      intermidiate: "TBA",
      pro: "TBA",
    },
    {
      namaPaket: "Cloud SME",
      HargaNormalBulan: "Rp.126.000",
      basic: "TBA",
      intermidiate: "TBA",
      pro: "TBA",
    },
    {
      namaPaket: "Cloud Pro",
      HargaNormalBulan: "Rp.225.000",
      basic: "TBA",
      intermidiate: "TBA",
      pro: "TBA",
    },
    {
      namaPaket: "Cloud Premium",
      HargaNormalBulan: "Rp.540.000",
      basic: "TBA",
      intermidiate: "TBA",
      pro: "TBA",
    },
    {
      namaPaket: "Cloud Enterprise",
      HargaNormalBulan: "Rp.1.080.000",
      basic: "TBA",
      intermidiate: "TBA",
      pro: "TBA",
    },
  ];

  const dataCloudVPS = [
    {
      namaPaket: "Cloud VPS1",
      HargaNormalBulan: "Rp.89.000",
      basic: "Rp.243.000",
      intermidiate: "Rp.229.500",
      pro: "Rp.216.000",
    },
    {
      namaPaket: "Cloud VPS2",
      HargaNormalBulan: "Rp.209.000",
      basic: "Rp.486.000",
      intermidiate: "Rp.459.000",
      pro: "Rp.432.000",
    },
    {
      namaPaket: "Cloud VPS3",
      HargaNormalBulan: "Rp.629.000",
      basic: "TBA",
      intermidiate: "TBA",
      pro: "TBA",
    },
    {
      namaPaket: "Cloud VPS4",
      HargaNormalBulan: "Rp.809.000",
      basic: "TBA",
      intermidiate: "TBA",
      pro: "TBA",
    },
    {
      namaPaket: "Cloud VPS5",
      HargaNormalBulan: "Rp.1.499.000",
      basic: "TBA",
      intermidiate: "TBA",
      pro: "TBA",
    },
    {
      namaPaket: "Cloud VPS6",
      HargaNormalBulan: "Rp.2.059.000",
      basic: "4.158.000",
      intermidiate: "Rp.3.927.000",
      pro: "Rp.3.696.000",
    },
    {
      namaPaket: "Cloud Storage PMI",
      HargaNormalBulan: "Rp.28.175.000",
      basic: "TBA",
      intermidiate: "TBA",
      pro: "TBA",
    },
    {
      namaPaket: "Cloud Univ",
      HargaNormalBulan: "Rp.300.000",
      basic: "TBA",
      intermidiate: "TBA",
      pro: "TBA",
    },
    {
      namaPaket: "Cloud VPS7",
      HargaNormalBulan: "Rp.2.889.000",
      basic: "TBA",
      intermidiate: "TBA",
      pro: "TBA",
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen "
        style={{ backgroundImage: `url('/images/bgAffiliate.png')` }}
      >
        <div className="pt-24">
          <h1 className=" text-3xl sm:text-4xl text-center text-[#2C323F] font-bold ">
            Cloudbank Reseller
          </h1>
          <p className=" text-sm sm:text-lg text-justify md:text-center capitalize text-gray-600 mt-4 px-6 sm:px-12 mx-auto md:w-[1000px]">
            gabung sekarang untuk membuat bisnis web hosting anda menjadi lebih
            profesional dan dapatkan fitur integrasi user management, white
            label invoice dan markup dengan harga yang jauh lebih murah
          </p>

          <div className=" flex items-center justify-center md:justify-end mt-10 md:mt-16 px-6 md:px-0 md:pr-32">
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
        <img src="/bgResseller1.svg" alt="HargaTermurah" className="w-[70px]" />
        <div className="flex justify-center items-center pt-6">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold absolute z-10 bg-gradient-to-b from-[#DCDCDC] to-white bg-clip-text text-transparent">
            KENAPA HARUS BERGABUNG DENGAN
          </h1>
          <h2 className="capitalize text-xl pt-10 md:text-3xl  font-semibold mt-4 xl:mt-6 mb-8 text-center text-[#343A3E] absolute z-10">
            kenapa harus bergabung dengan cloudbank reseller?
          </h2>
        </div>

        <div className="mx-auto flex flex-col md:flex-row">
          <div className="flex ">
            <div className=" w-3/5 text-[#343A3E]  pt-16 leading-relaxed pl-32">
              <div className="mt-4 w-[1060px]  pl-96">
                <img src="/HargaTermurah.svg" alt="HargaTermurah" />
                <h2 className="text-md  font-semibold">Harga Termurah</h2>
                <p className=" text-xs capitalize">
                  mulai kesuksesan online anda dengan modal bisnis minimal,
                  dapatkan harga jual yang bahkan lebih murah dari layanan
                  cloudbank. hal ini berlaku untuk order baru dan
                  perpanjangannya
                </p>
              </div>
              <div className="mt-4  w-[1000px] pl-[300px]">
                <img src="/MarkUPHarga.svg" alt="MarkUPHarga" />
                <h2 className="text-md  font-semibold">Mark Up Harga</h2>
                <p className=" text-xs  capitalize">
                  beri nama paket hosting yang anda gunakan dan tentukan sendiri
                  harga untuk para pelanggan menggunakan fitur markup harga,
                  anda dapat mengambil keuntungan tanpa batas sesuai kebutuhan
                </p>
              </div>
              <div className="mt-4  w-[940px] pl-52">
                <img src="/WhiteLabel.svg" alt="WhiteLabel" />
                <h2 className="text-md  font-semibold">White Label</h2>
                <p className="text-xs    capitalize">
                  tampilkan identitas bisnis anda dengan memberikan client area
                  yang terintegrasi untuk mengelola order dan tagihan dari
                  sistem. fitur ini membuat anda seakan-akan memiliki layanan
                  hosting sendiri
                </p>
              </div>
              <div className="mt-4  w-[850px] pl-32">
                <img src="/TanpaDeposit.svg" alt="TanpaDeposit" />
                <h2 className="text-md  font-semibold">
                  Tanpa Deposit & Biaya Bulanan
                </h2>
                <p className="text-xs  capitalize">
                  cloudbank reseller hadir tanpa deposit maupun biaya langganan
                  bulanan, anda tidak perlu mengeluarkan cost untuk order yang
                  tidak diperlukan. tidak perlu boros lagi. pilih dan bayar
                  order hosting sesuai dengan penggunaan client
                </p>
              </div>
              <div className="mt-4  w-[750px] pl-10">
                <img src="/DukunganLayanan.svg" alt="DukunganLayanan" />
                <h2 className="text-md  font-semibold">
                  Dukungan Layanan Khusus
                </h2>
                <p className="text-xs  capitalize">
                  dengan bergabung di cloudbank reseller, anda akan mendapatkan
                  harga khusus, prioritas admin dan berbagai kemudahan lain
                  untuk mengelola website client anda
                </p>
              </div>
            </div>
            <div className="w-2/5 pt-6">
              <img src="/images/resseller1.png" alt="resseller" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <div className="w-full max-w-[1060px] overflow-x-auto ">
            <div className="md:flex flex-col">
              <h2 className="text-2xl font-semibold mb-4">Cloud Hosting</h2>
              <table className="w-full md:w-auto table-auto border md:border-collapse rounded-xl overflow-hidden">
                <thead>
                  <tr>
                    <th
                      className="pl-4 bg-[#1171F5] text-left text-[#FFFFFF] w-48"
                      rowSpan={2}
                    >
                      Nama Paket
                    </th>
                    <th
                      className="pl-4 bg-[#1171F5] text-left border-b border text-[#FFFFFF] w-80"
                      rowSpan={2}
                    >
                      Harga Normal / Bulan
                    </th>
                    <th
                      className="py-3 bg-[#1171F5] border-b border text-[#FFFFFF] "
                      colSpan={3}
                    >
                      Harga Reseller / Bulan
                    </th>
                  </tr>
                  <tr className="bg-[#1171F5] text-[#FFFFFF]">
                    <td className="border py-3 text-center">Basic</td>
                    <td className="border text-center">Intermidiate</td>
                    <td className="border text-center">Pro</td>
                  </tr>
                </thead>
                <tbody>
                  {dataCloudHosting.map((row, index) => (
                    <tr>
                      <td className="border pl-4 py-3 text-left font-semibold text-[#343A3E]">
                        {row.namaPaket}
                      </td>
                      <td className="border pl-4 text-left text-[#909090]">
                        {row.HargaNormalBulan}
                      </td>
                      <td className="border pl-4 text-left  text-[#909090]">
                        {row.basic}
                      </td>
                      <td className="border pl-4 text-left text-[#909090]">
                        {row.intermidiate}
                      </td>
                      <td className="border pl-4 text-left  text-[#909090]">
                        {row.pro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="w-full max-w-[1060px] overflow-x-auto ">
            <div className="md:flex flex-col">
              <h2 className="text-2xl font-semibold mb-4">Cloud Vps</h2>
              <table className="w-full md:w-auto table-auto border md:border-collapse rounded-xl overflow-hidden">
                <thead>
                  <tr>
                    <th
                      className="pl-4 bg-[#1171F5] text-left text-[#FFFFFF] w-48"
                      rowSpan={2}
                    >
                      Nama Paket
                    </th>
                    <th
                      className="pl-4 bg-[#1171F5] text-left border-b border text-[#FFFFFF] w-80"
                      rowSpan={2}
                    >
                      Harga Normal / Bulan
                    </th>
                    <th
                      className="py-3 bg-[#1171F5] border-b border text-[#FFFFFF] "
                      colSpan={3}
                    >
                      Harga Reseller / Bulan
                    </th>
                  </tr>
                  <tr className="bg-[#1171F5] text-[#FFFFFF]">
                    <td className="border py-3 text-center">Basic</td>
                    <td className="border text-center">Intermidiate</td>
                    <td className="border text-center">Pro</td>
                  </tr>
                </thead>
                <tbody>
                  {dataCloudVPS.map((row, index) => (
                    <tr>
                      <td className="border pl-4 py-3 text-left font-semibold text-[#343A3E]">
                        {row.namaPaket}
                      </td>
                      <td className="border pl-4 text-left text-[#909090]">
                        {row.HargaNormalBulan}
                      </td>
                      <td className="border pl-4 text-left  text-[#909090]">
                        {row.basic}
                      </td>
                      <td className="border pl-4 text-left text-[#909090]">
                        {row.intermidiate}
                      </td>
                      <td className="border pl-4 text-left  text-[#909090]">
                        {row.pro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default reseller;
