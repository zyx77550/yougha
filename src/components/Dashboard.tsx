import { AgentCard } from "./AgentCard";
import { APIDialog } from "./APIDialog";
import { GitDialog } from "./GitDialog";
import { TerminalDialog } from "./TerminalDialog"; 
import { ChatDialog } from "./ChatDialog";
import { useToast } from "@/hooks/use-toast";
import { checkSupabaseConnection } from '@/lib/supabase';
import { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";

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

  useEffect(() => {
    const checkConnection = async () => {
      const isConnected = await checkSupabaseConnection();
      if (!isConnected) {
        toast({
          title: "Erreur de connexion",
          description: "Impossible de se connecter à Supabase. Vérifiez votre configuration.",
          variant: "destructive",
        });
      }
    };
    
    checkConnection();
  }, [toast]);

  return (
    <div className="min-h-screen bg-[#0D0D0D] relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse delay-1000"></div>
      
      <div className="relative z-10 container mx-auto p-6">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex space-x-3"
            >
              <GitDialog />
              <TerminalDialog />
              <ChatDialog />
            </motion.div>
          </div>
          <motion.h1 
            className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-teal-500 flex items-center gap-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Brain className="w-16 h-16 text-purple-400 animate-pulse" />
            YouGha
            <Sparkles className="w-12 h-12 text-teal-400 animate-pulse" />
          </motion.h1>
          <APIDialog />
        </motion.div>

        <AnimatePresence>
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
          >
            {agents.map((agent, index) => (
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
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};