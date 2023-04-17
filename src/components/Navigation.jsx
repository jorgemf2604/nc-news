import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/articles">Articles</NavLink>
    </nav>
  );
};

export default Navigation;
