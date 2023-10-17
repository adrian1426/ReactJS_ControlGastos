import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routers/AppRoutes";

function App() {

  return (
    <>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  )
}

export default App
