"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropDownMenu from "./DropDownMenu";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [imageFilter, setImageFilter] = useState("none");
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const openNav = () => {
    setNav(true);
  };

  const closeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("white");
        setTextColor("black");
        setImageFilter("invert(100%)");
        setBackgroundColor("bg-neutral-200");
      } else {
        setColor("transparent");
        setTextColor("white");
        setImageFilter("none");
        setBackgroundColor("bg-blue-200 bg-opacity-50");
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const params = usePathname();
  console.log(params);

  return (
    <div
      style={{ backgroundColor: color }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1130px] m-auto px-4 py-2 md:px-8 flex justify-between items-center text-white">
        <Link href="/">
          <div style={{ color: textColor }} className="logo">
            <img
              src="/images/landing/cloudbank.png"
              alt="Logo mr-4"
              className="md:w-auto md:h-10 md:text-sm"
              width={100}
              height={50}
              style={{ filter: imageFilter }}
            />
          </div>
        </Link>
        <ul
          style={{ color: textColor }}
          className="hidden sm:flex justify-start"
        >
          <li className="p-4 hover:text-gray-500">
            <DropDownMenu
              title="Produk"
              subMenuItems={[
                { label: "Domain", link: "/produk/domain" },
                { label: "Cloud Hosting", link: "/produk/cloudhosting" },
                { label: "Cloud VPS", link: "/produk/cloudvps" },
                { label: "Colocations", link: "/produk/colocations" },
                { label: "RACK Solution", link: "/produk/racksolution" },
              ]}
            />
          </li>
          <li className="p-4 hover:text-gray-500">
            <Link href="/promo">Promo</Link>
          </li>
          <li className="p-4 hover:text-gray-500">
            <DropDownMenu
              title="Kemitraan"
              subMenuItems={[
                { label: "Affiliate", link: "/kemitraan/affiliate" },
                { label: "Reseller", link: "/kemitraan/reseller" },
              ]}
            />
          </li>
          <li className="p-4 hover:text-gray-500">
            <DropDownMenu
              title="Solusi Bisnis"
              subMenuItems={[
                { label: "E-Commerce", link: "/solusibisnis/ecommerce" },
                {
                  label: "Instansi Pendidikan",
                  link: "/solusibisnis/instansipendidikan",
                },
                {
                  label: "Organisasi Non Profit",
                  link: "/solusibisnis/organisasinonprofit",
                },
                { label: "Blog Pribadi", link: "/solusibisnis/blogpribadi" },
                { label: "Start Up", link: "/solusibisnis/startup" },
                { label: "UMKM", link: "/solusibisnis/umkm" },
                {
                  label: "Software Company",
                  link: "/solusibisnis/softwarecompany",
                },
              ]}
            />
          </li>
        </ul>

        <nav className="lg:block sm:block ml-auto flex items-center space-x-4">
          <ul className="hidden md:flex space-x-4">
            <Link href="/masuk" className="hidden md:block">
              <button
                style={{ color: textColor }}
                className={`px-5 py-2 rounded-full hover:bg-stone-400 text-lg ${backgroundColor}`}
              >
                Masuk
              </button>
            </Link>
            <Link href="/daftar" className="hidden md:block">
              <button className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-700 text-lg">
                Daftar
              </button>
            </Link>
          </ul>
        </nav>

        {/* Mobile Button */}
        <div className="block sm:hidden z-10 ml-6">
          {!nav ? (
            <button onClick={openNav} className=" text-black p-2 rounded">
              <AiOutlineMenu size={30} />
            </button>
          ) : (
            <button onClick={closeNav} className=" text-black p-2 rounded">
              <AiOutlineClose size={30} />
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-1/2 h-screen text-black bg-white transform translate-x-0 transition-transform duration-300 ease-in-out sm:hidden"
              : "fixed top-0 left-0 w-1/2 h-screen text-black bg-white  transform -translate-x-full transition-transform duration-300 ease-in-out sm:hidden"
          }
        >
          <div className="fixed top-0 left-0 w-full h-screen bg-white z-50">
            <div className="flex flex-col h-full justify-center items-center space-y-4">
              <ul className="text-4xl">
                <li className="p-4 text-2xl hover:text-gray-500 border rounded-lg border-gray-300  transition-colors duration-300">
                  <DropDownMenu
                    title="Produk"
                    subMenuItems={[
                      { label: "Domain", link: "/produk/domain" },
                      { label: "Cloud Hosting", link: "/produk/cloudhosting" },
                      { label: "Cloud VPS", link: "/produk/cloudvps" },
                      { label: "Colocations", link: "/produk/colocations" },
                      { label: "RACK Solution", link: "/produk/racksolution" },
                    ]}
                  />
                </li>
                <li className="p-4 text-2xl hover:text-gray-500 border rounded-lg transition-colors duration-300">
                  <Link href="/promo">Promo</Link>
                </li>
                <li className="p-4 text-2xl hover:text-gray-500 border rounded-lg transition-colors duration-300">
                  <DropDownMenu
                    title="Kemitraan"
                    subMenuItems={[
                      { label: "Affiliate", link: "/kemitraan/affiliate" },
                      { label: "Reseller", link: "/kemitraan/reseller" },
                    ]}
                  />
                </li>
                <li className="p-4 text-2xl hover:text-gray-500 border rounded-lg transition-colors duration-300">
                  <DropDownMenu
                    title="Solusi Bisnis"
                    subMenuItems={[
                      { label: "E-Commerce", link: "/solusibisnis/ecommerce" },
                      {
                        label: "Instansi Pendidikan",
                        link: "/solusibisnis/instansipendidikan",
                      },
                      {
                        label: "Organisasi Non Profit",
                        link: "/solusibisnis/organisasinonprofit",
                      },
                      {
                        label: "Blog Pribadi",
                        link: "/solusibisnis/blogpribadi",
                      },
                      { label: "Start Up", link: "/solusibisnis/startup" },
                      { label: "UMKM", link: "/solusibisnis/umkm" },
                      {
                        label: "Software Company",
                        link: "/solusibisnis/software_company",
                      },
                    ]}
                  />
                </li>
              </ul>
              <ul className="space-y-4">
                <li>
                  <Link href="/masuk">
                    <button className="px-5 py-2 bg-neutral-300 rounded-full hover:bg-stone-400 text-lg">
                      Masuk
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/daftar">
                    <button className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-700 text-lg">
                      Daftar
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
