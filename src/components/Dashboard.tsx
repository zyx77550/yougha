import { AgentCard } from "./AgentCard";
import { GitDialog } from "./GitDialog";
import { TerminalDialog } from "./TerminalDialog"; 
import { ChatDialog } from "./ChatDialog";
import { FloatingAPIButton } from "./FloatingAPIButton";
import { useToast } from "@/hooks/use-toast";
import { useAutoGPT } from "@/hooks/use-auto-gpt";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles, Plus } from "lucide-react";
import { Button } from "./ui/button";

const agents = [
  {
    name: "Rahima",
    role: "Coordinatrice Principale & Superviseure",
    status: "active" as const,
    isMainAgent: true,
    model: "gpt-4o",
  },
  {
    name: "Auto-GPT Clone",
    role: "Assistant Autonome & Exécution de Tâches",
    status: "active" as const,
    isMainAgent: true,
    model: "gpt-4o",
  },
  {
    name: "MaîtreCode",
    role: "Génération & Intégration de Code",
    status: "idle" as const,
    model: "gpt-4o",
  },
  {
    name: "GardienTest",
    role: "Tests Automatisés & Assurance Qualité",
    status: "idle" as const,
    model: "gpt-4o-mini",
  },
  {
    name: "SyncGit",
    role: "Intégration GitHub & Contrôle de Version",
    status: "idle" as const,
    model: "gpt-4o-mini",
  },
  {
    name: "AmélioreUI",
    role: "Design d'Interface & Accessibilité",
    status: "idle" as const,
    model: "gpt-4o",
  },
  {
    name: "LienVocal",
    role: "Interface Vocale & Commandes",
    status: "idle" as const,
    model: "llama-3.1-sonar-small-128k-online",
  },
  {
    name: "BouclierSécurité",
    role: "Sécurité & Authentification",
    status: "idle" as const,
    model: "gpt-4o",
  },
  {
    name: "MaîtrePlugin",
    role: "Gestion & Intégration des Plugins",
    status: "idle" as const,
    model: "gpt-4o-mini",
  },
  {
    name: "FluxDonnées",
    role: "Traitement & Analyse des Données",
    status: "idle" as const,
    model: "llama-3.1-sonar-large-128k-online",
  },
  {
    name: "PontAPI",
    role: "Intégration & Gestion des API",
    status: "idle" as const,
    model: "gpt-4o-mini",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export const Dashboard = () => {
  const { toast } = useToast();
  const { instances, createInstance } = useAutoGPT();

  const handleCreateAutoGPT = () => {
    createInstance.mutate({
      name: `Auto-GPT ${instances?.length ?? 0 + 1}`,
      config: {
        goals: ["Assist with coding tasks", "Help with project management"],
        constraints: ["Follow best practices", "Maintain code quality"],
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(88,28,135,0.2))]"></div>
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-screen filter blur-[100px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-screen filter blur-[100px]"
      />
      
      <div className="relative z-10 container mx-auto p-6">
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
            className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 flex items-center gap-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Brain className="w-16 h-16 text-purple-400 animate-pulse" />
            YouGha
            <Sparkles className="w-12 h-12 text-blue-400 animate-pulse" />
          </motion.h1>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleCreateAutoGPT}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              New Auto-GPT
            </Button>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
          >
            {agents.map((agent) => (
              <motion.div 
                key={agent.name} 
                variants={item}
                className="transform-gpu hover:translate-y-[-5px] transition-transform duration-300"
                style={{ 
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
              >
                <AgentCard
                  name={agent.name}
                  role={agent.role}
                  status={agent.status}
                  isMainAgent={agent.isMainAgent}
                  model={agent.model}
                />
              </motion.div>
            ))}
            
            {instances?.map((instance) => (
              <motion.div 
                key={instance.id} 
                variants={item}
                className="transform-gpu hover:translate-y-[-5px] transition-transform duration-300"
              >
                <AgentCard
                  name={instance.name}
                  role="Auto-GPT Instance"
                  status={instance.status as "active" | "idle" | "busy"}
                  isMainAgent={true}
                  model="gpt-4o"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <FloatingAPIButton />
    </div>
  );
};