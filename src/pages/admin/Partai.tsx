import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Partai = () => {
  return (
    <>
      <Navbar header="DASHBOARD PEMILU " partai="/partai" paslon="/paslon" />
      <div className="w-full mt-10   ">
        <h1 className="text-center text-3xl text-lime-800 font-bold mb-7">
          ADD PARTAI
        </h1>
        <div className="flex justify-center w-2/4 h-3/5 mx-auto gap-6 border p-2 shadow-lg shadow-indigo-500/40">
          <img
            className="w-52 h-72 object-cover  my-auto"
            src="images/kpu.png"
            alt=""
          />
          <div className="flex flex-col ">
            <label htmlFor="name">Nama</label>
            <input
              className="border border-black w-72 p-2"
              type="text"
              id="name"
            />
            <label htmlFor="nomor">Ketua Umum</label>
            <input
              className="border border-black w-72 p-2"
              type="text"
              id="nomor"
            />
            <label htmlFor="visi">Visi Misi</label>
            <textarea
              className="border border-black  w-72 p-2 h-20 resize-none"
              name=""
              id="visi"
            ></textarea>
            <label htmlFor="visi">Alamat</label>
            <textarea
              className="border border-black  w-72 p-2 h-20 resize-none"
              name=""
              id="visi"
            ></textarea>
            <Link
              className="border border-black mt-3 bg-lime-900 text-white font-bold rounded-lg py-1 text-center"
              to="/list-partai"
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partai;
