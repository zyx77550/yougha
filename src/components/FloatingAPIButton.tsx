
import { Dialog } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { KeySquare } from "lucide-react";
import { APIDialog } from "./APIDialog";

export const FloatingAPIButton = () => {
  return (
    <Dialog>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button className="p-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-lg hover:shadow-xl transition-all duration-300 hover:from-yellow-600 hover:to-yellow-700">
          <KeySquare className="w-6 h-6" />
        </button>
      </motion.div>
      <APIDialog />
    </Dialog>
  );
};
