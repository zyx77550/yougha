
import { Brain, Activity, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

interface AgentCardProps {
  name: string;
  role: string;
  status: "active" | "idle" | "busy";
  isMainAgent?: boolean;
  model: string;
}

export const AgentCard = ({ name, role, status, isMainAgent, model }: AgentCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "p-6 rounded-2xl transition-all duration-300 backdrop-blur-xl",
        isMainAgent 
          ? "bg-gradient-to-br from-purple-900/90 via-indigo-900/90 to-purple-900/90 border border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.4)]" 
          : "bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-800/80 border border-gray-700/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
        "hover:border-purple-500/50 transform-gpu"
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Brain 
            className={cn(
              "w-6 h-6 transition-all duration-300",
              isMainAgent ? "text-purple-400 animate-pulse" : "text-gray-400"
            )} 
          />
          <h3 className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            {name}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <Activity 
            className={cn(
              "w-4 h-4 transition-colors duration-300",
              status === "active" ? "text-green-400 animate-pulse" :
              status === "busy" ? "text-amber-400" : "text-gray-400"
            )} 
          />
          <span className={cn(
            "text-sm capitalize",
            status === "active" ? "text-green-400" :
            status === "busy" ? "text-amber-400" : "text-gray-400"
          )}>
            {status}
          </span>
        </div>
      </div>
      <p className="text-sm text-purple-100/60 font-medium mb-3">{role}</p>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2 text-xs text-purple-300 bg-purple-950/50 p-2 rounded-lg w-fit border border-purple-500/20 hover:border-purple-500/40 transition-colors">
            <Cpu className="w-3 h-3" />
            <span>{model}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Modèle d'IA utilisé</p>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
};
