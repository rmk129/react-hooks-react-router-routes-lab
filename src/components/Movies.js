import React from "react";
import { movies } from "../data";

function Movies() {
const displayedMovies = movies.map((movie)=> {
  const movieGenres = movie.genres.map((genre)=> <li key={genre}>{genre}</li>)

  return <div key={movie.title}>
      <h2>{movie.title}</h2>
      <h2>{movie.time}</h2>
      <ul>{movieGenres}</ul>
  </div>
})

  return <div>
    <h1>Movies Page</h1>
    {displayedMovies}
  </div>;
}

export default Movies;
