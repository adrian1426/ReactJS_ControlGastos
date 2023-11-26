import PropTypes from 'prop-types';
import styled from "styled-components";

export function AccionTabla(props) {
  const { funcion, icono, color, fontSize } = props;

  return (
    <Container
      onClick={funcion}
      color={color}
      fontSize={fontSize}
    >
      {icono}
    </Container>
  );
}

const Container = styled.span`
  color:${(props) => props.color};
  font-size:${(props) => props.fontSize};
  cursor: pointer;
`;

AccionTabla.propTypes = {
  funcion: PropTypes.func,
  icono: PropTypes.any,
  color: PropTypes.string,
  fontSize: PropTypes.string
};