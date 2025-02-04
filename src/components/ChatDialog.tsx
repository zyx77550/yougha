import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ChatDialog = () => {
  const { toast } = useToast();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="bg-gradient-to-r from-amber-500 to-purple-600 text-white hover:from-amber-600 hover:to-purple-700"
        >
          <MessageSquare className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
            Chat
          </DialogTitle>
        </DialogHeader>
        <div className="min-h-[400px] space-y-4">
          <p className="text-center text-muted-foreground">
            Le chat sera bientôt disponible...
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};