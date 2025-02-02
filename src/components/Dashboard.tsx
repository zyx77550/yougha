import { AgentCard } from "./AgentCard";
import { useToast } from "@/hooks/use-toast";

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

  return (
    <div className="p-6 w-full min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#2D1F3D]">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text animate-fade-in">
        Tableau de Bord YouGha
      </h1>
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
  );
};