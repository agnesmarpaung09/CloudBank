import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";
import SoftwareCompany from "./software_company/page";

const DropDownMenu = ({ title, subMenuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeSubMenu = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`relative inline-block ${isOpen ? "z-10" : ""}`}
      // onBlur={closeSubMenu}
    >
      <button onClick={toggleSubMenu} className="flex items-center">
        {title}
        <AiOutlineDown className="ml-1" />
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 py-2 bg-white rounded-lg shadow-lg text-black w-44 mobile-border">
          {subMenuItems.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer mobile-border-item"
            >
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        @media (max-width: 640px) {
          .mobile-border {
            border: 2px solid #e2e8f0;
          }
          .mobile-border-item {
            border-top: 2px solid #e2e8f0;
          }
        }
      `}</style>
    </div>
  );
};

export default DropDownMenu;
