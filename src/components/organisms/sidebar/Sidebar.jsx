import Proptypes from 'prop-types';
import styled from "styled-components";
import { v } from '../../../styles/variables';
import { LinksArray } from '../../../utils/dataStatic';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  const { openSidebar, setOpenSidebar } = props;

  return (
    <Main>
      <Container>
        <div className="logo-content">
          <div className="logo">
            <img src={v.logo} alt="logo" />
          </div>
        </div>

        <h2>Cerdito</h2>

        {
          LinksArray.map((link) => (
            <NavLink key={link.label} to={link.to}>
              <div className="link-icon">{<link.icon />}</div>
              <span>{link.label}</span>
            </NavLink>
          ))
        }

        <Divider />
      </Container>
    </Main>
  );
};

const Main = styled.div``;

const Container = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 100;
  height: 100%;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${v.lgSpacing} 0;
`;

Sidebar.propTypes = {
  openSidebar: Proptypes.bool,
  setOpenSidebar: Proptypes.func
};

export default Sidebar;