// dependency imports
import { Routes, Route } from "react-router-dom";
// my imports
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ShowMiniArticles from "./pages/ShowMiniArticles";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="app" id={`app-${theme}`}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ShowMiniArticles />} />
      </Routes>
      <Footer theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
