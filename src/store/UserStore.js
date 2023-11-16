import { create } from "zustand";
import { editarTemaMonedaUser, mostrarUsuarios } from "../supabase/usuariosService";

export const useUserStore = create((set, get) => ({
  dataUsuarios: [],
  mostrarUsuario: async () => {
    const response = await mostrarUsuarios();

    set({ dataUsuarios: response });

    if (response) {
      return response
    } else {
      return [];
    }
  },
  editartemamonedauser: async (user) => {
    await editarTemaMonedaUser(user);
    const { mostrarUsuario } = get();

    set(mostrarUsuario)
  }
}))