import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="about">About Us</Link>
      </div>
    </nav>
  );
};

export default NavBar;
