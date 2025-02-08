
import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Settings, Activity, Database, Terminal, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: Home, label: "Accueil" },
    { icon: Activity, label: "Activité" },
    { icon: Database, label: "Base de données" },
    { icon: Terminal, label: "Terminal" },
    { icon: Settings, label: "Paramètres" },
  ];

  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      className={cn(
        "h-screen bg-black/50 backdrop-blur-xl border-r border-yellow-500/20",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute right-[-12px] top-8 bg-yellow-500 rounded-full p-1 hover:bg-yellow-400 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
        
        <div className="space-y-6 mt-8">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 text-white/80 hover:text-yellow-500 transition-colors w-full p-2 rounded-lg hover:bg-yellow-500/10"
            >
              <item.icon className="w-6 h-6" />
              {!isCollapsed && <span className="font-medium">{item.label}</span>}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
