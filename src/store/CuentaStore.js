import { create } from "zustand";
import { MostrarCuentas } from "../supabase/cuentasService";

export const useCuentaStore = create((set, get) => ({
  cuentaItemSelect: [],
  datacuentas: [],
  mostrarCuentas: async (p) => {
    const response = await MostrarCuentas(p);
    set({ datacuentas: response });
    set({ cuentaItemSelect: response });
    return response;
  },
}));