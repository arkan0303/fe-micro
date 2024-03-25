import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";

interface Partai {
  id: number;
  namaPartai: string;
}

const Paslon = () => {
  const [formData, setFormData] = useState({
    nama_paslon: "",
    nomor_urut: 0,
    visi_misi: "",
    partaiIds: [] as number[],
  });
  const [partaiList, setPartaiList] = useState<Partai[]>([]);
  const [selectedPartai, setSelectedPartai] = useState<Partai[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchPartaiList();
  }, []);

  const fetchPartaiList = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/partais");
      if (response.ok) {
        const data = await response.json();
        setPartaiList(data);
      } else {
        console.error("Gagal mengambil data partai");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePartaiSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedPartaiIds = Array.from(e.target.options)
      .filter((option) => option.selected)
      .map((option) => parseInt(option.value));
    const selectedPartaiObjects = selectedPartaiIds
      .map((id) => partaiList.find((partai) => partai.id === id))
      .filter((partai) => partai) as Partai[];

    setSelectedPartai((prevSelectedPartai) => [
      ...prevSelectedPartai,
      ...selectedPartaiObjects,
    ]);
    setFormData({ ...formData, partaiIds: selectedPartaiIds });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const visiMisiArray = formData.visi_misi
        .split(";")
        .map((item) => item.trim());

      const dataToSend = {
        nama_paslon: formData.nama_paslon,
        nomor_urut: formData.nomor_urut,
        visi_misi: visiMisiArray,
        partaiIds: selectedPartai.map((partai) => partai.id),
      };

      const response = await fetch("http://localhost:5000/api/v1/candidates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        navigate("/list-paslon");
        console.log("Data berhasil dikirim");
      } else {
        const data = await response.json();
        console.error("Data gagal dikirim:", data.error);
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
          ADD PASLON
        </h1>
        <div className="flex justify-center w-2/4 h-3/5 mx-auto gap-6 border p-2 shadow-lg shadow-indigo-500/40">
          <img
            className="w-52 h-72 object-cover my-auto"
            src="images/kpu.png"
            alt=""
          />
          <div className="flex flex-col ">
            <form className="flex flex-col " onSubmit={handleSubmit}>
              <label htmlFor="name">Nama Paslon</label>{" "}
              <input
                className="border border-black w-72 p-2"
                type="text"
                id="name"
                name="nama_paslon"
                value={formData.nama_paslon}
                onChange={handleChange}
              />
              <label htmlFor="nomor">Nomor Urut</label>
              <input
                className="border border-black w-72 p-2"
                type="number"
                id="nomor"
                name="nomor_urut"
                value={formData.nomor_urut}
                onChange={handleChange}
              />
              <label htmlFor="visi">Visi Misi</label>
              <textarea
                className="border border-black  w-72 p-2 h-32"
                id="visi"
                name="visi_misi"
                value={formData.visi_misi}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="partai">Partai</label>
              <select
                className="border border-black w-72 p-2"
                id="partai"
                name="partai"
                onChange={handlePartaiSelect}
              >
                {partaiList.map((partai) => (
                  <option key={partai.id} value={partai.id}>
                    {partai.namaPartai}
                  </option>
                ))}
              </select>
              <div>
                <strong>Partai yang dipilih:</strong>
                <ul>
                  {selectedPartai.map((partai) => (
                    <li key={partai.id}>{partai.namaPartai}</li>
                  ))}
                </ul>
              </div>
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

export default Paslon;
