import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

import InfoPaslon from "../../Components/InfoPason";
import CartPie from "../../Components/cart";
import VotingLayout from "../../Layouts/votingLayout";

const VotingPage = () => {
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
        <InfoPaslon />
        <Footer />
      </div>
    </>
  );
};

export default VotingPage;
