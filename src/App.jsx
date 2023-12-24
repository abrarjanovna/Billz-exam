import Header from "./components/Header";
import About from "./components/About";
import ThemeContainer from "./components/ThemeContainer";
import { ThemeProvider } from "./context/ThemeContext";
import Main from "./components/Main";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <ThemeContainer>
          <Header />
          <Main/>
          <About />
        </ThemeContainer>
      </div>
    </ThemeProvider>
  );
};

export default App;
