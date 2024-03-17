import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";

interface Partai {
  id: number;
  namaPartai: string;
  ketuaUmum: string;
  visiMisi: string[];
  alamat: string;
}

const ListPartai = () => {
  const [partaiList, setPartaiList] = useState<Partai[]>([]);

  useEffect(() => {
    fetchDataPartai();
  }, []);

  const fetchDataPartai = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/partais");
      const data = await response.json();
      setPartaiList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar header="DASHBOARD PEMILU " partai="/partai" paslon="/paslon" />
      <div className="w-9/12 mx-auto">
        <h1 className="text-center  text-3xl text-lime-800 font-bold mb-7 mt-5">
          LIST PARTAI
        </h1>

        <table className="w-full mx-auto border bg-slate-200">
          <thead>
            <tr>
              <th className="p-3 text-left border border-zinc-950 bg-slate-300 ">
                No
              </th>
              <th className="p-3 text-left border border-zinc-950 bg-slate-300 ">
                Image
              </th>
              <th className="p-3 text-left border border-zinc-950 bg-slate-300 ">
                Nama Partai
              </th>
              <th className="p-3 text-left border border-zinc-950 bg-slate-300 ">
                Ketua Umum
              </th>
              <th className="p-3 text-left border border-zinc-950 bg-slate-300 ">
                Visi & Misi
              </th>
              <th className="p-3 text-left border border-zinc-950 bg-slate-300 ">
                Alamat
              </th>
            </tr>
          </thead>
          <tbody>
            {partaiList.map((partai) => (
              <tr key={partai.id}>
                <td className="p-3 text-center border border-zinc-950">
                  {partai.id}
                </td>
                <td className="p-3 text-center border border-zinc-950">
                  <img className="w-11" src="images/logo.png" alt="" />
                </td>
                <td className="p-3 text-left border border-zinc-950">
                  {partai.namaPartai}
                </td>
                <td className="p-3 text-left border border-zinc-950">
                  {partai.ketuaUmum}
                </td>
                <td className="p-3 text-left border border-zinc-950">
                  {partai.visiMisi.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </td>
                <td className="p-3 text-left border border-zinc-950">
                  {partai.alamat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListPartai;
