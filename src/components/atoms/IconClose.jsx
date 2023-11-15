import PropTypes from 'prop-types';
import styled from "styled-components";
import { v } from "../../styles/variables";

const IconClose = (props) => {
  const { action } = props;

  return (
    <Container onClick={action}>
      {<v.iconocerrar />}
    </Container>
  );
};

const Container = styled.span`
  cursor: pointer;
  font-size: 25px;
  transition: all 0.2s;
  &:hover {
    color: ${() => v.colorselector};
    transform: scale(1.2);
  }
`;

IconClose.propTypes = {
  action: PropTypes.func
};

export default IconClose;