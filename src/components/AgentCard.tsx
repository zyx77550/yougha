import { Brain, Activity, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AgentCardProps {
  name: string;
  role: string;
  status: "active" | "idle" | "busy";
  isMainAgent?: boolean;
  model: string;
}

export const AgentCard = ({ name, role, status, isMainAgent, model }: AgentCardProps) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-2xl backdrop-blur-xl transition-all duration-500 animate-fade-in hover:scale-105",
        isMainAgent 
          ? "bg-gradient-to-br from-amber-500/20 to-purple-500/20 border border-amber-500/30" 
          : "bg-gradient-to-br from-purple-900/60 to-slate-900/60 border border-purple-500/10",
        "hover:border-amber-500/40 hover:shadow-lg hover:-translate-y-1"
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Brain 
            className={cn(
              "w-6 h-6 transition-all duration-300",
              isMainAgent ? "text-amber-400 animate-pulse" : "text-purple-400"
            )} 
          />
          <h3 className="font-semibold text-lg tracking-tight">{name}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Activity 
            className={cn(
              "w-4 h-4 transition-colors duration-300",
              status === "active" ? "text-green-400" :
              status === "busy" ? "text-amber-400" : "text-gray-400"
            )} 
          />
          <span className="text-sm text-white/70 capitalize">{status}</span>
        </div>
      </div>
      <p className="text-sm text-white/60 font-medium mb-3">{role}</p>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2 text-xs text-purple-300/70 bg-purple-950/30 p-2 rounded-lg w-fit">
            <Cpu className="w-3 h-3" />
            <span>{model}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Modèle d'IA utilisé</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};