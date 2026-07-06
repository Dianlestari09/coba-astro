import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (typeof process !== "undefined" ? process.env?.SUPABASE_URL : void 0) || "https://ihmarfuqzckiwopjinnp.supabase.co";
const supabaseAnonKey = (typeof process !== "undefined" ? process.env?.SUPABASE_ANON_KEY : void 0) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlobWFyZnVxemNraXdvcGppbm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNDI3MDcsImV4cCI6MjA5ODkxODcwN30.m_b3qJscqZU8K26LYsZwqsb8zKTxEfTSeUkfQdsx1pI";
const supabase = createClient(supabaseUrl, supabaseAnonKey) ;
async function checkConnection() {
  if (!supabase) {
    return false;
  }
  const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => {
      console.warn("Supabase connection check timed out after 3 seconds");
      resolve(false);
    }, 3e3);
  });
  const queryPromise = (async () => {
    try {
      const { error } = await supabase.from("services").select("id").limit(1);
      if (error) {
        console.warn("Supabase connection check failed:", error.message);
        return false;
      }
      return true;
    } catch (e) {
      console.warn("Supabase connection check error:", e);
      return false;
    }
  })();
  return Promise.race([queryPromise, timeoutPromise]);
}

export { checkConnection as c, supabase as s };
