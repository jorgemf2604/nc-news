import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const Footer = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === "dark" ? "light" : "dark";
    });
  };

  return (
    <footer className="footer">
      <p> 🚀 Jorge Martin Fernandez</p>
      <p> 📅 {new Date().toDateString()}</p>
      <div className="color-mode-container">
        {theme === "dark" ? "Dark mode" : "Light mode"}
        <button className="darkmode-btn" onClick={toggleTheme}>
          {theme === "dark" ? (
            <MdOutlineDarkMode className="theme-icon" />
          ) : (
            <BsSun className="theme-icon" />
          )}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
