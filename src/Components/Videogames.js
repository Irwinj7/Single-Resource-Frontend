import axios from "axios"
import { useState, useEffect } from "react"
import Videogame from "./Videogame"

const API = process.env.REACT_APP_API_URL


export default function Videogames(){

    const [videogames, setVideogames] = useState([])

    useEffect(()=>{
        axios
        .get(`${API}/videogames`)
        .then((response) => {
            setVideogames(response.data)
        })
        .catch((error) => console.warn("catch", error))
    },[])
    console.log(videogames)


    return (
        <div className="videogames">
            {videogames.map((videogame) => {
                return <Videogame key={videogame.id} videogame={videogame}/>
            })}
        </div>
    )

}