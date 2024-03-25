import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Paslon {
  id: number;
  nomorUrut: number;
  namaPaslon: string;
  visiMisi: string[];
  partai: { id: number; namaPartai: string }[];
}

const PartySelection: React.FC = () => {
  const [paslonList, setPaslonList] = useState<Paslon[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(
    null
  );
  const [message, setMessage] = useState<string>("");
  const [votingCompleted, setVotingCompleted] = useState<boolean>(false);
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchPaslonList();
  }, []);

  const fetchPaslonList = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/candidates");
      if (response.ok) {
        const data = await response.json();
        setPaslonList(data);
      } else {
        console.error("Failed to fetch candidate list");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleSelectCandidate = (index: number) => {
    setSelectedCandidate(selectedCandidate === index ? null : index);
  };

  const handleSubmit = async () => {
    try {
      if (selectedCandidate !== null && userId !== null) {
        const response = await fetch("http://localhost:5000/api/v1/vote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            candidateId: paslonList[selectedCandidate].id,
            userId: parseInt(userId),
          }),
        });

        if (response.ok) {
          setMessage("Vote successfully casted");
          setVotingCompleted(true);
          navigate("/voting");
        } else {
          setMessage("Failed to cast vote");
        }
      } else {
        setMessage("No candidate selected or user ID missing.");
      }
    } catch (error) {
      setMessage("An error occurred: " + error);
    }
  };

  const handleReset = () => {
    setSelectedCandidate(null);
    setMessage("");
    setVotingCompleted(false);
  };

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-4 pt-4">
        {paslonList.map((paslon, index) => (
          <div
            key={paslon.id}
            className={`relative  w-96 p-4 rounded-lg ${
              selectedCandidate === index ? "bg-yellow-200" : "bg-gray-100"
            }`}
            onClick={() => handleSelectCandidate(index)}
          >
            <span
              className={`absolute top-0 right-0 bg-${
                selectedCandidate === index ? "red" : "black"
              } text-white py-1 px-3 rounded-full`}
            >
              {paslon.nomorUrut}
            </span>
            <div className="p-2 rounded-lg">
              <div className="flex justify-center">
                <img
                  src="images/kpu.png"
                  alt="Candidate Image"
                  className="w-full h-auto mb-2"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">{paslon.namaPaslon}</h2>
              <h3 className="text-lg font-semibold mt-4">Visi Misi:</h3>
              <ul className="list-disc list-inside text-sm text-gray-500">
                {paslon.visiMisi.map((visi, subIndex) => (
                  <li key={subIndex}>{visi}</li>
                ))}
              </ul>
              <h3 className="text-lg font-semibold mt-4">Koalisi Partai:</h3>
              <ul className="list-disc list-inside text-sm text-gray-500">
                {paslon.partai.map((partai, subIndex) => (
                  <li key={partai.id}>{partai.namaPartai}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {votingCompleted ? (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleReset}
          >
            Thank You!
          </button>
        ) : (
          <>
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                selectedCandidate !== null
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }`}
              onClick={handleSubmit}
              disabled={selectedCandidate === null}
            >
              Submit
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleReset}
            >
              Reset
            </button>
          </>
        )}
      </div>
      {message && <div className="text-center mt-4">{message}</div>}
    </div>
  );
};

export default PartySelection;
