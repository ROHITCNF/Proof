import CandidateDashboard from "./Components/CandidateDashboard";
import Heatmap from "./Components/HeatMap";

function App() {
  return (
    <div className="flex h-screen p-4 gap-4">
      {/* Left Side: Candidate Dashboard */}
      <div className="w-1/4 border-r border-gray-300 p-4 overflow-y-auto">
        <CandidateDashboard />
      </div>

      {/* Right Side: Heatmap */}
      <div className="w-3/4 p-4 overflow-x-auto">
        <Heatmap />
      </div>
    </div>
  );
}

export default App;
