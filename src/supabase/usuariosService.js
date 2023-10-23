import { supabase } from "./supabase.config";

async function getIdAuthSupabase() {
  const { data: session } = await supabase.auth.getSession();

  if (session) {
    const { user } = session;
    const idAuthSupabase = user.id;

    return idAuthSupabase;
  }
}