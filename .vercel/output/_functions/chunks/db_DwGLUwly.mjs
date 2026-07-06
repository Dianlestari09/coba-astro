import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ihmarfuqzckiwopjinnp.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlobWFyZnVxemNraXdvcGppbm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNDI3MDcsImV4cCI6MjA5ODkxODcwN30.m_b3qJscqZU8K26LYsZwqsb8zKTxEfTSeUkfQdsx1pI";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
async function checkConnection() {
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
}

export { checkConnection as c, supabase as s };
