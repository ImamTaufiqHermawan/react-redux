import React from "react";

import PBB from "../assets/Website Assets/PBB.png";
import Listrik from "../assets/Website Assets/Listrik.png";
import Pulsa from "../assets/Website Assets/Pulsa.png";
import PDAM from "../assets/Website Assets/PDAM.png";
import PGN from "../assets/Website Assets/PGN.png";
import TVLangganan from "../assets/Website Assets/Televisi.png";
import Musik from "../assets/Website Assets/Musik.png";
import VoucherGame from "../assets/Website Assets/Game.png";
import VoucherMakanan from "../assets/Website Assets/Voucher Makanan.png";
import Kurban from "../assets/Website Assets/Kurban.png";
import Zakat from "../assets/Website Assets/Zakat.png";
import PaketData from "../assets/Website Assets/Paket Data.png";

// import icons

const Menu = () => {
  return (
    <div className="grid grid-cols-12 ml-10 mt-10">
      <div className="...">
        <button type="button">
          <img src={PBB} alt="" />
          PBB
        </button>
      </div>
      <div className="...">
        <button type="button">
          <img src={Listrik} alt="" />
          Listrik
        </button>
      </div>
      <div className="...">
        <button type="button">
          <img src={Pulsa} alt="" />
          Pulsa
        </button>
      </div>
      <div className="...">
        <button type="button">
          <img src={PDAM} alt="" />
          PDAM
        </button>
      </div>
      <div className="...">
        <button type="button">
          <img src={PGN} alt="" />
          PGN
        </button>
      </div>
      <div className="...">
        <button type="button">
          <img src={TVLangganan} alt="" />
          TV 
          <p>Langganan</p>
        </button>
      </div>
      <div className="...">
        
        <button type="button">
          <img src={Musik} alt="" />
          Musik
        </button>
      </div>
      <div className="...">
        
        <button type="button">
          <img src={VoucherGame} alt="" />
          Voucher 
          <p>Game</p>
        </button>
      </div>
      <div className="...">
        
        <button type="button">
          <img src={VoucherMakanan} alt="" />
          Voucher 
          <p>Makanan</p>
        </button>
      </div>
      <div className="...">
       
        <button type="button">
          <img src={Kurban} alt="" />
          Kurban
        </button>
      </div>
      <div className="...">
      
        <button type="button">
          <img src={Zakat} alt="" />
          Zakat
        </button>
      </div>
      <div className="...">
       
        <button type="button">
          <img src={PaketData} alt="" />
          Paket 
          <p>Data</p>
        </button>
      </div>
    </div>
  );
};

export default Menu;
