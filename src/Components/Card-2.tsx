import { Link } from "react-router-dom";
const CardTwo = () => {
  return (
    <>
      <div
        className="w-2/3 p-3 h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(images/kpu.png)` }}
      >
        <button className="bg-red-700 text-white  px-4 py-1 mt-48 ">
          SENIN, 03 JAN 2023
        </button>
        <Link className="font-bold text-white text-3xl" to="/detail">
          KPU TETAPKAN 3 MENTOR TERBAIK
        </Link>
        <p className="text-white  text-2xl ">Super Admin</p>
      </div>
    </>
  );
};

export default CardTwo;
