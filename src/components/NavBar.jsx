import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-2 items-center">
        <li>
          <Link to="/" className="text-white m-2">Home</Link>
        </li>
        <li>
          <Link to="about" className="text-white m-2">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
