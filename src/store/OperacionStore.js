import { create } from "zustand";
import { v } from '../styles/variables';

export const useOperaciones = create((set, get) => ({
  tipo: "i",
  tituloBtn: "Categorias ingresos",
  colorCategoria: v.colorIngresos,
  bgCategoria: v.colorbgingresos,
  setTipo: (tipoCategoria) => {
    set({ tipo: tipoCategoria.tipo });

    set({
      tituloBtn: tipoCategoria.text
    });

    set({
      colorCategoria: tipoCategoria.color
    });

    set({
      bgCategoria: tipoCategoria.bgColor
    });
  }
}));