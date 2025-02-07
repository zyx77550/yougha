
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

interface APIKeys {
  openai: string;
  github: string;
  huggingface: string;
  anthropic: string;
  stability: string;
  replicate: string;
  elevenlabs: string;
  tensorflow: string;
}

const apiLinks = {
  openai: "https://platform.openai.com/api-keys",
  github: "https://github.com/settings/tokens",
  huggingface: "https://huggingface.co/settings/tokens",
  anthropic: "https://console.anthropic.com/account/keys",
  stability: "https://platform.stability.ai/account/keys",
  replicate: "https://replicate.com/account/api-tokens",
  elevenlabs: "https://elevenlabs.io/speech-synthesis",
  tensorflow: "https://www.tensorflow.org/js"
};

export const APIDialog = () => {
  const { toast } = useToast();
  const [apiKeys, setApiKeys] = useState<APIKeys>({
    openai: localStorage.getItem('openai_key') || '',
    github: localStorage.getItem('github_token') || '',
    huggingface: localStorage.getItem('huggingface_key') || '',
    anthropic: localStorage.getItem('anthropic_key') || '',
    stability: localStorage.getItem('stability_key') || '',
    replicate: localStorage.getItem('replicate_key') || '',
    elevenlabs: localStorage.getItem('elevenlabs_key') || '',
    tensorflow: localStorage.getItem('tensorflow_key') || ''
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
    <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-gray-900/90 via-amber-900/30 to-gray-900/90 border border-amber-500/20">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-orange-500 text-transparent bg-clip-text">
          Configuration des API
        </DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {Object.entries(apiKeys).map(([key, value]) => (
          <motion.div 
            key={key} 
            className="grid gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <label htmlFor={key} className="text-sm font-medium capitalize">
                {key} API Key
              </label>
              <a
                href={apiLinks[key as keyof typeof apiLinks]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-400 hover:text-amber-300 transition-colors"
              >
                Obtenir une clé
              </a>
            </div>
            <Input
              id={key}
              type="password"
              value={value}
              onChange={(e) => setApiKeys({ ...apiKeys, [key]: e.target.value })}
              className="col-span-3 bg-amber-900/20 border-amber-500/30 focus:border-amber-400 transition-colors"
              placeholder={`${key} API key...`}
            />
          </motion.div>
        ))}
      </div>
      <Button 
        onClick={handleSave}
        className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
      >
        Sauvegarder les clés API
      </Button>
    </DialogContent>
  );
};
