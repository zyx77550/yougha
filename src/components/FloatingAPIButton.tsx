import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { KeySquare } from "lucide-react";
import { APIDialog } from "./APIDialog";

export const FloatingAPIButton = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <DialogTrigger asChild>
        <button className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:from-purple-600 hover:to-blue-600">
          <KeySquare className="w-6 h-6" />
        </button>
      </DialogTrigger>
    </motion.div>
  );
};