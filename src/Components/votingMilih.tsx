import React, { useState } from "react";

interface Party {
  name: string;
  image: string;
  parties: string[];
}

const PartySelection: React.FC = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(
    null
  );

  const parties: Party[] = [
    {
      name: "CINTARA SURYA PALOH",
      image: "https://via.placeholder.com/150",
      parties: [
        "Partai persatuan monyet",
        "Partai sapi perah indonesia",
        "Partai pisang masak",
      ],
    },
    {
      name: "SURYA",
      image: "https://via.placeholder.com/150",
      parties: [
        "Partai persatuan monyet",
        "Partai sapi perah indonesia",
        "Partai pisang masak",
      ],
    },
    {
      name: "CINTARA SURYA PALOH",
      image: "https://via.placeholder.com/150",
      parties: [
        "Partai persatuan monyet",
        "Partai sapi perah indonesia",
        "Partai pisang masak",
      ],
    },
  ];

  const handleSelectCandidate = (index: number) => {
    setSelectedCandidate(selectedCandidate === index ? null : index);
  };

  return (
    <div className="flex space-x-4 p-4 bg-white rounded-lg shadow-md">
      {parties.map((party, index) => (
        <div
          key={index}
          className={`relative flex-1 max-w-sm p-4 rounded-lg ${
            selectedCandidate === index ? "bg-yellow-200" : "bg-gray-100"
          }`}
          onClick={() => handleSelectCandidate(index)}
        >
          <span
            className={`absolute top-0 right-0 bg-${
              selectedCandidate === index ? "red" : "black"
            } text-white py-1 px-3 rounded-full`}
          >
            {index + 1}
          </span>
          <div className="p-2 rounded-lg">
            <img
              src={party.image}
              alt="Party Logo"
              className="w-full h-auto mb-2"
            />
            <h2 className="text-xl font-bold mb-2">{party.name}</h2>
            <ul className="list-disc list-inside text-sm text-gray-500">
              {party.parties.map((subParty, subIndex) => (
                <li key={subIndex}>{subParty}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartySelection;
