import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import Detail from "./pages/users/Detail.tsx";
import Dasboard from "./pages/admin/Dashboard.tsx";
import Paslon from "./pages/admin/Paslon.tsx";
import Partai from "./pages/admin/Partai.tsx";
import ListPaslon from "./pages/admin/ListPaslon.tsx";
import ListPartai from "./pages/admin/ListPartai.tsx";
import VotingPage from "./pages/users/VotingPage.tsx";
import Home from "./pages/users/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/Register",
    element: <RegisterPage />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/dashboard",
    element: <Dasboard />,
  },
  {
    path: "/paslon",
    element: <Paslon />,
  },
  {
    path: "/partai",
    element: <Partai />,
  },
  {
    path: "/list-paslon",
    element: <ListPaslon />,
  },
  {
    path: "/list-partai",
    element: <ListPartai />,
  },
  {
    path: "/voting",
    element: <VotingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
