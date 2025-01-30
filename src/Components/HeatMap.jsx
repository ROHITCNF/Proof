import React, { useEffect, useState  , useMemo} from "react";
import HeatMapSquare from "./HeatMapSquare";
import { useSelector } from "react-redux";
const Heatmap = () => {
  const [candidateData, setCandidateDate] = useState([]);

  const candidates = useSelector((state) => state?.candidate);
  console.log("Logging candidates In Heat MAp", candidates);

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
  
  // Create a lookup table (candidateId -> skills set)
  /*
    {
      "cand1" : {
         "skill1" : 4,
         "skill2" : 3,
      }
    }
  */
    const candidateSkillsMap = useMemo(() => {
      const map = {};
    
      candidates?.forEach((candidate) => {
        const candId = candidate?.id; // Ensure candidate has an ID
        if (!candId) return;
    
        map[candId] = {}; // Initialize candidate skills object
    
        if (Array.isArray(candidate?.data?.data?.skillset)) {
          candidate?.data?.data?.skillset.forEach((skillData) => {
            const skillName = skillData?.skills?.[0]?.name;
            const score = skillData?.skills?.[0]?.pos?.[0]?.consensus_score ?? 0;
            if (skillName) {
              map[candId][skillName] = score; // Store skill score
            }
          });
        }
      });
    
      return map;
    }, [candidates]); 

    console.log('logging candidateSkillsMap', candidateSkillsMap);
    return (
      <div className="p-4">
        <p className="text-lg font-bold mb-3">Skills Heatmap</p>
        <div className="overflow-x-auto border border-gray-300 p-2 w-full max-w-xl">
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2 text-left">
                  Skill (Click on Candidate to Compare)
                </th>
                {candidates?.map((candidate) => (
                  <th key={candidate.id} className="border border-gray-400 px-4 py-2">
                    {candidate.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {skills.map((skill) => (
                <tr key={skill} className="border border-gray-400">
                  <td className="border border-gray-400 px-4 py-2">{skill}</td>
                  {candidates?.map((candidate) => (
                    <td key={candidate.id} className="border border-gray-400 px-4 py-2">
                      <HeatMapSquare
                        data={candidateSkillsMap[candidate.id]?.[skill]} // Fast lookup
                        rowName={skill}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default Heatmap;
