import React, { FC } from "react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal: FC<Props> = (props) => {
  const { open, setOpen } = props;

  return (
    <div
      aria-hidden="true"
      className={`fixed flex ${
        open == true ? "visible" : "hidden"
      } justify-center top-0 left-0 right-0 bg-gray-200 bg-opacity-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full z-[99]`}
    >
      <div className="relative w-full max-w-2xl max-h-full  ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="w-full h-16 bg-black  absolute top-0 left-0 right-0">
        <h3 className="text-xl text-center mt-5 font-semibold text-white ">
              Rincian Pilihan Paket
            </h3>
            <div>
          <h3 className="text-xl ml-9 mt-10 font-semibold text-gray-800 ">
          Cloud Lite
              </h3>
             
                <div className=" text-xs sm:text-sm p-2 w-11/12 ml-9 border-gray-800 border drop-shadow-xl rounded-r-lg rounded-l-lg placeholder-[#909090] bg-[#f8f8f8 ">
                  <h3 className="">1 bulan - rp 18.000</h3>
                </div>
              </div> 

              <h3 className="text-xl ml-9 mt-10 font-semibold text-gray-800 ">
          Pilih Domain
              </h3>

              <div className=" text-xs sm:text-sm p-2 w-11/12 ml-9 border-gray-800 border drop-shadow-xl rounded-r-lg rounded-l-lg placeholder-[#909090] bg-[#f8f8f8 ">
                  <h3 className="">--Type Your Domain Here--</h3>
                </div>
            
        </div>



          <div className="w-full h-full bg-transparent "></div>
          <div className="flex items-start justify-between p-4 border-b  mt-64rounded-t dark:border-gray-600">
           
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
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
          {/* <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div> */}

          {/* <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="defaultModal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              onClick={() => {
                setOpen(false);
              }}
              data-modal-hide="defaultModal"
              type="button"
              className="text-gray-500 z-[99] bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Decline
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
