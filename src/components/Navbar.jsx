import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const getStyles = ({ isActive }) => ({
    color: isActive ? "green" : "",
    textDecoration: isActive ? "underline" : ""
  });
  return (
    <>
      <nav>
        <NavLink style={getStyles} to="/">
          Students
        </NavLink>
        <NavLink style={getStyles} to="/teachers">
          Teachers
        </NavLink>
        <NavLink style={getStyles} to="/school">
          School
        </NavLink>
        <NavLink style={getStyles} to="/class">
          Class
        </NavLink>
      </nav>
    </>
  );
};
