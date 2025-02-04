import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const TerminalDialog = () => {
  const { toast } = useToast();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="bg-gradient-to-r from-amber-500 to-purple-600 text-white hover:from-amber-600 hover:to-purple-700"
        >
          <Terminal className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
            Terminal
          </DialogTitle>
        </DialogHeader>
        <div className="bg-black text-green-400 p-4 rounded-md font-mono min-h-[300px]">
          <p>Terminal sera bientôt disponible...</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};