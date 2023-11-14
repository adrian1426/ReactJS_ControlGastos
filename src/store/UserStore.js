import { create } from "zustand";
import { mostrarUsuarios } from "../supabase/usuariosService";

export const useUserStore = create((get, set) => ({
  dataUsuarios: [],
  mostrarUsuario: async () => {
    const data = await mostrarUsuarios();

    set({
      dataUsuarios: data
    });

    return data;
  }
}))