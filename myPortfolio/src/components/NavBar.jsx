import { Link } from "react-router-dom";
import "./css/NavBar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="title">
        Home
      </Link>
      <ul className="open">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
