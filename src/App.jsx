import { useState } from 'react';
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routers/AppRoutes";
import styled from 'styled-components';
import Sidebar from './components/organisms/sidebar/Sidebar';
import { device } from './styles/breakpoints';

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <ThemeProvider>
        <AuthContextProvider>
          <Container>

            <Sidebar />

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

  @media ${device.tablet}{
    grid-template-columns: 65px 1fr;
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
