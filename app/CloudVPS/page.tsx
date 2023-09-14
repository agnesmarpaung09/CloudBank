import React from "react";
import Image from "next/image";

const data = [
  {
    PilihRencanaAnda: "24 X 7 Supports",
    cloudVPS1: "Yes",
    cloudVPS2: "Yes",
    cloudVPS3: "Yes",
    cloudVPS4: "Yes",
    cloudVPS5: "Yes",
    cloudVPS6: "Yes",
    cloudVPS7: "Yes",
  },
  {
    PilihRencanaAnda: "Backup Retention",
    cloudVPS1: "14 Days",
    cloudVPS2: "14 Days",
    cloudVPS3: "14 Days",
    cloudVPS4: "14 Days",
    cloudVPS5: "14 Days",
    cloudVPS6: "14 Days",
    cloudVPS7: "14 Days",
  },
  {
    PilihRencanaAnda: "SSD Disk Space",
    cloudVPS1: "20 GB",
    cloudVPS2: "40 GB",
    cloudVPS3: "125 GB",
    cloudVPS4: "100 GB",
    cloudVPS5: "120 GB",
    cloudVPS6: "200 GB",
    cloudVPS7: "240 GB",
  },
  {
    PilihRencanaAnda: "IP Public",
    cloudVPS1: "1",
    cloudVPS2: "1",
    cloudVPS3: "1",
    cloudVPS4: "1",
    cloudVPS5: "1",
    cloudVPS6: "1",
    cloudVPS7: "1",
  },
  {
    PilihRencanaAnda: "Memory",
    cloudVPS1: "1 GB",
    cloudVPS2: "2 GB",
    cloudVPS3: "6 GB",
    cloudVPS4: "8 GB",
    cloudVPS5: "12 GB",
    cloudVPS6: "16 GB",
    cloudVPS7: "24 GB",
  },
  {
    PilihRencanaAnda: "Setup Fee",
    cloudVPS1: "Free",
    cloudVPS2: "Free",
    cloudVPS3: "Free",
    cloudVPS4: "Free",
    cloudVPS5: "Free",
    cloudVPS6: "Free",
    cloudVPS7: "Free",
  },
  {
    PilihRencanaAnda: "Storage",
    cloudVPS1: "SSD NVMe",
    cloudVPS2: "SSD NVMe",
    cloudVPS3: "SSD NVMe",
    cloudVPS4: "SSD NVMe",
    cloudVPS5: "SSD NVMe",
    cloudVPS6: "SSD NVMe",
    cloudVPS7: "SSD NVMe",
  },
  {
    PilihRencanaAnda: "Virtualization",
    cloudVPS1: "Open Stack + KVM",
    cloudVPS2: "Open Stack + KVM",
    cloudVPS3: "Open Stack + KVM",
    cloudVPS4: "Open Stack + KVM",
    cloudVPS5: "Open Stack + KVM",
    cloudVPS6: "Open Stack + KVM",
    cloudVPS7: "Open Stack + KVM",
  },
  {
    PilihRencanaAnda: "Access Privilege",
    cloudVPS1: "Root",
    cloudVPS2: "Root",
    cloudVPS3: "Root",
    cloudVPS4: "Root",
    cloudVPS5: "Root",
    cloudVPS6: "Root",
    cloudVPS7: "Root",
  },
  {
    PilihRencanaAnda: "Bandwith",
    cloudVPS1: "100 Mbps",
    cloudVPS2: "100 Mbps",
    cloudVPS3: "100 Mbps",
    cloudVPS4: "100 Mbps",
    cloudVPS5: "100 Mbps",
    cloudVPS6: "100 Mbps",
    cloudVPS7: "100 Mbps",
  },
  {
    PilihRencanaAnda: "High Availabilty",
    cloudVPS1: "Yes",
    cloudVPS2: "Yes",
    cloudVPS3: "Yes",
    cloudVPS4: "Yes",
    cloudVPS5: "Yes",
    cloudVPS6: "Yes",
    cloudVPS7: "Yes",
  },
  {
    PilihRencanaAnda: "Management Support",
    cloudVPS1: "Included",
    cloudVPS2: "Included",
    cloudVPS3: "Included",
    cloudVPS4: "Included",
    cloudVPS5: "Included",
    cloudVPS6: "Included",
    cloudVPS7: "Included",
  },
  {
    PilihRencanaAnda: "Processor",
    cloudVPS1: "Intel Xeon R",
    cloudVPS2: "Intel Xeon R",
    cloudVPS3: "Intel Xeon R",
    cloudVPS4: "Intel Xeon R",
    cloudVPS5: "Intel Xeon R",
    cloudVPS6: "Intel Xeon R",
    cloudVPS7: "Intel Xeon R",
  },
  {
    PilihRencanaAnda: "SSL Certificate",
    cloudVPS1: "Included",
    cloudVPS2: "Included",
    cloudVPS3: "Included",
    cloudVPS4: "Included",
    cloudVPS5: "Included",
    cloudVPS6: "Included",
    cloudVPS7: "Included",
  },
  {
    PilihRencanaAnda: "VCPU",
    cloudVPS1: "2 Cores",
    cloudVPS2: "3 Cores",
    cloudVPS3: "4 Cores",
    cloudVPS4: "10 Cores",
    cloudVPS5: "16 Cores",
    cloudVPS6: "18 Cores",
    cloudVPS7: "24 Cores",
  },
];

