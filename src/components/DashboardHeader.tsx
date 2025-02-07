
import { motion } from "framer-motion";
import { Brain, Sparkles, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { GitDialog } from "./GitDialog";
import { TerminalDialog } from "./TerminalDialog"; 
import { ChatDialog } from "./ChatDialog";
import { useAutoGPT } from "@/hooks/use-auto-gpt";

export const DashboardHeader = () => {
  const { createInstance } = useAutoGPT();

  const handleCreateAutoGPT = () => {
    createInstance.mutate({
      name: `Auto-GPT Clone`,
      config: {
        goals: ["Assist with coding tasks", "Help with project management"],
        constraints: ["Follow best practices", "Maintain code quality"],
      }
    });
  };

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between mb-12"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex space-x-3"
      >
        <GitDialog />
        <TerminalDialog />
        <ChatDialog />
      </motion.div>

      <motion.h1 
        className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 flex items-center gap-4"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Brain className="w-16 h-16 text-amber-400 animate-pulse" />
        YouGha
        <Sparkles className="w-12 h-12 text-amber-400 animate-pulse" />
      </motion.h1>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={handleCreateAutoGPT}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Auto-GPT
        </Button>
      </motion.div>
    </motion.div>
  );
};
