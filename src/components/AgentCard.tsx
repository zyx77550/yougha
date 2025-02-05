
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
        "p-6 rounded-2xl backdrop-blur-xl transition-all duration-500 animate-fade-in hover:scale-105 shadow-lg",
        isMainAgent 
          ? "bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700" 
          : "bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-800",
        "hover:border-gray-600 hover:shadow-xl hover:-translate-y-1"
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Brain 
            className={cn(
              "w-6 h-6 transition-all duration-300",
              isMainAgent ? "text-white animate-pulse" : "text-gray-400"
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
          <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-800/50 p-2 rounded-lg w-fit">
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
