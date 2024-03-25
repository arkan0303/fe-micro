import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";

interface Voter {
  user: {
    fullName: string;
    alamat: string;
    jenisKelamin: string;
  };
  paslon: {
    namaPaslon: string;
  };
}

const Dashboard: React.FC = () => {
  const [voterList, setVoterList] = useState<Voter[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchVoterList();
  }, []);

  const fetchVoterList = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/votes");
      if (response.ok) {
        const data: Voter[] = await response.json();
        setVoterList(data);
        console.log("ini", data);
      } else {
        setError("Failed to fetch voter data");
      }
    } catch (error) {
      setError("An error occurred: " + error);
    }
  };

  // Function to calculate percentage
  const calculatePercentage = (
    candidateVotes: number,
    totalVotes: number
  ): string => {
    return ((candidateVotes / totalVotes) * 100).toFixed(2);
  };

  // Function to get total number of votes
  const getTotalVotes = (): number => {
    return voterList.length;
  };

  // Function to render candidate cards
  const renderCandidateCards = () => {
    // Group votes by candidate
    const votesByCandidate: { [key: string]: number } = {};
    voterList.forEach((vote) => {
      const candidateName = vote.paslon.namaPaslon;
      if (!votesByCandidate[candidateName]) {
        votesByCandidate[candidateName] = 0;
      }
      votesByCandidate[candidateName]++;
    });

    // Get total votes
    const totalVotes = getTotalVotes();

    // Render candidate cards
    return Object.keys(votesByCandidate).map((candidateName, index) => (
      <div key={index} className="flex flex-col w-80 border-l-rose-800 mx-auto">
        <div className="w-80 mb-3 flex justify-center">
          <h3 className="text-center flex items-center justify-center text-black bg-yellow-500 rounded-full w-10 h-9 border-slate-950 drop-shadow-lg font-black">
            {index + 1}
          </h3>
        </div>
        <div className="w-80 mx-auto border p-3 bg-yellow-500 rounded-lg">
          <img className="rounded-lg" src="images/kpu.png" alt="" />
          <h2 className="font-bold text-zinc-950 text-2xl">{candidateName}</h2>
          <p className="text-zinc-950 font-bold">
            Akumulasi:{" "}
            {calculatePercentage(votesByCandidate[candidateName], totalVotes)}%
          </p>
          <p className="text-zinc-950 font-bold">
            Jumlah Vote: {votesByCandidate[candidateName]} Voters
          </p>
        </div>
      </div>
    ));
  };
  return (
    <>
      <Navbar header="DASHBOARD PEMILU " partai="/partai" paslon="/paslon" />
      <div className="w-full">
        <h1 className="text-center font-bold text-3xl my-8">DASHBOARD</h1>
        <div className="w-9/12 sm:w-9/12 mx-auto flex flex-wrap">
          {renderCandidateCards()}
        </div>
      </div>
      <div className="bg-slate-300 mt-14 pb-32">
        <div className="w-9/12 sm:w-9/12 mx-auto">
          <h1 className="text-center mb-8 pt-16 text-3xl font-bold">
            LIST VOTER
          </h1>
          {error ? (
            <div className="text-red-600 text-center">{error}</div>
          ) : (
            <>
              <table className="w-full mx-auto border bg-slate-200">
                <thead>
                  <tr>
                    <th className="p-3 text-left border border-zinc-950 bg-slate-300">
                      No
                    </th>
                    <th className="p-3 text-left border border-zinc-950 bg-slate-300">
                      Nama
                    </th>
                    <th className="p-3 text-left border border-zinc-950 bg-slate-300">
                      Alamat
                    </th>
                    <th className="p-3 text-left border border-zinc-950 bg-slate-300">
                      Jenis Kelamin
                    </th>
                    <th className="p-3 text-left border border-zinc-950 bg-slate-300">
                      Paslon
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {voterList.map((voter, index) => (
                    <tr key={index}>
                      <td className="p-3 text-left border border-zinc-950">
                        {index + 1}
                      </td>
                      <td className="p-3 text-left border border-zinc-950">
                        {voter.user.fullName}
                      </td>
                      <td className="p-3 text-left border border-zinc-950">
                        {voter.user.alamat}
                      </td>
                      <td className="p-3 text-left border border-zinc-950">
                        {voter.user.jenisKelamin}
                      </td>
                      <td className="p-3 text-left border border-zinc-950">
                        {voter.paslon.namaPaslon}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h1 className="text-left mt-4 text-2xl font-bold">
                TOTAL SUARA TERKUMPUL : {voterList.length} Voters
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
