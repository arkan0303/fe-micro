import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Components/InfoUser.tsx";

// Mendefinisikan tipe untuk user
interface User {
  fullName: string;
  password: string;
}

const LoginPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
  });
  const [registeredUsers, setRegisteredUsers] = useState<User[]>([]);
  const navigate = useNavigate();
  const { loginUser } = useUser(); // Gunakan hook useUser untuk mendapatkan fungsi loginUser

  useEffect(() => {
    const fetchRegisteredUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/users");
        if (response.ok) {
          const data = await response.json();
          setRegisteredUsers(data);
        } else {
          throw new Error("Failed to fetch registered users");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchRegisteredUsers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fullName, password } = formData;
    const user = registeredUsers.find(
      (user) => user.fullName === fullName && user.password === password
    );

    if (user) {
      loginUser(user); // Panggil fungsi loginUser untuk menyimpan data pengguna
      if (user.status === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/home");
      }
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <div className="flex justify-center flex-col min-h-screen items-center">
        <div className="w-full max-w-xs p-5 border border-slate-300 rounded ">
          <h1 className="text-3xl font-bold  text-blue-600">Login</h1>
          <p className="font-medium text-slate-500 mb-5">
            Welcome, please enter your details
          </p>

          <form onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="fullname"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                name="fullName"
                placeholder="Enter your fullname"
                className="border w-full px-4 py-2 text-slate-600 placeholder-opacity-50"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="password"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="border w-full px-4 py-2 text-slate-600 placeholder-opacity-50"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white mt-3 px-4 py-1 rounded-sm"
            >
              SUBMIT
            </button>
          </form>

          <p className="text-sm text-center mt-2">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-blue-600 underline underline-offset-4"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
