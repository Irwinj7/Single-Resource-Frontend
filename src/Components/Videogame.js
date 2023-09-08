
import { Link } from "react-router-dom"

export default function Videogame({ videogame }) {
    return (
        <div className="videogame">
            <img src={videogame.url} alt={videogame.name} />
            <p className="label"><span className="bold">Favorite:</span> {videogame.is_favorite ? (
                <span>⭐</span>
            ) : (
                <span>✩</span>
            )}</p>
            <Link to={`/videogames/${videogame.id}`}><span className="bold">Videogame:</span> {videogame.name}</Link>
            <p className="label"><span className="bold">Genre:</span> {videogame.genre}</p>
        </div>
    )
}