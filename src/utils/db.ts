import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (typeof process !== 'undefined' ? process.env?.SUPABASE_URL : undefined) || import.meta.env.SUPABASE_URL;
const supabaseAnonKey = (typeof process !== 'undefined' ? process.env?.SUPABASE_ANON_KEY : undefined) || import.meta.env.SUPABASE_ANON_KEY;

// Safe client instantiation: if credentials are not configured or are invalid,
// we create a dummy/null client to prevent module initialization crash.
export let supabase: any = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    // Strip any accidental double quotes from environment variables if present
    const cleanUrl = supabaseUrl.replace(/^["']|["']$/g, '').trim();
    const cleanKey = supabaseAnonKey.replace(/^["']|["']$/g, '').trim();
    supabase = createClient(cleanUrl, cleanKey);
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    supabase = null;
  }
}

export async function checkConnection(): Promise<boolean> {
  if (!supabaseUrl || !supabaseAnonKey || !supabase) {
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
