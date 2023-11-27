import { create } from "zustand";
import { v } from '../styles/variables';

export const useOperaciones = create((set, get) => ({
  tipo: "i",
  tituloBtn: "Categorias ingresos",
  tituloBtnDesMovimientos: "Ingresos",
  colorCategoria: v.colorIngresos,
  bgCategoria: v.colorbgingresos,
  año: null,
  mes: null,
  setMes: (p) => {
    set({ mes: p });
  },
  setAño: (p) => {
    set({ año: p });
  },
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