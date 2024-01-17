import { ThemeProvider } from "./context/ThemeContext";
import ThemeContainer from "./components/ThemeContainer";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import {
  Checks,
  Company,
  Currency,
  Error,
  Home,
  Kassa,
  NewStore,
  Product,
  Profile,
  Settings,
  Store,
} from "./pages";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/company" element={<Company />} />
          <Route path="/store" element={<Store />} />
          <Route path="/kassa" element={<Kassa />} />
          <Route path="/checks" element={<Checks />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/product" element={<Product />} />
          <Route path="/newStore" element={<NewStore />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </ThemeContainer>
    </ThemeProvider>
  );
};

export default App;
