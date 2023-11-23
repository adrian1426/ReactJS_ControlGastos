import { create } from "zustand";
import { v } from '../styles/variables';

export const useOperaciones = create((set, get) => ({
  tituloBtn: "Categorias ingresos",
  colorCategoria: v.colorIngresos,
  bgCategoria: v.colorbgingresos
}));