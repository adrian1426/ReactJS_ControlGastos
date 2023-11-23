import { create } from "zustand";
import { v } from '../styles/variables';

export const useOperaciones = create((set, get) => ({
  tipo: "i",
  tituloBtn: "Categorias ingresos",
  colorCategoria: v.colorIngresos,
  bgCategoria: v.colorbgingresos,
  setTipo: (tipoCategoria) => {
    set({ tipo: tipoCategoria });

    const { tipo } = get();

    set({
      tituloBtn: tipo === "i" ? "Categorias ingresos" : "Categorias gastos"
    });

    set({
      colorCategoria: tipo === "i" ? v.colorIngresos : v.colorGastos
    });

    set({
      bgCategoria: tipo === "i" ? v.colorbgingresos : v.colorbgGastos
    });
  }
}));