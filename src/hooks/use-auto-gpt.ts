import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface AutoGPTInstance {
  id: string;
  name: string;
  status: string;
  config: any;
  last_active: string;
  user_id: string;
  created_at: string;
}

export const useAutoGPT = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: instances, isLoading } = useQuery({
    queryKey: ["auto-gpt-instances"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("auto_gpt_instances")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as AutoGPTInstance[];
    },
  });

  const createInstance = useMutation({
    mutationFn: async ({ name, config }: { name: string; config: any }) => {
      const { data, error } = await supabase
        .from("auto_gpt_instances")
        .insert([{ 
          name, 
          config,
          user_id: (await supabase.auth.getUser()).data.user?.id,
          status: "idle"
        }])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auto-gpt-instances"] });
      toast({
        title: "Instance créée",
        description: "Nouvelle instance Auto-GPT créée avec succès",
      });
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Impossible de créer l'instance Auto-GPT",
        variant: "destructive",
      });
    },
  });

  return {
    instances,
    isLoading,
    createInstance,
  };
};