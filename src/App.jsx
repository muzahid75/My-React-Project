import LeadSteps from "./components/LeadSteps";
import LeadDetails from "./components/LeadDetails";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-16 lg:ml-20">
        <TopNavbar />
        <LeadDetails />
      </div>
    </div>
  );
}
