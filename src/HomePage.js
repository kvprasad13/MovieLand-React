import React, { useState, useEffect, useCallback } from "react";
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=475dc69e';

const HomePage = ({ movies, setMovies }) => {
    const [searchTerm, setSearchTerm] = useState([]);

    const searchMovies = useCallback(async (title) => {
        const response = await fetch(`${API_URL} &s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        console.log(data);
    }, [setMovies]);

    useEffect(() => {
        searchMovies('Spiderman');
    }, [searchMovies]);
    console.log(searchMovies);
    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className="search" >
                <input
                    placeholder='Search for Movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            searchMovies(searchTerm)
                        }
                    }}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => {
                        searchMovies(searchTerm);
                        console.log(searchTerm);
                    }}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie, ind) => <MovieCard key={ind} movie={movie} />)}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies found</h2>
                </div>
            )}
        </div>
    );
}

export default HomePage;
