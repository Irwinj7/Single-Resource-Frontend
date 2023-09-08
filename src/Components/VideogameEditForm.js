import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function VideogameEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [videogame, setVideogame] = useState({
    name: "",
    url: "",
    genre: "",
    is_favorite: false,
  });

  const updateVideogame = (updatedVideogame) => {
    axios
      .put(`${API}/videogames/${id}`, updatedVideogame)
      .then(
        () => {
          navigate(`/videogames/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setVideogame({ ...videogame, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setVideogame({ ...videogame, is_favorite: !videogame.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/videogames/${id}`).then(
      (response) => setVideogame(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateVideogame(videogame, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Videogame">Videogame:</label>
        <input
          id="videogame"
          value={videogame.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Videogame"
          required
        />
        <label htmlFor="Genre">Genre:</label>
        <input
          id="genre"
          value={videogame.genre}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Genre"
          required
        />
        <label htmlFor="url">Image URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={videogame.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={videogame.is_favorite}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/videogames/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}