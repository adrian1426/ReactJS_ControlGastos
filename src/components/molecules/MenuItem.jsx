import PropTypes from 'prop-types';
import styled from "styled-components";
import Icon from '../atoms/Icon';
import { ColorContent } from '../atoms/ColorContent';

const MenuItem = (props) => {
  const { item, onClick } = props;

  return (
    <Container onClick={onClick}>
      {item.icono && <Icon><item.icono /></Icon>}
      <ColorContent $alto="12px" $ancho="12px" $color={item?.color} />
      <span>{item.text}</span>
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover{
    background-color: ${({ theme }) => theme.bg4};
  }

  svg{
    font-size: 28px;
    display: block;
  }
`;

MenuItem.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func
};

export default MenuItem;