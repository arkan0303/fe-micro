import { DefaultizedPieValueType } from "@mui/x-charts";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";

const CartPie = () => {
  const [candidateVotes, setCandidateVotes] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ambil data hasil pemilihan dari API
        const response = await fetch("http://localhost:5000/api/v1/votes");
        if (response.ok) {
          const votes = await response.json();
          const total = votes.reduce((acc, vote) => acc + vote.totalVotes, 0);
          setCandidateVotes(votes);
          setTotalVotes(total);
        } else {
          console.error("Failed to fetch candidate votes");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  const getArcLabel = (params: DefaultizedPieValueType) => {
    // Hitung persentase suara untuk setiap kandidat
    const percent = (params.value / totalVotes) * 100;
    return `${percent.toFixed(0)}%`;
  };

  return (
    <div className="">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold">HASIL :</h2>
      </div>
      <PieChart
        series={[
          {
            outerRadius: 200,
            data: candidateVotes.map((candidate) => ({
              value: candidate.totalVotes,
              label: `${candidate.totalVotes}%`,
              color: candidate.color,
            })),
            arcLabel: getArcLabel,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "black",
            fontWeight: "bold",
            fontSize: 25,
          },
        }}
        width={400}
        height={400}
        margin={{ right: 5 }}
        legend={{ hidden: true }}
      />
    </div>
  );
};

export default CartPie;
