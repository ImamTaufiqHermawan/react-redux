import React from "react";

import ProfilePhoto from "../assets/Website Assets/Profile Photo.png";
import Background from "../assets/Website Assets/Background Saldo.png";
import { useSelector } from "react-redux";

// import icons

const Hero = () => {
  const auth = useSelector(x => x.auth.value);

  return (
    <div className="grid grid-cols-2">
      <div className="...">
        <div className="max-w-sm p-9 ">
          <img src={ProfilePhoto} className="h-20 mr-3" alt="Flowbite Logo" />
          <a href="#">
            <h5 className="mt-4 text-xl font-medium text-gray-950 ">Selamat Datang ,{auth.token}</h5>
          </a>
          <p className="mb-3 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white ">Kristanto Wibowo</p>
        </div>
      </div>
      <div className="h-auto max-w-full rounded-lg mt-10">
        <div className=" relative">
          <div className="absolute w-full h-full ml-4 ">
            <h5 className="mt-5 text-2xl font-normal tracking-tight text-white dark:text-white">Saldo Anda</h5>
            <h5 className="mt-4 ml-2 text-3xl font-bold tracking-tight text-white dark:text-white">Rp</h5>
            <button type="button" class=" mt-5 ml-2 text-sm font-normal tracking-tight text-white dark:text-white">Lihat Saldo</button>


          </div>
          <img className="" src={Background} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
