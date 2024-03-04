import { useState } from "react";
import Voting from "../Components/Voting";

const VotingLayout = () => {
  const [getButton, setButton] = useState(false);

  const handleClickButton = () => {
    setButton(!getButton);
  };

  return (
    <>
      <div>
        <Voting
          no="3"
          name="CINTARA SURYA PALOH"
          persen="75%"
          background="bg-rose-500"
        />
        <Voting
          no="1"
          name="SURYA SURYA"
          persen="45%"
          background="bg-amber-400"
        />
        <Voting
          no="2"
          name="CINTARA BASUKI"
          persen="25%"
          background="bg-teal-400"
        />
        <div className="w-1/3 mt-3 mb-8">
          <button
            onClick={handleClickButton}
            className={` font-bold py-2 px-4 text-center w-80 rounded-lg ${
              getButton
                ? "text-red-800 font-bold text-2xl"
                : "bg-lime-800 text-white "
            }`}
          >
            {getButton ? (
              <a href="#" className="">
                ANDA SUDAH MEMILIH{" "}
              </a>
            ) : (
              "MASUKAN SUARAMU"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default VotingLayout;
