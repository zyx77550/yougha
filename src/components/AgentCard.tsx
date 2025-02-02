import { Brain, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface AgentCardProps {
  name: string;
  role: string;
  status: "active" | "idle" | "busy";
  isMainAgent?: boolean;
}

export const AgentCard = ({ name, role, status, isMainAgent }: AgentCardProps) => {
  return (
    <div className={cn(
      "p-6 rounded-xl backdrop-blur-xl transition-all duration-300 animate-fade-in",
      isMainAgent ? "bg-primary/10 border border-primary/20" : "bg-card/50 border border-white/10",
      "hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Brain className={cn(
            "w-6 h-6",
            isMainAgent ? "text-primary" : "text-white/70"
          )} />
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Activity className={cn(
            "w-4 h-4",
            status === "active" ? "text-green-400" :
            status === "busy" ? "text-yellow-400" : "text-gray-400"
          )} />
          <span className="text-sm text-white/70 capitalize">{status}</span>
        </div>
      </div>
      <p className="text-sm text-white/60">{role}</p>
    </div>
  );
};