const packages = [
  {
    name: "Cloud VPS1",
    price: "89rb",
    description: "Paket Cloud VPS1",
  },
  {
    name: "Cloud VPS2",
    price: "209rb",
    description: "Paket Cloud VPS2",
    buttonBg: "bg-blue-500",
  },
  {
    name: "Cloud VPS3",
    price: "629rb",
    description: "Paket Cloud VPS3",
  },
  {
    name: "Cloud VPS4",
    price: "809rb",
    description: "Paket Cloud VPS4",
  },
  {
    name: "Cloud VPS5",
    price: "1.499Jt",
    description: "Paket Cloud VPS5",
  },
  {
    name: "Cloud VPS6",
    price: "2.059Jt",
    description: "Paket Cloud VPS6",
  },
  {
    name: "Cloud VPS7",
    price: "2.889Jt",
    description: "Paket Cloud VPS7",
  },
];

const VPS = () => {
  return (
    <div className="bg-white">
      <div className="bg-blue-900 h-[200px]">
        <div className="text-white relative">
          <div
            className="relative pb-80"
            style={{
              backgroundImage: `url('/Bg-VPS.png')`,
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
            <h1 className="text-3xl font-bold mt-16">
              Hosting VPS Murah Di Batam Menggunakan SSD Super Cepat
            </h1>
            <p className="text-sm mt-4">
              Setup Sangat Cepat Dalam 1 Menit Dengan Processor Performa Tinggi
              Heza Core Intel Ceon Dan <br />
              Support 24 Jam Melalui Email, Live Chat Dan Remote Access.
            </p>
            <button className="mx-auto mt-6 bg-orange-500 text-white py-1 px-2 rounded w-40">
              Mulai Sekarang
            </button>
          </div>
        </div>
      </div>

      <section className="mt-36 text-center bg-white shadow-lg rounded-lg p-8">
        {/* <div className="flex justify-center items-center pt-6 mb-10 mt-14"> */}
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold z-10 bg-gradient-to-b from-[#DCDCDC] to-white bg-clip-text text-transparent">
          MENGAPA VPS CLOUDBANK?
        </h1>
        <h2 className="capitalize text-xl md:text-3xl font-semibold mb-8 text-[#343A3E] z-10">
          Mengapa VPS Cloudbank?
        </h2>
        {/* </div> */}
        <div className="flex justify-center -mt-10">
          <div className="w-full max-w-5xl overflow-x-auto">
            <div className="md:flex flex-col">
              <div className="bg-white border border-gray-400 shadow-lg p-4 mt-10 rounded-lg">
                <div className="md:flex-row md:grid md:grid-cols-2 md:gap-4 items-center">
                  <div className="flex items-center justify-center md:flex-grow">
                    <Image
                      src="/vps1.png"
                      alt="VPS"
                      width={100}
                      height={100}
                      className="w-20 h-20"
                    />
                    <div className="md:ml-2 text-gray-700 text-justify">
                      <h3 className="text-xs font-semibold">
                        Nikmati Pengalaman 10x Lebih Cepat
                      </h3>
                      <p className="text-xs font-normal">
                        Dengan Hosting VPS SSD, Anda Dialokasikan Dengan Sumber
                        Daya Hosting Yang Mirip Dengan Server Khusus Dan Tidak
                        Ada Yang Akan Berbagi Sumber Daya Server Dengan Anda.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start border-t pt-4 md:border-t-0  mb-6">
                    <Image
                      src="/vps2.png"
                      alt="VPS"
                      width={100}
                      height={100}
                      className="w-20 h-20"
                    />
                    <div className="md:ml-2 text-gray-700  text-justify">
                      <h3 className="text-xs font-semibold">SSD hard drive</h3>
                      <p className=" text-xs font-normal">
                        Dengan Konfigurasi Server Yang Tepat. Didukung Manajemen
                        Jaringan Dan Multiple Upstream Tier 1 Provider Jaringan
                        Serta Multiple Peering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-center -mt-44">
        <div className="flex flex-col justify-center items-center min-h-screen pt-6 mb-8">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold z-10 bg-gradient-to-b from-[#DCDCDC] to-white bg-clip-text text-transparent">
            PERBBANDINGAN PAKET HARGA CLOUD HOSTING
          </h1>
          <h2 className="capitalize text-xl md:text-3xl font-semibold mb-8 text-[#343A3E] z-10">
            Perbandingan Paket Harga Cloud Hosting
          </h2>
        </div>

        <div className="flex justify-center -mt-64">
          <div className="w-full md:max-w-5xl overflow-x-auto">
            <table className="w-full table-auto border md:border-collapse">
              <thead>
                <tr className="text-xs">
                  <th className="border border-gray-300 p-2 text-justify">
                    Pilih Rencana Anda
                  </th>
                  {packages.map((pkg, index) => (
                    <th className="border border-gray-300 p-2" key={index}>
                      {pkg.name}
                      <p className="block text-blue-500">
                        <span
                          className="text-xs"
                          style={{ verticalAlign: "0.5em" }}
                        >
                          Rp.
                        </span>{" "}
                        {pkg.price}/
                        <span className="text-normal text-black">bulan</span>
                      </p>
                      <div className="flex justify-center">
                        <button
                          className={`mt-2  text-blue-600 border border-blue-600 py-1 px-2 rounded w-20 ${
                            pkg.buttonBg === "bg-blue-500"
                              ? "bg-blue-500 text-white"
                              : ""
                          }`}
                        >
                          Beli
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="text-center text-xs">
                    <td className="border border-gray-300 p-2 text-justify font-semibold">
                      {row.PilihRencanaAnda}
                    </td>
                    <td className="border border-gray-300 p-2 text-[#4A596B]">
                      {row.cloudVPS1}
                    </td>
                    <td className="border border-gray-300 p-2 text-[#4A596B]">
                      {row.cloudVPS2}
                    </td>
                    <td className="border border-gray-300 p-2 text-[#4A596B]">
                      {row.cloudVPS3}
                    </td>
                    <td className="border border-gray-300 p-2 text-[#4A596B]">
                      {row.cloudVPS4}
                    </td>
                    <td className="border border-gray-300 p-2 text-[#4A596B] ">
                      {row.cloudVPS5}
                    </td>
                    <td className="border border-gray-300 p-2 text-[#4A596B]">
                      {row.cloudVPS6}
                    </td>
                    <td className="border border-gray-300 p-2 text-[#4A596B]">
                      {row.cloudVPS7}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VPS;
