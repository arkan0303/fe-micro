import React from "react";
import Navbar from "../../Components/Navbar";
import Banner from "../../Components/Banner";
import Card from "../../Components/Card";
import CardTwo from "../../Components/Card-2";
import Moto from "../../Components/Moto";
import Footer from "../../Components/Footer";
import Dummy from "../../mocks/Dummy.json";
import { Article } from "../../Interfaces/Article";

const Home: React.FC = () => {
  const [getArticle, setArticle] = React.useState<Article[]>(Dummy);

  console.log(getArticle);
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
            {getArticle.map((data: Article) => {
              return <Card />;
            })}
          </div>
        </div>
        <Moto />
        <Footer />
      </div>
    </>
  );
};

export default Home;
