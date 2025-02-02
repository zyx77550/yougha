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
      "p-6 rounded-2xl backdrop-blur-xl transition-all duration-500 animate-fade-in hover:scale-105",
      isMainAgent 
        ? "bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30" 
        : "bg-gradient-to-br from-card/60 to-background/60 border border-white/10",
      "hover:border-primary/40 hover:shadow-lg hover:-translate-y-1"
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Brain className={cn(
            "w-6 h-6 transition-all duration-300",
            isMainAgent ? "text-primary animate-pulse" : "text-white/70"
          )} />
          <h3 className="font-semibold text-lg tracking-tight">{name}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Activity className={cn(
            "w-4 h-4 transition-colors duration-300",
            status === "active" ? "text-green-400" :
            status === "busy" ? "text-amber-400" : "text-gray-400"
          )} />
          <span className="text-sm text-white/70 capitalize">{status}</span>
        </div>
      </div>
      <p className="text-sm text-white/60 font-medium">{role}</p>
    </div>
  );
};