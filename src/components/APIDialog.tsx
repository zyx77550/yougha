import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { KeySquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface APIKeys {
  openai: string;
  github: string;
  huggingface: string;
  anthropic: string;
  stability: string;
  replicate: string;
}

export const APIDialog = () => {
  const { toast } = useToast();
  const [apiKeys, setApiKeys] = useState<APIKeys>({
    openai: localStorage.getItem('openai_key') || '',
    github: localStorage.getItem('github_token') || '',
    huggingface: localStorage.getItem('huggingface_key') || '',
    anthropic: localStorage.getItem('anthropic_key') || '',
    stability: localStorage.getItem('stability_key') || '',
    replicate: localStorage.getItem('replicate_key') || ''
  });

  const handleSave = () => {
    try {
      Object.entries(apiKeys).forEach(([key, value]) => {
        localStorage.setItem(`${key}_key`, value);
      });
      
      toast({
        title: "Clés API sauvegardées",
        description: "Vos clés API ont été enregistrées avec succès",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder les clés API",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <KeySquare className="h-5 w-5" />
          <span className="sr-only">Configurer les API</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
            Configuration des API
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {Object.entries(apiKeys).map(([key, value]) => (
            <div key={key} className="grid grid-cols-4 items-center gap-4">
              <label htmlFor={key} className="text-right capitalize">
                {key}
              </label>
              <Input
                id={key}
                type="password"
                value={value}
                onChange={(e) => setApiKeys({ ...apiKeys, [key]: e.target.value })}
                className="col-span-3 bg-purple-900/20 border-purple-500/30"
                placeholder={`${key} API key...`}
              />
            </div>
          ))}
        </div>
        <Button 
          onClick={handleSave}
          className="w-full bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-600 hover:to-purple-700"
        >
          Sauvegarder les clés API
        </Button>
      </DialogContent>
    </Dialog>
  );
};