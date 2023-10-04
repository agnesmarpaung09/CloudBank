"use client";
import React from "react";
import { ProductDomains } from "./datas/productdomain.json";

export const getStaticProps = async () => {
    return {
        props: { ProductDomainData: ProductDomains },
    };
};

interface ProductDomain {
    imageSrc: any;
    title: any;
    buttonText: any;
    text: any;
    price: any;
}

interface ProductDomainProps {
    ProductDomainData: ProductDomain[];
}


const ProductDomain: React.FC<ProductDomainProps> = ({ ProductDomainData }) => {


    return (
        <div className='mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 text-center justify-center mt-8 md:mt-16'>
        {ProductDomainData.map((item, index) => (
          <div key={index} className='h-64 w-64 relative hover:bg-white ml-3'>
            <div className='relative h-full w-full flex items-center'>
              <img
                src={item.imageSrc}
                alt='Kotak'
                className='h-full w-full'
              />
              <p className='absolute top-2 left-0 w-full text-center text-gray-800 font-bold text-4xl'>
                {item.title}
              </p>
              <p className='absolute mt-0 left-0 w-full text-center text-gray-400 text-sm'>
                {item.text}
              </p>
              <p className='absolute mt-24 left-0 w-full text-center text-blue-700 font-bold text-sm'>
                {item.price}
              </p>
              <button className='absolute bottom-0 mt-4 left-0 w-full bg-orange-500 text-white py-1 px-2 text-center hover:bg-blue-600 focus:outline-none'>
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default ProductDomain;