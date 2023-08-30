import React from "react";

import { MoneyOutlined } from "@mui/icons-material";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";

// import icons

const Transaction = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="max-w-sm p-9 ">
        <h5 className="mt-4 text-xl font-medium text-gray-950 ">Semua Transaksi</h5>

        
      </div>
      
      <div className="w-4/6  ml-8  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-1 col-end-3 text-start">02</div>
          <div className="col-end-7 col-span-2 text-end"></div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
