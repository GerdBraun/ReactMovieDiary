import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-2 items-center">
        <li>
          <Link to="/" className="text-white m-2">Home</Link>
        </li>
        <li>
          <Link to="favorites" className="text-white m-2">Favorites</Link>
        </li>
        <li>
          <Link to="comments" className="text-white m-2">Comments</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
