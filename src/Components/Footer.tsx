const Footer = () => {
  return (
    <>
      <div
        className="w-f
       bg-black text-white flex p-7 "
      >
        <div className="w-96  flex items-center ms-28">
          <div className="   px-10 bg-black text-white items-center">
            <img className="w-16 " src="images/logo.png" alt="" />
          </div>
          <div>
            <h1 className="font-bold text-3xl"> DUMBWAYS.ID</h1>
            <p className="text-slate-300 text-xs">
              Jl. Elang IV Sawah Lama , Kec . Ciputat , Kota. Tanggerang Selatan
              , Banten 15413{" "}
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center
       bg-black text-white p-5 mt-1 text-center"
      >
        <h1>Komisi Pemilihan Umum Dumbways.ID | Arkan 2023</h1>
      </div>
    </>
  );
};

export default Footer;
