const InfoPaslon: React.FC = () => {
  return (
    <>
      <div className="bg-slate-300 py-10">
        <h1 className="text-center text-3xl text-lime-800 mb-7 font-bold">
          INFO PASLON
        </h1>
        <div className="flex w-2/4 gap-5 mx-auto border p-7 bg-white rounded shadow-lg shadow-indigo-500/40  ">
          <div>
            <img
              className="w-52 h-72 object-cover  my-auto"
              src="images/kpu.png"
              alt=""
            />
          </div>
          <div>
            <h3 className="font-bold text-black">Nomor Urut 1</h3>
            <h1 className="text-2xl text-red-950 font-bold mb-4">
              CINTARA SURYA PALOH
            </h1>

            <h3>Visi & Misi</h3>
            <li>Memindahkan indonesia ke israil</li>
            <li>Nonton anime 3x sehari</li>
            <li>Melakukan peresapan pada budaya jepang</li>
            <h3>Koalisi:</h3>
            <li>Partai persatuan wibu</li>
            <li>Partai redbul</li>
            <li>Partai black magic</li>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-36 mx-auto my-auto ">
        <h1 className="text-center mt-11 font-bold text-2xl text-red-600">
          PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK
          MELEGALKAN SLOT
        </h1>
      </div>
    </>
  );
};

export default InfoPaslon;
