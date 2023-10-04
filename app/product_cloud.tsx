"use client";
import React from "react";
import Slider from "react-slick";
import Image from 'next/image';
import { ProductCloudHostings } from "./datas/productcloudhosting.json";

export const getStaticProps = async () => {
    return {
        props: { ProductCloudHostingData: ProductCloudHostings },
    };
};

interface ProductCloudHosting {
    rencana_anda: any;
    cloud_lite: any;
    cloud_soho: any;
    cloud_startup: any;
    cloud_Sme: any;
    cloud_pro: any;
    cloud_premium: any;
    cloud_enterprise: any;
}

interface ProductCloudHostingProps {
    ProductCloudHostingData: ProductCloudHosting[];
}


const ProductCloudHosting: React.FC<ProductCloudHostingProps> = ({ ProductCloudHostingData }) => {
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
        <tbody>
            {ProductCloudHostingData.map((item, index) => (
                <tr key={index}>
                    <td className="border px-4 py-2">{item.rencana_anda}</td>
                    <td className="border px-4 py-2">{item.cloud_lite}</td>
                    <td className="border px-4 py-2">{item.cloud_soho}</td>
                    <td className="border px-4 py-2">{item.cloud_startup}</td>
                    <td className="border px-4 py-2">{item.cloud_Sme}</td>
                    <td className="border px-4 py-2">{item.cloud_pro}</td>
                    <td className="border px-4 py-2">{item.cloud_premium}</td>
                    <td className="border px-4 py-2">
                        {item.cloud_enterprise}
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default ProductCloudHosting;