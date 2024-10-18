import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="main-nav flex gap-2 items-center">
        <li>
          <NavLink to="/" className="text-white m-2" key="home">Home</NavLink>
        </li>
        <li>
          <NavLink to="favorites" className="text-white m-2" key="favorites">Favorites</NavLink>
        </li>
        <li>
          <NavLink to="comments" className="text-white m-2" key="comments">Comments</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
