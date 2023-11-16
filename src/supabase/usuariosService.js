import Swal from "sweetalert2";
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

export async function editarTemaMonedaUser(user) {
  try {
    const { error } = await supabase.from("usuarios").update(user).eq("id", user.id);

    if (error) {
      alert("Error al editar usuarios", error);
    }

    Swal.fire({
      icon: "success",
      title: "Datos modificados",
      showConfirmButton: false,
      timer: 1500,
    });

  } catch (error) {
    alert(error.error_description || error.message + "EditarTemaMonedaUser");
  }
}