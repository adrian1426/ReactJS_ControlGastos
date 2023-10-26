import PropTypes from 'prop-types';
import styled from "styled-components";
import MenuItem from './MenuItem';
import { v } from '../../styles/variables';

const MenuDropdown = (props) => {
  const { desplegableUser, top, actions } = props;

  return (
    <Container top={top}>
      {
        desplegableUser.map((item) => {
          return (
            <MenuItem key={item.text} item={item} onClick={() => actions(item.tipo)} />
          )
        })
      }
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${({ theme }) => theme.bg3};
  border-radius: 22px;
  top: ${(props) => props.top};
  box-shadow: ${v.boxshadowGray};
`;

MenuDropdown.propTypes = {
  desplegableUser: PropTypes.array,
  top: PropTypes.string,
  actions: PropTypes.func
};

export default MenuDropdown;