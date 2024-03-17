import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    alamat: "",
    jenisKelamin: "",
    email: "",
    password: "",
    status: "user",
  });

  const navigate = useNavigate(); // initialize useNavigate hook

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/v1/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data); // log response data
      // If registration is successful, redirect to login page
      if (response.ok) {
        navigate("/login"); // navigate to login page
      } else {
        // Handle error
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center flex-col min-h-screen items-center">
        <div className="w-full max-w-xs p-5 border border-slate-300 rounded ">
          <h1 className="text-3xl font-bold  text-blue-600">Register</h1>
          <p className="font-medium text-slate-500 mb-5">
            Welcome, please enter your details
          </p>

          <form onSubmit={handleSubmit}>
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
                placeholder="Enter your Fullname"
                className="border w-full px-4 py-2 text-slate-600 placeholder-opacity-50"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="alamat"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                Alamat
              </label>
              <input
                type="text"
                id="alamat"
                name="alamat"
                placeholder="Enter your alamat"
                className="border w-full px-4 py-2 text-slate-600 placeholder-opacity-50"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="jenisKelamin"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                Jenis Kelamin
              </label>
              <input
                type="text"
                id="jenisKelamin"
                name="jenisKelamin"
                placeholder="Enter your Jenis Kelamin"
                className="border w-full px-4 py-2 text-slate-600 placeholder-opacity-50"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="username"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="username"
                name="email"
                placeholder="Enter your email"
                className="border w-full px-4 py-2 text-slate-600 placeholder-opacity-50"
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
            Don't have an account ?{" "}
            <a
              href="/login"
              className="text-blue-600 underline underline-offset-4"
            >
              login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
