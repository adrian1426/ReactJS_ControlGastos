import PropTypes from 'prop-types';
import styled from "styled-components";
import { AccionTabla } from "./AccionTabla";
import { v } from "../../../styles/variables";

export function ContentAccionesTabla(props) {
  const { funcionEditar, funcionEliminar } = props;

  return (
    <Container>
      <AccionTabla
        funcion={funcionEditar}
        fontSize="18px"
        color="#7d7d7d"
        icono={<v.iconeditarTabla />}
      />

      <AccionTabla
        funcion={funcionEliminar}
        fontSize="20px"
        color="#f76e8e"
        icono={<v.iconeliminarTabla />}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  gap:10px;
  
  @media (max-width: 48em) {
    justify-content:end;
  }
`;

ContentAccionesTabla.propTypes = {
  funcionEditar: PropTypes.func,
  funcionEliminar: PropTypes.func
};