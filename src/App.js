import { useState, useEffect } from "react";
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=475dc69e';
const movie1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Type": "movie",
  "Poster": "N/A"
}
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);

  }
  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (

    <div className='app'>
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);

          }}></input>

        <img src={SearchIcon}
          alt='search'
          onClick={() => {
            searchMovies(searchTerm);
            console.log(searchTerm);
          }
          }></img>
      </div>
      {

        movies?.length > 0 ? (<div className="container">
          {
            movies.map((movie) => <MovieCard movie={movie} />
            )
          }
        </div>) : (
          <div className="empty">
            <h2>No Movies found</h2>
          </div>
        )
      }

    </div >
  );
}


export default App;