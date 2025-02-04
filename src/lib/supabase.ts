import { createClient } from '@supabase/supabase-js';

// Configuration par défaut pour le développement
const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseAnonKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Initialisation de Supabase
export const initSupabase = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) {
      console.error('Erreur d\'initialisation Supabase:', error);
      return null;
    }
    return session;
  } catch (error) {
    console.error('Erreur d\'initialisation Supabase:', error);
    return null;
  }
};

// Fonction utilitaire pour vérifier la connexion
export const checkSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase.from('health_check').select('*').limit(1);
    if (error) {
      console.error('Erreur de connexion Supabase:', error);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Erreur de connexion Supabase:', error);
    return false;
  }
};