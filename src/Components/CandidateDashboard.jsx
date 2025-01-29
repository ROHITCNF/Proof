import { useEffect, useState } from "react";
import Candidate from "./Candidate";

const CandidateDashboard = () => {
  const [candidateList, setCandidateList] = useState([]);
  const listOfCandidatesApi = "https://forinterview.onrender.com/people";

  const fetchCandidateData = async () => {
    const candidateListFromApi = await fetch(listOfCandidatesApi);
    const candidateListData = await candidateListFromApi.json();
    console.log(candidateListData);
    setCandidateList(candidateListData);
  };

  useEffect(() => {
    fetchCandidateData();
  }, []);

  return !candidateList?.length ? (
    <div className="text-center text-xl font-semibold">
      Loading Candidates...
    </div>
  ) : (
    <div className="w-[400px] h-[500px] border shadow-md rounded-lg p-4">
      <p className="text-lg font-bold mb-3">Candidate Dashboard</p>

      {/* Scrollable container */}
      <div className="h-[420px] overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {candidateList.map((value) => (
          <Candidate key={value?.id} candidateData={value} />
        ))}
      </div>
    </div>
  );
};

export default CandidateDashboard;
