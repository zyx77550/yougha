
import { DashboardHeader } from "./DashboardHeader";
import { DashboardBackground } from "./DashboardBackground"; 
import { AgentGrid } from "./AgentGrid";
import { FloatingAPIButton } from "./FloatingAPIButton";
import { Sidebar } from "./Sidebar";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#1a1a1a] relative overflow-hidden">
      <DashboardBackground />
      
      <div className="flex">
        <Sidebar />
        <div className="flex-1 relative z-10 p-6">
          <DashboardHeader />
          <AgentGrid />
        </div>
      </div>

      <FloatingAPIButton />
    </div>
  );
};
