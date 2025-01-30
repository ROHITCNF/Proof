const HeatMapSquare = ({ data, rowName }) => {
  console.log('logging data in Square Component', data);
  console.log('logging rowName in Square Component', rowName);
  let score = data ? data : 0;


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
