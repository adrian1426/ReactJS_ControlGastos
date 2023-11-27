import { create } from "zustand";
import { editarTemaMonedaUser, mostrarUsuarios } from "../supabase/usuariosService";

export const useUserStore = create((set, get) => ({
  idusuario: 0,
  dataUsuarios: [],
  mostrarUsuario: async () => {
    const response = await mostrarUsuarios();

    set({ dataUsuarios: response });

    if (response) {
      set({ idusuario: response.id });
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
}));