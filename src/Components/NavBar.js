import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 className="logo">
        <Link to="/videogames">Videogames</Link>
      </h1>
      <button>
        <Link to="/videogames/new">New Videogame</Link>
      </button>
    </nav>
  );
}