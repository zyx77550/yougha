import { Brain, Activity, Cpu, Sparkles } from "lucide-react";
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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "p-6 rounded-2xl transition-all duration-300",
        isMainAgent 
          ? "bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-teal-900/90 border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]" 
          : "bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border border-gray-700/50",
        "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] backdrop-blur-xl"
      )}
    >
      <motion.div 
        className="flex items-center justify-between mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{
              rotate: isMainAgent ? [0, 360] : 0,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {isMainAgent ? (
              <Sparkles className="w-6 h-6 text-purple-400" />
            ) : (
              <Brain className="w-6 h-6 text-gray-400" />
            )}
          </motion.div>
          <h3 className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-purple-200 to-teal-200 bg-clip-text text-transparent">
            {name}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <Activity 
            className={cn(
              "w-4 h-4 transition-colors duration-300",
              status === "active" ? "text-teal-400 animate-pulse" :
              status === "busy" ? "text-amber-400" : "text-gray-400"
            )} 
          />
          <span className={cn(
            "text-sm capitalize",
            status === "active" ? "text-teal-400" :
            status === "busy" ? "text-amber-400" : "text-gray-400"
          )}>
            {status}
          </span>
        </div>
      </motion.div>
      <p className="text-sm text-purple-100/60 font-medium mb-3">{role}</p>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-xs text-teal-300 bg-teal-950/30 p-2 rounded-lg w-fit border border-teal-500/20 hover:border-teal-500/40 transition-colors"
          >
            <Cpu className="w-3 h-3" />
            <span>{model}</span>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Modèle d'IA utilisé</p>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
};