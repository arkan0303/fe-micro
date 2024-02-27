const Card = () => {
  return (
    <>
      <div className="w-80  h-80 bg-slate-100 ">
        <img className="w-full" src="images/kpu.png" alt="" />
        <button className="bg-red-700 text-white mt-2 px-4 py-1 ms-4 rounded-md">
          SENIN, 03 JAN 2023
        </button>
        <h1 className="font-bold text-2xl ms-4 ">
          KPU TETAPKAN 3 MENTOR TERBAIK
        </h1>
        <p className="ms-4">Super Admin</p>
      </div>
    </>
  );
};

export default Card;
