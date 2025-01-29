import React, { useEffect, useState } from "react";
import HeatMapSquare from "./HeatMapSquare";
import { useSelector } from "react-redux";
const Heatmap = () => {
  const [candidateData, setCandidateDate] = useState([]);

  const candidates = useSelector((state) => state?.candidate);
  console.log("LOgging candidates In Heat MAp", candidates);

  // Fixed Skills List
  const skills = [
    "Creating Wireframes",
    "Creating Basic Prototypes",
    "Creation of Brands",
    "Applying Color Theory",
    "Using Figma for Design",
    "Application of Typography",
    "Creating Effective Icons",
    "Optimizing Touch Points",
    "Addressing User Pain Points",
    "Conducting User Research",
    "Applying Question Skills",
    "Conducting Heruistic evaluation",
  ];

  return (
    <div className="p-4">
      <p className="text-lg font-bold mb-3">Skills Heatmap</p>
      <div className="overflow-x-auto border border-gray-300 p-2 w-full max-w-xl">
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2 text-left">
                Skill(Click On Candidate to compare)
              </th>
            </tr>
          </thead>
          <tbody>
            {skills.map((row, index) => (
              <tr key={index} className="border border-gray-400">
                {/* Skill Name */}
                <td className="border border-gray-400 px-4 py-2">{row}</td>
                {/* Heatmap Square */}
                {candidates?.map((value, index) => {
                  return (
                    <HeatMapSquare key={index} data={value} rowName={row} />
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Heatmap;
