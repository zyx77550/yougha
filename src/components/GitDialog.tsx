import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GitBranch } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const GitDialog = () => {
  const { toast } = useToast();
  const [repoUrl, setRepoUrl] = useState("");

  const handleClone = async () => {
    toast({
      title: "Fonctionnalité à venir",
      description: "Le clonage de dépôts sera bientôt disponible",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="bg-gradient-to-r from-amber-500 to-purple-600 text-white hover:from-amber-600 hover:to-purple-700"
        >
          <GitBranch className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
            Cloner un dépôt Git
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Cette fonctionnalité sera bientôt disponible.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};