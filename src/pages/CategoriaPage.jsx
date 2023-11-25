import styled from "styled-components";
import CategoriaTemplate from "../components/templates/CategoriaTemplate";
import { useCategoriasStore } from "../store/CategoriasStore";
import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "../store/UserStore";

const CategoriaPage = () => {
  const { dataUsuarios } = useUserStore();
  const { datacategoria, mostrarCategorias } = useCategoriasStore();
  const { isLoading, error } = useQuery({
    queryKey: ['mostrar-categorias'],
    queryFn: () => mostrarCategorias({ idusuario: dataUsuarios.id, tipo: "i" })
  });

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <Container>
      <CategoriaTemplate />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default CategoriaPage;