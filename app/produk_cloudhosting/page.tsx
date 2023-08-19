import React from "react";

const ProdukCloudHosting = () => {
  const data = [
    { rencana_anda: "Storage", cloud_lite: "1 GB", cloud_soho: "3 GB", cloud_startup: "5 GB", cloud_Sme: "10 GB", cloud_pro: "20 GB", cloud_premium: "40 GB", cloud_enterprise: "60 GB" },
    { rencana_anda: "Database", cloud_lite: "Unlimited", cloud_soho: "Unlimited", cloud_startup: "Unlimited", cloud_Sme: "Unlimited", cloud_pro: "Unlimited", cloud_premium: "Unlimited", cloud_enterprise: "Unlimited" },
    { rencana_anda: "SSL", cloud_lite: "Free", cloud_soho: "Free", cloud_startup: "Free", cloud_Sme: "Free", cloud_pro: "Free", cloud_premium: "Free", cloud_enterprise: "Free" },
    { rencana_anda: "Backup", cloud_lite: "14 Days", cloud_soho: "14 Days", cloud_startup: "14 Days", cloud_Sme: "14 Days", cloud_pro: "14 Days", cloud_premium: "14 Days", cloud_enterprise: "14 Days" },
    { rencana_anda: "Domain", cloud_lite: 1, cloud_soho: 4, cloud_startup: 6, cloud_Sme: 10, cloud_pro: 10, cloud_premium: 10, cloud_enterprise: "Unlimited" },
  ];

  return (
        <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="images/produk_cloudhosting/BG LAYER 1.png"
          alt="Background Image"
          className="w-full h-1/2 "
        />
      </div>
      <div className="min-h-screen text-center bg-opacity-10 p-24 font-cabinet-grotesk">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Hosting Batam Cepat dan Terpercaya
        </h1>
        <h3 className="text-xl capitalize text-gray-800 mx-auto max-w-screen-xl">
          Mulailah pengalaman bisnis online anda dengan hosting bersama cloudbank dengan layanan terpercaya
        </h3>

        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <h1 className="text-3xl md:text-4 xl:text-5xl font-bold bg-gradient-to-b from-gray-400 to-white bg-clip-text text-transparent">
              PAKET HARGA CLOUD HOSTING
            </h1>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-semibold text-gray-900">
              Paket Harga Cloud Hosting
            </h2>

            <table className="mx-auto mt-6 border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Pilih Rencana Anda</th>
                  <th className="border px-4 py-2">Cloud Lite <br /><button className="bg-blue-500 text-white px-2 py-1 rounded-lg">Beli</button></th>
                  <th className="border px-4 py-2">Cloud Soho <br /><button className="bg-blue-500 text-white px-2 py-1 rounded-lg">Beli</button></th>
                  <th className="border px-4 py-2">Cloud Startup <br /><button className="bg-blue-500 text-white px-2 py-1 rounded-lg">Beli</button></th>
                  <th className="border px-4 py-2">Cloud SME <br /><button className="bg-blue-500 text-white px-2 py-1 rounded-lg">Beli</button></th>
                  <th className="border px-4 py-2">Cloud Pro <br /><button className="bg-blue-500 text-white px-2 py-1 rounded-lg">Beli</button></th>
                  <th className="border px-4 py-2">Cloud Premium <br /><button className="bg-blue-500 text-white px-2 py-1 rounded-lg">Beli</button></th>
                  <th className="border px-4 py-2">Cloud Enterprise <br /><button className="bg-blue-500 text-white px-2 py-1 rounded-lg">Beli</button></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{item.rencana_anda}</td>
                    <td className="border px-4 py-2">{item.cloud_lite}</td>
                    <td className="border px-4 py-2">{item.cloud_soho}</td>
                    <td className="border px-4 py-2">{item.cloud_startup}</td>
                    <td className="border px-4 py-2">{item.cloud_Sme}</td>
                    <td className="border px-4 py-2">{item.cloud_pro}</td>
                    <td className="border px-4 py-2">{item.cloud_premium}</td>
                    <td className="border px-4 py-2">{item.cloud_enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <div className="ml-6">
            <img
              src="images/produk_cloudhosting/Vector 1.png"
              alt="Deskripsi Gambar"
              className="mt-6 max-w-full"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProdukCloudHosting;
