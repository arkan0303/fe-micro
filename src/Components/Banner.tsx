const Banner = () => {
  return (
    <>
      <div className=" mt-3 rounded-xl w-9/12 sm:w-9/12 px-6  mx-auto bg-red-800 h">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-56" src="images/dm.png" alt="" />
            <h1 className="text-6xl text-white mt-9 font-bold">
              SELAMAT DATANG
            </h1>
            <h6 className="text-white leading-tight">
              PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR
            </h6>
            <h6 className="text-white ">DIPILIH MELALU SEBUAH ARTI NAMA</h6>
          </div>
          <div>
            <img
              className="w-56 pe-8 mr-11 mb-6"
              src="images/kotak.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
