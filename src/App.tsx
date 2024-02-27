import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import CardTwo from "./Components/Card-2";
import Moto from "./Components/Moto";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div>
        <div className="bg-slate-300">
          <Navbar />
          <Banner />
          <div className="flex justify-center flex-wrap w-9/12 sm:w-9/12  mx-auto mt-11 gap-2 ">
            <CardTwo />
            <Card />
            <div className="mt-3 flex gap-5 pb-10">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <div>
          <Moto />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
