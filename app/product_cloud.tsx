"use client";
import React from "react";
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