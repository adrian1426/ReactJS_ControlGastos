import styled from "styled-components";
import CategoriaTemplate from "../components/templates/CategoriaTemplate";
import { useCategoriasStore } from "../store/CategoriasStore";
import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "../store/UserStore";
import { useOperaciones } from "../store/OperacionStore";

const CategoriaPage = () => {
  const { dataUsuarios } = useUserStore();
  const { datacategoria, mostrarCategorias } = useCategoriasStore();
  const { tipo } = useOperaciones();

  const { isLoading, error } = useQuery({
    queryKey: ['mostrar-categorias'],
    queryFn: () => mostrarCategorias({ idusuario: dataUsuarios.id, tipo: tipo })
  });

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <Container>
      <CategoriaTemplate dataCategorias={datacategoria} />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default CategoriaPage;