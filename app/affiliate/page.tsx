import React from "react";

const affiliate = () => {
  const Keuntungan = [
    {
      image: "/KomisiMenarik.svg",
      name: "Komisi Menarik",
      description:
        "anda berpeluang mendapatkan komisi hingga 75% dari nilai transaksi pelanggan cloudbank",
    },
    {
      image: "/DiskonTambahan.svg",
      name: "Diskon Tambahan",
      description:
        "calon pelanggan mendapatkan ekstra diskon hingga 15% untuk setiap pembelian produk & layanan cloudbank menggunakan kode afiliasi anda",
    },
    {
      image: "/PencairanCepat.svg",
      name: "Pencairan Cepat & Mudah",
      description:
        "anda dapat melakukan pencairan komisi hanya dengan dua pelanggan aktif, 30 hari setelah transaksi pertama.",
    },
  ];
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen "
        style={{ backgroundImage: `url('/images/bgAffiliate.png')` }}
      >
        <div className="pt-24">
          <h1 className="text-4xl text-center text-[#2C323F] font-bold ">
            Afiliasi Cloudbank
          </h1>
          <p className="text-lg text-justify md:text-center capitalize text-gray-600 mt-4 px-8 sm:px-12 mx-auto md:w-[1100px]">
            Program afiliasi hosting Indonesia dengan komisi hingga 75%.
            Daftarkan diri Anda <strong>GRATIS</strong> sekarang juga dan
            dapatkan penghasilan pasif hingga jutaan rupiah!
          </p>

          <div className=" flex items-center justify-end mt-10 md:mt-16 pr-32">
            <div className="bg-[#FCFCFC] shadow-2xl rounded-2xl  max-w-lg">
              <div className="bg-[#1373F6]  text-white rounded-t-2xl py-4">
                <h2 className="text-lg font-semibold mb-2 text-center capitalize">
                  Daftar Program Afiliasi Cloudbank Sekarang Juga!
                </h2>
                <p className="text-xs text-center capitalize px-8  ">
                  dengan bergabung program afiliasi cloudbank, anda berpeluang
                  mendapatkan komisi hingga 75% jadi tunggu apalagi.
                </p>
              </div>
              <form className="px-8 py-6">
                <span className="text-left text-[#0F70F3] font-bold text-lg">
                  Daftar Sekarang Juga!
                </span>
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-md text-left text-[#606060] pt-4"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="-Ketik Nama Lengkap Anda-"
                  className="block text-sm italic mb-4 p-2 w-full border-blue-300 border rounded-lg placeholder-[#909090] bg-[#f8f8f8] "
                />
                <label
                  htmlFor="email"
                  className="block mb-2 text-md  text-left text-[#606060] pt-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="-Ketik Email Anda-"
                  className="block text-sm  italic mb-4 p-2 w-full border-blue-300 border rounded-lg placeholder-[#909090] bg-[#f8f8f8]"
                />
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2  text-md  text-left text-[#606060] pt-2"
                >
                  Nomor Telepon
                </label>
                <div className="flex">
                  <select
                    id="countryCode"
                    className="block text-sm  appearance-none p-2 w-12 border-blue-300 border rounded-l-lg bg-white text-[#909090]"
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
                    className="block text-sm  italic p-2 w-full border-blue-300 border rounded-r-lg placeholder-[#909090] bg-[#f8f8f8]"
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
            DERETAN LAYANAN TERBAIK YANG SIAP
          </h1>
          <h2 className="capitalize text-xl pt-20 md:text-3xl font-semibold mt-4 xl:mt-6 mb-8 text-center text-[#343A3E] absolute z-10 w-[800px]">
            deretan layanan terbaik yang siap anda tawarkan melalui program
            afiliasi cloudbank
          </h2>
        </div>
        <div className="flex justify-center items-center mt-32">
          <div className="mr-36">
            <img src="images/affiliate2.png" alt="Gambar Pertama" />
            <p className="mt-4 font-semibold text-center text-[#606060]">
              Cloud Hosting
            </p>

            <hr className="my-2 border-t border-[#606060]" />
          </div>
          <div className="mr-36">
            <img src="images/affiliate3.png" alt="Gambar Kedua" />
            <p className="mt-4 font-semibold text-center text-[#606060]">
              Cloud VPS
            </p>

            <hr className="my-2 border-t border-[#606060]" />
          </div>
          <div>
            <img src="images/affiliate4.png" alt="Gambar Ketiga" />
            <p className="mt-4 font-semibold text-center text-[#606060]">
              Domain
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center pt-48">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold absolute z-10 bg-gradient-to-b from-[#DCDCDC] to-white bg-clip-text text-transparent">
            KEUNTUNGAN BERGABUNG PROGRAM
          </h1>
          <h2 className="capitalize text-xl pt-10 md:text-3xl font-semibold mt-4 xl:mt-6 mb-8 text-center text-[#343A3E] absolute z-10">
            keuntungan bergabung program afiliasi cloudbank
          </h2>
        </div>

        <img src="/EllipseOrange.svg" alt="HargaTermurah" />
        <img src="/EllipseBiru.svg" alt="HargaTermurah" />
      </div>
    </>
  );
};

export default affiliate;
