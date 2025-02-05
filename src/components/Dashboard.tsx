
import { AgentCard } from "./AgentCard";
import { APIDialog } from "./APIDialog";
import { GitDialog } from "./GitDialog";
import { TerminalDialog } from "./TerminalDialog"; 
import { ChatDialog } from "./ChatDialog";
import { useToast } from "@/hooks/use-toast";
import { checkSupabaseConnection } from '@/lib/supabase';
import { useEffect } from 'react';
import { motion } from "framer-motion";

const agents = [
  {
    name: "Rahima",
    role: "Coordinatrice Principale & Superviseure",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent blur-2xl"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[120px] animate-pulse delay-1000"></div>
      
      <div className="relative z-10 container mx-auto p-6">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <GitDialog />
            <TerminalDialog />
            <ChatDialog />
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            YouGha
          </h1>
          <APIDialog />
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        >
          {agents.map((agent) => (
            <motion.div 
              key={agent.name} 
              variants={item}
              className="transform-gpu"
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
      </div>
    </div>
  );
};
