import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

export async function checkConnection(): Promise<boolean> {
  if (!supabaseUrl || !supabaseAnonKey) {
    return false;
  }

  // Create a timeout promise to prevent hanging
  const timeoutPromise = new Promise<boolean>((resolve) => {
    setTimeout(() => {
      console.warn('Supabase connection check timed out after 3 seconds');
      resolve(false);
    }, 3000);
  });

  const queryPromise = (async () => {
    try {
      const { error } = await supabase.from('services').select('id').limit(1);
      if (error) {
        console.warn('Supabase connection check failed:', error.message);
        return false;
      }
      return true;
    } catch (e) {
      console.warn('Supabase connection check error:', e);
      return false;
    }
  })();

  return Promise.race([queryPromise, timeoutPromise]);
}
