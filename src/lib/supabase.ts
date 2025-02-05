
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vbtvubbdccreingqgfqk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZidHZ1YmJkY2NyZWluZ3FnZnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2MjgyNTEsImV4cCI6MjA1NDIwNDI1MX0.iHGcCQshSdqty54fU0EcJecUYNoL4n-70vX77cg3HkY';

const supabaseInternal = createClient(supabaseUrl, supabaseAnonKey);

export const initSupabase = async () => {
  try {
    const { data: { session }, error } = await supabaseInternal.auth.getSession();
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

export const checkSupabaseConnection = async () => {
  try {
    const { data, error } = await supabaseInternal
      .from('health_check')
      .select('*')
      .limit(1);
      
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
