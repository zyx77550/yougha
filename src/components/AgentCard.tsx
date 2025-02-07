
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
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "p-6 rounded-2xl transition-all duration-300 backdrop-blur-xl border",
        isMainAgent 
          ? "bg-gradient-to-br from-orange-950/90 via-yellow-900/50 to-orange-950/90 border-yellow-500/50 shadow-[0_0_30px_rgba(255,165,0,0.3)]" 
          : "bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border-orange-500/20",
        "hover:shadow-[0_0_30px_rgba(255,165,0,0.2)]"
      )}
    >
      <motion.div 
        className="flex items-center justify-between mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{
              rotate: isMainAgent ? [0, 360] : 0,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {isMainAgent ? (
              <Sparkles className="w-6 h-6 text-yellow-400" />
            ) : (
              <Brain className="w-6 h-6 text-orange-400" />
            )}
          </motion.div>
          <h3 className="font-bold text-lg tracking-tight bg-gradient-to-r from-yellow-200 via-orange-300 to-yellow-200 bg-clip-text text-transparent">
            {name}
          </h3>
        </div>
        <motion.div 
          className="flex items-center gap-2"
          animate={status === "active" ? {
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Activity 
            className={cn(
              "w-4 h-4 transition-colors duration-300",
              status === "active" ? "text-green-400" :
              status === "busy" ? "text-yellow-400" : "text-gray-400"
            )} 
          />
          <span className={cn(
            "text-sm capitalize",
            status === "active" ? "text-green-400" :
            status === "busy" ? "text-yellow-400" : "text-gray-400"
          )}>
            {status}
          </span>
        </motion.div>
      </motion.div>
      <motion.p 
        className="text-sm text-orange-200/60 font-medium mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {role}
      </motion.p>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-xs text-yellow-300 bg-yellow-950/30 p-2 rounded-lg w-fit border border-yellow-500/20 hover:border-yellow-500/40 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
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
