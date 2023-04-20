import { NavLink } from "react-router-dom";

const Navigation = ({topics}) => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/articles">Articles</NavLink>
      {topics.map(topic => <NavLink key={topic.slug} to={`/${topic.slug}`}>{topic.slug[0].toUpperCase() + topic.slug.slice(1)}</NavLink>)}
    </nav>
  );
};

export default Navigation;
