
import { supabase } from './client';

// Health check function
export const checkHealth = async () => {
  try {
    const { data, error } = await supabase
      .from('health_check')
      .select('*')
      .limit(1)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Health check failed:', error);
    return null;
  }
};
