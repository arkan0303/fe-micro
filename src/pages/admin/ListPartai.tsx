import Navbar from "../../Components/Navbar";

const ListPartai = () => {
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
                Alamat
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 text-left border border-zinc-950">1</td>
              <td className="p-3 text-left border border-zinc-950">
                <img className="w-11" src="images/logo.png" alt="" />
              </td>
              <td className="p-3 text-left border border-zinc-950">
                {" "}
                Cintara surya paloh
              </td>
              <td className="p-3 text-left border border-zinc-950">
                <li>Memindahkan indonesia ke isekai</li>
                <li>Nonton anime 3x sehari</li>
                <li>Melakukan peresapan</li>
              </td>
              <td className="p-3 text-left border border-zinc-950">
                Kerajaan black clover
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListPartai;
