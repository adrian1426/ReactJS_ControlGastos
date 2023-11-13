import { getIdAuthSupabase } from "./session";
import { supabase } from "./supabase.config";

export const addUser = async (user) => {
  try {
    const { data } = await supabase.from("usuarios").insert(user).select();

    return data;
  } catch (error) {
    return error;
  }
};

export const mostrarUsuarios = async () => {
  try {
    const idAuthSupabase = await getIdAuthSupabase();

    const { data } = await supabase
      .from("usuarios")
      .select()
      .eq("idauth_supabase", idAuthSupabase);

    if (data) {
      return data[0];
    }
  } catch (error) {
    // alert(error.error_description || error.message + "MostrarUsuarios");
  }
};