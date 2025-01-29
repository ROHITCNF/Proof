const HeatMapSquare = ({ data, rowName }) => {
  let score = 0; // Default value

  try {
    if (Array.isArray(data?.data?.skillset)) {
      data.data.skillset.forEach((element) => {
        if (element?.skills?.[0]?.name === rowName) {
          score = element?.skills?.[0]?.pos?.[0]?.consensus_score ?? 0;
        }
      });
    }
  } catch (error) {
    console.error("Error extracting score:", error);
    score = 0; // Ensure default value in case of an error
  }

  // Function to get background color based on score
  const getColor = (value) => {
    if (value === 4) return "bg-green-800";
    if (value === 3) return "bg-green-600";
    if (value === 2) return "bg-green-400";
    if (value === 1) return "bg-green-200";
    return "bg-green-100"; // Default color
  };

  return (
    <td className="border border-gray-400 px-4 py-2">
      <div
        className={`w-10 h-10 flex items-center justify-center text-white font-bold ${getColor(
          score
        )}`}
      ></div>
    </td>
  );
};

export default HeatMapSquare;
