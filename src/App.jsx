import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routers/AppRoutes";

function App() {

  return (
    <>
      <ThemeProvider>
        <AuthContextProvider>
          <AppRoutes />
        </AuthContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
