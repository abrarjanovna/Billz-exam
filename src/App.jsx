import { ThemeProvider } from "./context/ThemeContext";
import ThemeContainer from "./components/ThemeContainer";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeContainer>
        <Home />
        <Settings />
      </ThemeContainer>
    </ThemeProvider>
  );
};

export default App;
