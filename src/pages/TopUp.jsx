import React from "react";

import { MoneyOutlined } from "@mui/icons-material";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";


// import icons


const TopUp = () => {

  return (
    <>
    <Navbar />
    <Hero />
    <div className="max-w-sm p-9 ">
      <h5 className="mt-4 text-xl font-medium text-gray-950 ">Silahkan masukan</h5>

      <p className="mb-3 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white ">Nominal Top Up</p>
    </div>

    <div className=" ml-8">
    <div className="grid grid-cols-5 gap-4 ">
      <div className="col-span-2 ...">
        <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
          <MoneyOutlined />
          <input className=" outline-none border-none " type="text" name="" id="" placeholder="10000" />
        </div>
      </div>

      <div className="ml-48">
        <button
          type="button"
          className="py-2.5 px-7 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Rp10.000
        </button>{" "}
      </div>
      <div className="ml-4">
        <button
          type="button"
          className="py-2.5 px-7 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Rp20.000
        </button>
      </div>
      <div className="-ml-40">
        <button
          type="button"
          className="py-2.5 px-7 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Rp50.000
        </button>
      </div>
    </div>
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-2 ...">
        <div className="mb-6 text-center">
          <button className="w-full px-4 py-2 font-semibold text-white bg-red-500  hover:bg-red-500  focus:outline-none focus:shadow-outline" type="button">
            Top Up
          </button>
        </div>
      </div>
      <div className="ml-48">
        <button
          type="button"
          className="py-2.5 px-6 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Rp100.000
        </button>
      </div>
      <div className="ml-4">
        <button
          type="button"
          className="py-2.5 px-6 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Rp250.000
        </button>
      </div>
      <div className="-ml-40">
          
        <button
          type="button"
          className="py-2.5 px-6 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Rp500.000
        </button>
      </div>
    </div>
    </div>
  </>
  );
  

};

export default TopUp;
