import React from "react";

import { MoneyOutlined } from "@mui/icons-material";
import Listrik from "../assets/Website Assets/Listrik.png";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";

// import icons

const Pembayaran = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <div className="max-w-sm p-9 ">
      <h5 className="mt-4 text-xl font-medium text-gray-950 ">PemBayaran</h5>

      <a href="" className="flex items-center mt-4">
        <img
          src={Listrik}
          className="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span className="self-center text-xl font-normal ml-4 whitespace-nowrap dark:text-white">
          Listrik Prabayar
        </span>
      </a>
    </div>

    <div className=" w-full p-4 text-center  
  sm:p-8 ">
    <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4 ">
          <MoneyOutlined />
          <input className=" outline-none border-none " type="text" name="" id="" placeholder="10000" />
        </div>
        <div className="mb-6 text-center">
          <button className="w-full px-4 py-2 font-semibold text-white bg-red-500  hover:bg-red-500  focus:outline-none focus:shadow-outline" type="button">
            Top Up
          </button>
        </div>
    </div>
  </>
  );
};

export default Pembayaran;
