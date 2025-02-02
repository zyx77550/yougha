import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface APIKeys {
  openai: string;
  github: string;
  huggingface: string;
}

export const APIManager = () => {
  const { toast } = useToast();
  const [apiKeys, setApiKeys] = useState<APIKeys>({
    openai: localStorage.getItem('openai_key') || '',
    github: localStorage.getItem('github_token') || '',
    huggingface: localStorage.getItem('huggingface_key') || ''
  });

  const handleSave = () => {
    try {
      localStorage.setItem('openai_key', apiKeys.openai);
      localStorage.setItem('github_token', apiKeys.github);
      localStorage.setItem('huggingface_key', apiKeys.huggingface);
      
      toast({
        title: "Clés API sauvegardées",
        description: "Vos clés API ont été enregistrées avec succès",
        variant: "success",
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
    <Card className="p-6 bg-gradient-to-br from-amber-500/10 to-purple-500/10 border border-amber-500/30">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
        Configuration des API
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">OpenAI API Key</label>
          <Input
            type="password"
            value={apiKeys.openai}
            onChange={(e) => setApiKeys({ ...apiKeys, openai: e.target.value })}
            placeholder="sk-..."
            className="bg-purple-900/20 border-purple-500/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">GitHub Token</label>
          <Input
            type="password"
            value={apiKeys.github}
            onChange={(e) => setApiKeys({ ...apiKeys, github: e.target.value })}
            placeholder="github_pat_..."
            className="bg-purple-900/20 border-purple-500/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">HuggingFace API Key</label>
          <Input
            type="password"
            value={apiKeys.huggingface}
            onChange={(e) => setApiKeys({ ...apiKeys, huggingface: e.target.value })}
            placeholder="hf_..."
            className="bg-purple-900/20 border-purple-500/30"
          />
        </div>
        <Button 
          onClick={handleSave}
          className="w-full bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-600 hover:to-purple-700"
        >
          Sauvegarder les clés API
        </Button>
      </div>
    </Card>
  );
};