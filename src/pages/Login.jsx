import React from "react";

import IlustrasiLogin from "../assets/Website Assets/Illustrasi Login.png";
import Logo from "../assets/Website Assets/Logo.png";

// import icons

const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <div className="mx-auto max-w-lg text-center">
            <a href="" className="flex items-center justify-center">
                <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SIMSPPOB</span>
              </a>
              <p className="mt-8 text-2xl font-bold text-black text-center">Masuk atau buat akun</p>
              <p className=" text-2xl font-bold text-black text-center">untuk memulai</p>
            </div>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4">
                <div className="flex items-center border-2 py-2 px-3 rounded-md  mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
                </div>
              </div>
              <div className="mb-4">
              <div className="flex items-center border-2 py-2 px-3 rounded-md ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="Password"
          />
        </div>
              </div>

              <div className="mb-6 text-center">
                <button className="w-full px-4 py-2 font-bold text-white bg-red-500  hover:bg-red-500  focus:outline-none focus:shadow-outline" type="button">
                  Masuk
                </button>
              </div>

              <div className=" text-sm font-display font-semibold text-gray-700 text-center">
                belum punya akun ? registrasi <a className="cursor-pointer text-red-600 hover:text-red-800">di sini</a>
              </div>
            </form>
          </div>
          <img src={IlustrasiLogin} alt="" className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
