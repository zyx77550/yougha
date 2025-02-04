import { AgentCard } from "./AgentCard";
import { APIDialog } from "./APIDialog";
import { GitDialog } from "./GitDialog";
import { TerminalDialog } from "./TerminalDialog"; 
import { ChatDialog } from "./ChatDialog";
import { useToast } from "@/hooks/use-toast";
import { supabase, checkSupabaseConnection } from '@/lib/supabase';
import { useEffect } from 'react';

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
    <div className="p-6 w-full min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#2D1F3D] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsla(277,75%,84%,1)0%,hsla(297,50%,51%,1)100%)] opacity-5 animate-pulse"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <GitDialog />
            <TerminalDialog />
            <ChatDialog />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text animate-fade-in">
            YouGha
          </h1>
          <APIDialog />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <AgentCard
              key={agent.name}
              name={agent.name}
              role={agent.role}
              status={agent.status}
              isMainAgent={agent.isMainAgent}
              model={agent.model}
            />
          ))}
        </div>
      </div>
    </div>
  );
};