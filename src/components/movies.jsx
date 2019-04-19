import React, { Component, Fragment } from "react";
import { Tapable } from "tapable";
import MovieCard from './moviescard'

import { getMovies,deleteMovie,getMovieSeearch } from "../services/fakeMovieService";
import Like from "./like";

export default class Movies extends Component {
  state = {
    movies: getMovies(),
    isLike: true,
    result:[]
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

  findMoviesHandler=(event)=>{
    var txt = event.target.value;
    if(txt.length>3){
    const movies = getMovies().filter((mov)=>{
      return mov.title.indexOf(txt)!==-1
    });

    this.setState({movies})
    console.log(this.state)
    } else if(txt.length==0){
      this.setState({movies:getMovies()})
    }
    
  }

  likeHandler=()=>{

  }

  render() {
      const {length:count} = this.state.movies;

      //if(count==0) return <p>There are not data in datbase</p>
    return (
    <Fragment>
        <span>Shows {count} record in database</span>
        <input type="search" className="form-control" onChange={this.findMoviesHandler}></input>
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
          {count !=0 && this.state.movies.map((movie, keys) => (
            <tr key={keys}>
             <td>{movie.title}</td>
             <td>{movie.genre.name}</td>
             <td>{movie.numberInStock}</td>
             <td>{movie.dailyRentalRate}</td>
             <td><Like/></td>
             <td><i className="fa fa-remove btn btn-danger" onClick={()=>this.handleDelete(movie)}></i></td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
      <MovieCard movies={this.state.movies}></MovieCard>
      </Fragment>
    );
  }
}
