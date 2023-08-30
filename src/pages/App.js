import React from "react";
import {  Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Registrasi from "./Registrasi";
import Akun from "./Akun";
import Pembayaran from "./Pembayaran";
import TopUp from "./TopUp";
import Transaction from "./Transaction";





function App() {
  return (

     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Registrasi" element={<Registrasi/>} />
      <Route path="/Akun" element={<Akun/>} />
      <Route path="/TopUp" element={<TopUp/>} />
      <Route path="/Pembayaran" element={<Pembayaran/>} />
      <Route path="/Transaction" element={<Transaction/>} />
      

   
      

    </Routes>
  );
}

export default App;
