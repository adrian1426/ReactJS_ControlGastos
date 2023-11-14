import { supabase } from "./supabase.config";

export const getIdAuthSupabase = async () => {
  const { data: session } = await supabase.auth.getSession();

  if (session) {
    const { user } = session.session;
    const idAuthSupabase = user.id;

    return idAuthSupabase;
  }
}