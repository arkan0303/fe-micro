import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";

interface Paslon {
  id: number;
  nomorUrut: number;
  namaPaslon: string;
  visiMisi: string[];
  partai: { id: number; namaPartai: string }[];
}

const ListPaslon: React.FC = () => {
  const [paslonList, setPaslonList] = useState<Paslon[]>([]);

  useEffect(() => {
    fetchPaslonList();
  }, []);

  const fetchPaslonList = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/candidates");
      if (response.ok) {
        const data = await response.json();
        setPaslonList(data);
      } else {
        console.error("Gagal mengambil data paslon");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <>
      <Navbar header="DASHBOARD PEMILU " partai="/partai" paslon="/paslon" />
      <div className="w-9/12 mx-auto">
        <h1 className="text-center  text-3xl text-lime-800 font-bold mb-7">
          LIST PASLON
        </h1>

        <table className="w-full mx-auto border bg-slate-200">
          <thead>
            <tr>
              <th className="p-3 text-left border border-zinc-950 bg-slate-300 ">
                No Urut
              </th>
              <th className="p-3 text-left border border-zinc-950 bg-slate-300 ">
                Image
              </th>
              <th className="p-3 text-left border border-zinc-950 bg-slate-300 ">
                Name
              </th>
              <th className="p-3 text-left border border-zinc-950 bg-slate-300 ">
                Visi & Misi
              </th>
              <th className="p-3 text-left border border-zinc-950 bg-slate-300 ">
                Koalisi Partai
              </th>
            </tr>
          </thead>
          <tbody>
            {paslonList.map((paslon) => (
              <tr key={paslon.id}>
                <td className="p-3 text-left border border-zinc-950">
                  {paslon.nomorUrut}
                </td>
                <td className="p-3 text-left border border-zinc-950">
                  <img className="w-11" src="images/logo.png" alt="" />
                </td>
                <td className="p-3 text-left border border-zinc-950">
                  {paslon.namaPaslon}
                </td>
                <td className="p-3 text-left border border-zinc-950">
                  {paslon.visiMisi.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </td>
                <td className="p-3 text-left border border-zinc-950">
                  {paslon.partai.map((partai) => (
                    <li key={partai.id}>{partai.namaPartai}</li>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListPaslon;
