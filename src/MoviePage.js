import React from "react";
import { useParams } from "react-router-dom";
import './MoviePage.css';
const MoviePage = ({ movies }) => {
    const { title } = useParams();

    const movie = movies.find((movie) => movie.Title === title);

    return <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "10px" }}> <h1>MovieLand</h1></div>
        < div className="main" >

            <img className="image" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt='movie.Title' />
            <div className="details">
                <div className="title">{movie.Title}</div>

                <div className="year">{movie.Year}</div>
                <div className="trailer">
                    <a style={{ height: "40px", width: "100px", border: "0.6px solid gray", display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: "rgb(179, 179, 22)", borderRadius: "3px", color: "white" }} href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
                        visit IMDb
                    </a>
                </div>

            </div>
        </div>
    </div>
}
export default MoviePage;