import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function VideogameDetails() {
  const [videogame, setVideogame] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/videogames/${id}`).then((response) => {
      setVideogame(response.data);
    });
  }, [id, navigate, API]);

  const deleteVideogame = () => {
    axios
      .delete(`${API}/videogames/${id}`)
      .then(() => {
        navigate(`/videogames`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleDelete = () => {
    deleteVideogame();
  };

  return (
    <>
      <div className="show">
        <img src={videogame.url} alt={videogame.name} />
        <p className="label">
          <span className="bold">Favorite:</span>{" "}
          {videogame.is_favorite ? <span>⭐</span> : <span>✩</span>}
        </p>

        <p className="label">
          <span className="bold">Videogame:</span> {videogame.name}
        </p>
        <p className="label">
          <span className="bold">Genre:</span> {videogame.genre}
        </p>
        {/* <p className="label">
          <span className="bold">County:</span> {videogame.genre}
        </p> */}

        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/videogames`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/videogames/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideogameDetails;