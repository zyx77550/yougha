
import { DashboardHeader } from "./DashboardHeader";
import { DashboardBackground } from "./DashboardBackground";
import { AgentGrid } from "./AgentGrid";
import { FloatingAPIButton } from "./FloatingAPIButton";

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      <DashboardBackground />
      
      <div className="relative z-10 container mx-auto p-6">
        <DashboardHeader />
        <AgentGrid />
      </div>

      <FloatingAPIButton />
    </div>
  );
};
