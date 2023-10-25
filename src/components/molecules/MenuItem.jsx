import PropTypes from 'prop-types';
import styled from "styled-components";
import Icon from '../atoms/Icon';

const MenuItem = (props) => {
  const { item } = props;

  return (
    <Container>
      <Icon><item.icono /></Icon>
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
  item: PropTypes.object
};

export default MenuItem;