import { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "../../Components/Navbar";

const Partai = () => {
  const [formData, setFormData] = useState({
    namaPartai: "",
    ketuaUmum: "",
    visiMisi: "",
    alamat: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Pisahkan poin visi misi menggunakan koma atau titik koma
      const visiMisiArray = formData.visiMisi.split(",");

      const response = await fetch("http://localhost:5000/api/v1/partais", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, visiMisi: visiMisiArray }),
      });

      if (response.ok) {
        console.log("Data berhasil dikirim");
      } else {
        console.error("Data gagal dikirim");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

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
            <form className="flex flex-col " onSubmit={handleSubmit}>
              <label htmlFor="nama">Nama</label>
              <input
                className="border border-black w-72 p-2"
                type="text"
                id="nama"
                name="namaPartai"
                value={formData.namaPartai}
                onChange={handleChange}
              />
              <label htmlFor="ketuaUmum">Ketua Umum</label>
              <input
                className="border border-black w-72 p-2"
                type="text"
                id="ketuaUmum"
                name="ketuaUmum"
                value={formData.ketuaUmum}
                onChange={handleChange}
              />
              <label htmlFor="visiMisi">Visi Misi</label>
              <textarea
                className="border border-black w-72 p-2 h-20 resize-none"
                id="visiMisi"
                name="visiMisi"
                value={formData.visiMisi}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="alamat">Alamat</label>
              <textarea
                className="border border-black w-72 p-2 h-20 resize-none"
                id="alamat"
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="border border-black mt-3 bg-lime-900 text-white font-bold rounded-lg py-1 text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partai;
