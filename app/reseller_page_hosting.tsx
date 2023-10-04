"use client";
import React from "react";
import Slider from "react-slick";
import Image from 'next/image';
import { dataCloudHosting, dataCloudVPS } from "./datas/reseller.json";

export const getStaticProps = async () => {
    return {
        props: {
            CloudHostingData: dataCloudHosting,
            CloudVPS: dataCloudVPS
        },
    };
};

interface CloudHosting {
    namaPaket: any;
    HargaNormalBulan: any;
    basic: any;
    intermidiate: any;
    pro: any;
}

interface CloudHostingProps {
    CloudHosting: CloudHosting[];
}


const CloudHosting: React.FC<CloudHostingProps> = ({ CloudHosting }) => {
    const sliderSettings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 2,
        speed: 500,
        responsive: [
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="items-center mt-36 xl:mt-38 ">
            <div className="flex justify-center mt-12 px-6 sm:px-12">
                <div className="w-full max-w-[1060px] overflow-x-auto ">
                    <div className="md:flex flex-col">
                        <h2 className="text-2xl font-semibold mb-4">Cloud Hosting</h2>
                        <table className="w-full md:w-auto table-auto border md:border-collapse rounded-xl overflow-hidden">
                            <thead>
                                <tr>
                                    <th
                                        className="pl-2 xl:pl-4 bg-[#1171F5] text-left text-[#FFFFFF] w-48"
                                        rowSpan={2}
                                    >
                                        Nama Paket
                                    </th>
                                    <th
                                        className="pl-2 xl:pl-4 bg-[#1171F5] text-left border-b border text-[#FFFFFF] w-80"
                                        rowSpan={2}
                                    >
                                        Harga Normal / Bulan
                                    </th>
                                    <th
                                        className="py-2 xl:py-3 bg-[#1171F5] border-b border text-[#FFFFFF] "
                                        colSpan={3}
                                    >
                                        Harga Reseller / Bulan
                                    </th>
                                </tr>
                                <tr className="bg-[#1171F5] text-[#FFFFFF]">
                                    <td className="border py-2 xl:py-3 text-center">Basic</td>
                                    <td className="border text-center">Intermidiate</td>
                                    <td className="border text-center">Pro</td>
                                </tr>
                            </thead>
                            <tbody>
                                {dataCloudHosting.map((row, index) => (
                                    <tr>
                                        <td className="border pl-2 xl:pl-4 py-3 text-left font-semibold text-[#343A3E]">
                                            {row.namaPaket}
                                        </td>
                                        <td className="border pl-2 xl:pl-4 text-left text-[#909090]">
                                            {row.HargaNormalBulan}
                                        </td>
                                        <td className="border pl-2 xl:pl-4text-left  text-[#909090]">
                                            {row.basic}
                                        </td>
                                        <td className="border pl-2 xl:pl-4 text-left text-[#909090]">
                                            {row.intermidiate}
                                        </td>
                                        <td className="border pl-2 xl:pl-4text-left  text-[#909090]">
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
    );
};



export default CloudHosting;