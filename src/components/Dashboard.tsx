import { AgentCard } from "./AgentCard";

const agents = [
  {
    name: "Rahima",
    role: "Main Coordinator & Supervisor",
    status: "active" as const,
    isMainAgent: true,
  },
  {
    name: "CodeMaster",
    role: "Code Generation & Integration",
    status: "idle" as const,
  },
  {
    name: "TestGuard",
    role: "Automated Testing & Quality Assurance",
    status: "idle" as const,
  },
  {
    name: "GitSync",
    role: "GitHub Integration & Version Control",
    status: "idle" as const,
  },
  {
    name: "UIEnhancer",
    role: "Interface Design & Accessibility",
    status: "idle" as const,
  },
  {
    name: "VoiceLink",
    role: "Voice Interface & Commands",
    status: "idle" as const,
  },
  {
    name: "SecurityShield",
    role: "Security & Authentication",
    status: "idle" as const,
  },
  {
    name: "PluginMaster",
    role: "Plugin Management & Integration",
    status: "idle" as const,
  },
  {
    name: "DataFlow",
    role: "Data Processing & Analytics",
    status: "idle" as const,
  },
  {
    name: "APIBridge",
    role: "API Integration & Management",
    status: "idle" as const,
  },
  {
    name: "TaskFlow",
    role: "Task Scheduling & Workflow",
    status: "idle" as const,
  },
];

export const Dashboard = () => {
  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold mb-8">YouGha Dashboard</h1>
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