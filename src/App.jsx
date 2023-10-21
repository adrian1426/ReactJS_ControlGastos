import { useState } from 'react';
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routers/AppRoutes";
import styled from 'styled-components';
import Sidebar from './components/organisms/sidebar/Sidebar';
import { device } from './styles/breakpoints';
import Menu from './components/organisms/menu/Menu';

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <ThemeProvider>
        <AuthContextProvider>
          <Container className={openSidebar ? 'opened' : ''}>
            <div className="sidebar">
              <Sidebar
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
              />
            </div>

            <div className="menu-hamburger">
              <Menu />
            </div>

            <Body>
              <AppRoutes />
            </Body>

          </Container>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  )
}

const Container = styled.div`
  display: grid; 
  grid-template-columns: 1fr;
  background: ${(props) => props.theme.bgtotal};
  transition: 0.3s ease-in-out;

  .sidebar{
    display: none;
  }

  .menu-hamburger{
      display: block;
      position: absolute;
      left: 20px;
  }

  @media ${device.tablet}{
    grid-template-columns: 65px 1fr;

    &.opened{
      grid-template-columns: 220px 1fr;
    } 

    .sidebar{
    display: initial;
    }

    .menu-hamburger{
      display: none;
    }
  }
`;

const Body = styled.div`
  grid-column: 1;
  width: 100%;

  @media ${device.tablet}{
    grid-column: 2;
  }
`;

export default App;
