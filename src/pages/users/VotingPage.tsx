import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import CartPie from "../../Components/cart";
import VotingLayout from "../../Layouts/votingLayout";
import Moto from "../../Components/Moto";
import { Paslon } from "../../Interfaces/Paslon";
import InfoPaslon from "../../Components/InfoPason";

const VotingPage = () => {
  const [paslonList, setPaslonList] = useState<Paslon[]>([]);

  useEffect(() => {
    fetchPaslon();
  }, []);

  const fetchPaslon = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/candidates");
      if (response.ok) {
        const data = await response.json();
        setPaslonList(data);
        console.log(data);
      } else {
        console.log("gagal mengambil data");
      }
    } catch (error) {
      console.log("terjadi kesalahan", error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Navbar header="PEMILU PRESIDEN DUMBWAYS.ID " voting="Voting" />
        <h1 className="my-5 text-3xl text-lime-800 font-bold text-center">
          INFO PEMILU TERUPDATE{" "}
        </h1>
        <div className=" w-full flex justify-center gap-11">
          <CartPie />
          <VotingLayout />
        </div>
        <div className="bg-slate-300 py-10">
          <h1 className="text-center text-3xl text-lime-800 mb-7 font-bold">
            INFO PASLON
          </h1>
          <Slider {...settings}>
            {paslonList.map((paslon) => (
              <InfoPaslon key={paslon.id} paslon={paslon} />
            ))}
          </Slider>
        </div>
        <Moto
          children="PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK MELEGALKAN SLOT"
          color="text-red-600"
        />
        <Footer />
      </div>
    </>
  );
};

export default VotingPage;
