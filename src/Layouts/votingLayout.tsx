import { useEffect, useState } from "react";
import Voting from "../Components/Voting";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

interface CandidateData {
  name: string;
  votes: number;
  no?: number;
  percentage?: string;
}

const VotingLayout = () => {
  const [candidatesData, setCandidatesData] = useState<CandidateData[]>([]);
  const [error, setError] = useState("");
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    fetchCandidateVotes();
  }, []);

  const fetchCandidateVotes = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/votes");
      if (response.ok) {
        const votes = await response.json();
        const candidateVotes = await calculateCandidateVotes(votes);
        setCandidatesData(candidateVotes);
        checkUserVote(); // Check if user has voted
      } else {
        setError("Failed to fetch candidate votes");
      }
    } catch (error) {
      setError("An error occurred: " + error);
    }
  };

  const calculateCandidateVotes = async (votes: any) => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/candidates");
      if (response.ok) {
        const candidates = await response.json();

        const candidateVotes: { [name: string]: number } = {};

        votes.forEach((vote: any) => {
          const candidateName = vote.paslon.namaPaslon;
          if (candidateVotes[candidateName]) {
            candidateVotes[candidateName]++;
          } else {
            candidateVotes[candidateName] = 1;
          }
        });

        const candidateData: CandidateData[] = Object.entries(
          candidateVotes
        ).map(([name, votes]) => ({
          name,
          votes,
        }));

        candidateData.forEach((candidate) => {
          const matchedCandidate = candidates.find(
            (c: any) => c.namaPaslon === candidate.name
          );
          if (matchedCandidate) {
            candidate.no = matchedCandidate.nomorUrut;
          }
        });

        const totalVotes = candidateData.reduce(
          (acc, candidate) => acc + candidate.votes,
          0
        );

        candidateData.forEach((candidate) => {
          candidate.percentage =
            ((candidate.votes / totalVotes) * 100).toFixed(2) + "%";
        });

        candidateData.sort((a, b) => (a.no || 0) - (b.no || 0));

        return candidateData;
      } else {
        throw new Error("Failed to fetch candidates");
      }
    } catch (error) {
      setError("An error occurred: " + error);
      return [];
    }
  };

  const checkUserVote = () => {
    if (localStorage.getItem("userId")) {
      setHasVoted(true);
    }
  };

  const handleButtonClick = () => {
    if (!hasVoted) {
      localStorage.setItem("userId", "1"); // Simulating user vote
      setHasVoted(true);
    } else {
      alert("Anda sudah memilih!");
    }
  };

  return (
    <>
      <div>
        {candidatesData && candidatesData.length > 0 ? (
          candidatesData.map((candidate, index) => (
            <Voting
              key={index}
              no={candidate.no || 0}
              name={candidate.name}
              persen={candidate.percentage || ""}
              background={
                index % 3 === 0
                  ? "bg-rose-500"
                  : index % 2 === 0
                  ? "bg-amber-400"
                  : "bg-teal-400"
              }
            />
          ))
        ) : (
          <p>Loading...</p>
        )}

        <div className="w-1/3 mt-3 mb-8">
          <button
            className={`font-bold py-2 px-4 text-center w-80 rounded-lg ${
              hasVoted
                ? "bg-transparent border border-red-500 text-red-500 hover:bg-red-700 hover:text-white"
                : "bg-lime-800 text-white"
            }`}
            onClick={handleButtonClick}
          >
            {hasVoted ? "ANDA SUDAH MEMILIH" : "MASUKAN SUARAMU"}
          </button>
        </div>
      </div>
    </>
  );
};

export default VotingLayout;
