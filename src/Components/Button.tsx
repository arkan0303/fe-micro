import { useNavigate } from "react-router-dom";
import { useUser } from "./InfoUser.tsx";

const Button = () => {
  const { user } = useUser(); // Gunakan useUser() hook untuk mengakses informasi pengguna
  const navigate = useNavigate(); // Gunakan useHistory() hook untuk melakukan navigasi

  const handleLoginClick = () => {
    // Cek apakah pengguna sudah login atau belum
    if (!user) {
      // Jika belum login, lakukan navigasi ke halaman login
      navigate("/login");
    }
  };

  return (
    <>
      {/* Tambahkan className yang sesuai untuk styling */}
      <span
        onClick={handleLoginClick}
        className="py-1 px-4 rounded bg-white text-black font-bold hover:bg-blue-700 cursor-pointer"
      >
        {/* Ubah kondisi disini sesuai dengan status login pengguna */}
        {user ? `Hallo, ${user.fullName}` : "Login"}
      </span>
    </>
  );
};

export default Button;
