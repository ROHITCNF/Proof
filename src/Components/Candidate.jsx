import { useDispatch, useSelector } from "react-redux";
import { addCandidate } from "../store/CandidateSlice";

const Candidate = (props) => {
  const { name, id } = props?.candidateData;

  const dispatch = useDispatch();
  const candidates = useSelector((state) => state?.candidate);

  //console.log("Logging Candidates", candidates);

  const handleCandidateSelect = async () => {
    const candidateDataFromApi = await fetch(
      `https://forinterview.onrender.com/people/${id}`
    );
    const candidateData = await candidateDataFromApi.json();
    dispatch(addCandidate(candidateData));
    console.log("Dispatched Data");

    if (candidateData) {
      //   console.log(candidateData);
    }
  };

  return (
    <div
      className="flex items-center gap-4 p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition"
      onClick={handleCandidateSelect}
    >
      {/* Candidate Image */}
      <img
        src="https://avatars.githubusercontent.com/u/100084524"
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Candidate Name */}
      <div className="text-lg font-semibold text-gray-800">{name}</div>
    </div>
  );
};

export default Candidate;
