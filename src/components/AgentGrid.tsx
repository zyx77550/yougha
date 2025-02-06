import { motion } from "framer-motion";
import { AgentCard } from "./AgentCard";
import { useAutoGPT } from "@/hooks/use-auto-gpt";

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

export const AgentGrid = () => {
  const { instances } = useAutoGPT();

  return (
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
  );
};
