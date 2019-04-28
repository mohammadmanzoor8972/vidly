
import React  from "react";
import { Link } from "react-router-dom";
import { getMovie } from "../services/fakeMovieService";
import MovieCard from './moviescard';


const MovieDetails = ({match}) => {
    //debugger;
    const movieId = match.params.movieId;
    const movie = getMovie(movieId);
    console.log(movie)
  return (
      <div>
      <h1>Movie Details - {match.params.movieId}</h1>
      <MovieCard {...movie}/>
      </div>
  )
}

export default MovieDetails
