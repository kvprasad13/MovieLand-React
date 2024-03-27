import React from 'react';
import { Link } from 'react-router-dom';
const MovieCard = ({ movie }) => {
  // console.log("MovieCard", JSON.stringify(movie));
  // https://www.imdb.com/title/tt2705436/
  
  return (
    <Link to={`/${movie.Title}`}>
    <div className="movie" >

      <div><p>{movie.year}</p></div>

      <div> <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt='movie.Title' /> </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
      </div >
      </Link>

  );
}
export default MovieCard;