import React, { FC, useState } from "react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<Props> = (props) => {
  const { open, setOpen } = props;
  const [isNewDomainClicked, setIsNewDomainClicked] = useState(false);
  const [hasAccountClicked, setHasAccountClicked] = useState(false);

  const handleNewDomainClick = () => {
    setIsNewDomainClicked(true);
    setHasAccountClicked(false);
  };

  const handleHasAccountClick = () => {
    setIsNewDomainClicked(false);
    setHasAccountClicked(true);
  };

  return (
    <div
      aria-hidden="true"
      className={`fixed flex ${
        open ? "visible" : "hidden"
      } justify-center top-0 left-0 right-0 bg-gray-200 bg-opacity-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full z-[99]`}
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative rounded-lg shadow dark:bg-gray-700">
          <div className="bg-white  mt-0 px-2 py-4">
            <div className="w-full h-16 bg-black absolute top-0 left-0 right-0">
              <h3 className="text-xl text-center mt-5 font-semibold text-white">
                Rincian Pilihan Paket
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2 right-2"
                onClick={() => setOpen(false)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <h3 className="text-xl ml-9 mb-3 mt-16  font-semibold text-gray-800">
              Cloud Lite
            </h3>
            <div>
              <div className="text-xs sm:text-sm p-2 w-11/12 ml-9 h-12 border-gray-800 border drop-shadow-xl rounded-r-lg rounded-l-lg placeholder-[#909090] relative">
                <h3 className="text-gray-800">1 bulan - Rp 18.000</h3>
                <div className="absolute top-0 right-0 h-full w-10 bg-gray-300 rounded-tr-lg rounded-br-lg flex justify-center items-center">
                  <img
                    src="/images/produk_cloudhosting/down.png"
                    alt="Arrow Down Icon"
                    className="h-2 w-3"
                  />
                </div>
              </div>
            </div>

            <h3 className="text-xl ml-9 mt-4 font-semibold text-gray-800">
              Pilih Domain
            </h3>
            <div className="flex text-gray-500 text-xs sm:text-sm p-2 w-11/12 ml-9 rounded-r-lg rounded-l-lg">
              <h3
                className={`text-sm ml-24 mt-3 mb-3 font-semibold ${
                  isNewDomainClicked ? "text-blue-600 border-b-2 border-blue-600" : ""
                }`}
                onClick={handleNewDomainClick}
              >
                DOMAIN BARU
              </h3>
              <h3
                className={`text-sm ml-36 mt-3 mb-3 font-semibold ${
                  hasAccountClicked ? "text-blue-600 border-b-2 border-blue-600" : ""
                } drop-shadow-xl`}
                onClick={handleHasAccountClick}
              >
                SUDAH MEMILIKI AKUN
              </h3>
            </div>

            <div className="flex text-gray-500 text-xs sm:text-sm p-2 w-11/12 ml-9 border-gray-800 border drop-shadow-xl rounded-r-lg rounded-l-lg">
              <input
                type="text"
                placeholder="--Type Your Domain Here--"
                className="flex-1 p-1 pr-0 rounded-l-lg placeholder-[#909090] bg-transparent focus:outline-none"
              />
              <button className="p-2 text-gray-800 rounded-r-lg hover:bg-orange-600 focus:outline-none">
                <img
                  src="/images/produk_domain/SEARCH.svg"
                  alt="Search Icon"
                  className="h-4 w-4 mx-2"
                />
              </button>
            </div>

            {hasAccountClicked && (
              <button
                className="bg-blue-600 text-white px-3 py-1 rounded-md mt-5  w-full  h-10 text-center hover:bg-blue-700"
                onClick={() => {
                
                }}
              >
                Tambah
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
