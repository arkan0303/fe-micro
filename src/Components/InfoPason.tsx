import React from "react";
import { Paslon } from "../Interfaces/Paslon";

interface InfoPaslonProps {
  paslon: Paslon;
}

const InfoPaslon: React.FC<InfoPaslonProps> = ({ paslon }) => {
  return (
    <div className="flex w-2/4 gap-5 mx-auto p-7 bg-white rounded shadow-lg shadow-indigo-500/40">
      <div>
        <img
          className="w-52 h-72 object-cover my-auto"
          src="images/kpu.png"
          alt=""
        />
      </div>
      <div>
        <h3 className="font-bold text-black">
          Nomor Urut : {paslon.nomorUrut}
        </h3>
        <h1 className="text-2xl text-red-950 font-bold mb-4">
          {paslon.namaPaslon}
        </h1>
        <h3>Visi & Misi</h3>
        {paslon.visiMisi.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <h3 className="mt-4">Koalisi:</h3>
        {paslon.partai.map((partai) => (
          <li key={partai.id}>{partai.namaPartai}</li>
        ))}
      </div>
    </div>
  );
};

export default InfoPaslon;
