import React, { Component, Fragment } from "react";
import { Tapable } from "tapable";

import { getMovies,deleteMovie } from "../services/fakeMovieService";

export default class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = (movie) =>{
      const movies = this.state.movies.filter((mov)=>{
                            return mov._id!==movie._id
                     })
    console.log(movie)
    this.setState({
        movies
    })
  }

  render() {
      const {length:count} = this.state.movies;

      if(count==0) return <p>There are not data in datbase</p>
    return (
    <Fragment>
        <span>Shows {count} record in database</span>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie, keys) => (
            <tr key={keys}>
             <td>{movie.title}</td>
             <td>{movie.genre.name}</td>
             <td>{movie.numberInStock}</td>
             <td>{movie.dailyRentalRate}</td>
             <td><i className="fa fa-remove btn btn-danger" onClick={()=>this.handleDelete(movie)}></i></td>
            </tr>
          ))}
        </tbody>
      </table>
      </Fragment>
    );
  }
}
