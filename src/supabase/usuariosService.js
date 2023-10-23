import { supabase } from "./supabase.config";

export const addUser = async (user) => {
  try {
    const { data } = await supabase.from("usuarios").insert(user).select();

    return data;
  } catch (error) {
    return error;
  }
};