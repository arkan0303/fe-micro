import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Banner from "../../Components/Banner";
import Card from "../../Components/Card";
import CardTwo from "../../Components/Card-2";
import Moto from "../../Components/Moto";
import Footer from "../../Components/Footer";

const Home: React.FC = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/articles");
        if (response.ok) {
          const data = await response.json();
          setArticles(data);
          console.log(data);
        } else {
          console.error("Failed to fetch articles");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <div>
        <div className="bg-slate-300 pb-8">
          <Navbar
            header="PEMILU PRESIDEN DUMBWAYS.ID "
            voting="/voting"
            partai="#"
            paslon="#"
            children="Voting"
          />
          <Banner />

          <div className="flex justify-center flex-wrap w-9/12 sm:w-9/12  mx-auto mt-11 gap-3 mb-4 ">
            <CardTwo />

            {articles.map((article) => (
              <Card
                key={article.id}
                title={article.title}
                createdAt={new Date(article.createdAt)} // Mengonversi string tanggal menjadi objek Date
                username={article.username}
              />
            ))}
          </div>
        </div>
        <Moto
          children="PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS PASTIKAN
          MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT"
          color="text-black"
        />
        <Footer />
      </div>
    </>
  );
};

export default Home;
