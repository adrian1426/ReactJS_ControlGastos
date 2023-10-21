import Proptypes from 'prop-types';
import styled from "styled-components";
import { v } from '../../../styles/variables';
import { LinksArray, SecondarylinksArray } from '../../../utils/dataStatic';
import { NavLink } from 'react-router-dom';
import SidebarCard from './SidebarCard';

const Sidebar = (props) => {
  const { openSidebar, setOpenSidebar } = props;

  return (
    <Main opensidebar={openSidebar}>
      <span className='sidebar-button' onClick={() => setOpenSidebar(!openSidebar)}>
        {<v.iconoflechaderecha />}
      </span>

      <Container opensidebar={openSidebar} className={openSidebar ? "opened" : ""}>
        <div className="logo-content">
          <div className="logo">
            <img src={v.logo} alt="logo" />
          </div>
          <h2>Cerdito</h2>
        </div>

        {
          LinksArray.map((link) => (
            <div key={link.label} className={openSidebar ? "LinkContainer active" : "LinkContainer"}>
              <NavLink to={link.to} className={({ isActive }) => `Link${isActive ? ' active' : ''}`}>
                <div className="link-icon">{<link.icon />}</div>
                {openSidebar && <span>{link.label}</span>}
              </NavLink>
            </div>
          ))
        }

        <Divider />

        {
          SecondarylinksArray.map((link) => (
            <div key={link.label} className={openSidebar ? "LinkContainer active" : "LinkContainer"}>
              <NavLink to={link.to} className={({ isActive }) => `Link${isActive ? ' active' : ''}`}>
                <div className="link-icon">{<link.icon />}</div>
                {openSidebar && <span>{link.label}</span>}
              </NavLink>
            </div>
          ))
        }

        <Divider />

        {openSidebar && <SidebarCard />}
      </Container>
    </Main>
  );
};

const Main = styled.div`
  .sidebar-button{
    position: fixed;
    top: 70px;
    left: 42px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 2;
    transform: ${({ opensidebar }) =>
    opensidebar ? `translateX(162px) rotate(3.142rad)` : `initial`};
    color: ${(props) => props.theme.text};
  }
`;

const Container = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 1;
  height: 100%;
  width: 65px;
  transition: 0.3s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colorScroll};
    border-radius: 10px;
  }

  &.opened{
    width: 220px;
  }

  .logo-content{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;

    .logo{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      transform: ${(props) => (props.opensidebar ? `scale(0.7)` : `scale(1.5)`)}  rotate(${(props) => props.theme.logorotate});

      img{
        width:100%;
        animation: flotar 1.7s ease-in-out infinite alternate;
      }
    }
  }

  h2{
    display: ${(props) => (props.opensidebar ? `block` : `none`)}
  }

  .LinkContainer{
    margin: 5px 0;
    transition: all 0.3s;
    padding: 0 5%;
    position: relative;
    &:hover{
      background: ${(props) => props.theme.bgAlpha};
    }

    .Link{
      display: flex;
      align-items:center;
      text-decoration: none;
      padding:calc(${v.smSpacing} - 2px) 0;
      color: ${(props) => props.theme.text};
      height: 60px;

      .link-icon{
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;

        svg{
          font-size:25px;
        }
      }

      &.active{
        &::before{
        content:"";
        position: absolute;
        height: 100%;
        background: ${(props) => props.theme.bg5};
        width: 4px;
        border-radius: 10px;
        left:0;
        }

        color: ${(props) => props.theme.bg5};
      }
    }
  }
  
  @keyframes flotar {
    0%{
      transform: translate(0,0px);
    }

    50%{
      transform: translate(0,4px);
    }

    100%{
      transform: translate(0,-0px);
    }
  }
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