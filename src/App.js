import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Assuming you have a Home component defined
import MoviePage from './MoviePage.js'; // Assuming you have a Movie

const App = () => {
  const [movies, setMovies] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} setMovies={setMovies} />} />
        <Route path='/:title' element={<MoviePage movies={movies} />} />
        {/* Define more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
