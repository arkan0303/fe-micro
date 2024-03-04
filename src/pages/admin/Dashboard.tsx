import Navbar from "../../Components/Navbar";

const Dasboard = () => {
  return (
    <>
      <Navbar header="DASHBOARD PEMILU " partai="/partai" paslon="/paslon" />
      <div className="w-full">
        <h1 className="text-center font-bold text-3xl my-8">DASHBOARD</h1>
        <div className="w-9/12 sm:w-9/12 mx-auto flex flex-wrap">
          <div className="flex flex-col w-80 border-l-rose-800  mx-auto ">
            <div className="w-80 mb-3 flex justify-center  ">
              <h3 className=" text-center flex items-center justify-center text-black bg-yellow-500 rounded-full w-10 h-9 border-slate-950 drop-shadow-lg  font-black ">
                1
              </h3>
            </div>
            <div className="w-80  mx-auto border p-3 bg-yellow-500 rounded-lg">
              <img className="rounded-lg" src="images/kpu.png" alt="" />
              <h2 className="font-bold text-zinc-950 text-2xl">
                ANIES BASWEDAN
              </h2>
              <p className="text-zinc-950 font-bold">Akumulasi : 45%</p>
              <p className="text-zinc-950 font-bold">
                Jumlah Vote : 117 Voters
              </p>
            </div>
          </div>
          <div className="flex flex-col w-80 border-l-rose-800  mx-auto ">
            <div className="w-80 mb-3 flex justify-center  ">
              <h3 className=" text-center flex items-center justify-center text-black bg-yellow-500 rounded-full w-10 h-9  font-black ">
                2
              </h3>
            </div>
            <div className="w-80  mx-auto border p-3 bg-teal-400 rounded-lg">
              <img className="rounded-lg" src="images/kpu.png" alt="" />
              <h2 className="font-bold text-zinc-950 text-2xl">
                PRABOWO SUBIANTO
              </h2>
              <p className="text-zinc-950 font-bold">Akumulasi : 85%</p>
              <p className="text-zinc-950 font-bold">
                Jumlah Vote : 11117 Voters
              </p>
            </div>
          </div>
          <div className="flex flex-col w-80 border-l-rose-800  mx-auto ">
            <div className="w-80 mb-3 flex justify-center  ">
              <h3 className=" text-center flex items-center justify-center text-black bg-yellow-500 rounded-full w-10 h-9 border-slate-950 drop-shadow-lg  font-black ">
                3
              </h3>
            </div>
            <div className="w-80  mx-auto border p-3 bg-red-600 rounded-lg">
              <img className="rounded-lg" src="images/kpu.png" alt="" />
              <h2 className="font-bold text-zinc-950 text-2xl">
                GANJAR PRANOWO
              </h2>
              <p className="text-zinc-950 font-bold">Akumulasi : 15%</p>
              <p className="text-zinc-950 font-bold">
                Jumlah Vote : 100 Voters
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 mt-14 pb-32">
        <div className="w-9/12 sm:w-9/12 mx-auto">
          <h1 className="text-center mb-8 pt-16 text-3xl font-bold">
            LIST VOTER
          </h1>

          <table className="w-full mx-auto border bg-slate-200">
            <thead>
              <tr>
                <th className="p-3 text-left border border-zinc-950 bg-slate-300 ">
                  No
                </th>
                <th className="p-3 text-left border border-zinc-950 bg-slate-300 ">
                  Nama
                </th>
                <th className="p-3 text-left border border-zinc-950 bg-slate-300 ">
                  Alamat
                </th>
                <th className="p-3 text-left border border-zinc-950 bg-slate-300 ">
                  Jenis Kelamin
                </th>
                <th className="p-3 text-left border border-zinc-950 bg-slate-300">
                  Paslon
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 text-left border border-zinc-950">1</td>
                <td className="p-3 text-left border border-zinc-950">
                  John Doe
                </td>
                <td className="p-3 text-left border border-zinc-950">
                  Jl. Merdeka No. 123
                </td>
                <td className="p-3 text-left border border-zinc-950">
                  Laki-laki
                </td>
                <td className="p-3 text-left border border-zinc-950">1</td>
              </tr>
              <tr>
                <td className="p-3 text-left border border-zinc-950">2</td>
                <td className="p-3 text-left border border-zinc-950">
                  Jane Smith
                </td>
                <td className="p-3 text-left border border-zinc-950">
                  Jl. Jenderal Sudirman No. 456
                </td>
                <td className="p-3 text-left  border border-zinc-950">
                  Perempuan
                </td>
                <td className="p-3 text-left border border-zinc-950">2</td>
              </tr>
            </tbody>
          </table>
          <h1 className="text-left mt-4 text-2xl font-bold">
            TOTAL SUARA TERKUMPUL : 1000 Voters
          </h1>
        </div>
      </div>
    </>
  );
};

export default Dasboard;
