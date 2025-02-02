import { AgentCard } from "./AgentCard";

const agents = [
  {
    name: "Rahima",
    role: "Coordinatrice Principale & Superviseure",
    status: "active" as const,
    isMainAgent: true,
  },
  {
    name: "MaîtreCode",
    role: "Génération & Intégration de Code",
    status: "idle" as const,
  },
  {
    name: "GardienTest",
    role: "Tests Automatisés & Assurance Qualité",
    status: "idle" as const,
  },
  {
    name: "SyncGit",
    role: "Intégration GitHub & Contrôle de Version",
    status: "idle" as const,
  },
  {
    name: "AmélioreUI",
    role: "Design d'Interface & Accessibilité",
    status: "idle" as const,
  },
  {
    name: "LienVocal",
    role: "Interface Vocale & Commandes",
    status: "idle" as const,
  },
  {
    name: "BouclierSécurité",
    role: "Sécurité & Authentification",
    status: "idle" as const,
  },
  {
    name: "MaîtrePlugin",
    role: "Gestion & Intégration des Plugins",
    status: "idle" as const,
  },
  {
    name: "FluxDonnées",
    role: "Traitement & Analyse des Données",
    status: "idle" as const,
  },
  {
    name: "PontAPI",
    role: "Intégration & Gestion des API",
    status: "idle" as const,
  },
  {
    name: "FluxTâches",
    role: "Planification & Flux de Travail",
    status: "idle" as const,
  },
];

export const Dashboard = () => {
  return (
    <div className="p-6 w-full min-h-screen bg-gradient-to-br from-background to-card/50">
      <h1 className="text-4xl font-bold mb-8 text-gradient animate-fade-in">Tableau de Bord YouGha</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <AgentCard
            key={agent.name}
            name={agent.name}
            role={agent.role}
            status={agent.status}
            isMainAgent={agent.isMainAgent}
          />
        ))}
      </div>
    </div>
  );
};