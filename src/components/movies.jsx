import React, { Component, Fragment } from "react";
import { Tapable } from "tapable";
import MovieCard from './common/moviescard'
import Pagination from './common/pagination'
import { getMovies, deleteMovie, getMovieSeearch } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listgroup";
import paginate from '../utils/paginate'
import _ from 'lodash';

export default class Movies extends Component {
  state = {
    movies: getMovies(),
    isLike: true,
    pageSize: 5,
    currentPage: 1,
    result: [],
    listgroup: ["All", "Action", "Comedy", "Thriller"],
    sortColumn: {path:'title', order:'asc'}
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((mov) => {
      return mov._id !== movie._id
    })
    console.log(movie)
    this.setState({
      movies
    })
  }

  onPageChange = (p) => {
    this.setState({ currentPage: p });
  }

  onSortHandler = path =>{
   // this.renderIcon(path);
   this.setState({sortColumn:{path, order:'asc'}});
   if(this.state.sortColumn.order=='asc'){
     //alert('hi')
    this.setState({sortColumn:{path, order:'desc'}});
   } 
  }

  findMoviesHandler = (event) => {
    var txt = event.target.value;
    if (txt.length > 3) {
      const movies = getMovies().filter((mov) => {
        return mov.title.indexOf(txt) !== -1
      });

      this.setState({ movies })
      console.log(this.state)
    } else if (txt.length == 0) {
      this.setState({ movies: getMovies() })
    }

  }

  likeHandler = () => {

  }


  listgroupHandler = (item) => {
    const movies = item !== "All" ? getMovies().filter((data) => data.genre.name == item) : getMovies();
    this.setState({
      movies
    })
  }

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies, sortColumn } = this.state;

    if (count == 0) return <p>There are not data in datbase</p>

    const sortData = _.orderBy(allMovies, [sortColumn.path], sortColumn.order);

    const movies = paginate(sortData, currentPage, pageSize)
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-4">
            <ListGroup
              listItem={this.state.listgroup}
              clickHandler={this.listgroupHandler}/>
          </div>
          <div className="col-md-8">
            <span>Shows {count} record in database</span>
            <MoviesTable
              deleteHandler={this.handleDelete}
              movies={movies}
              count={count} 
              order={sortColumn.order}
              onSort={this.onSortHandler}/>
            <Pagination
              pageSize={pageSize}
              itemCount={count}
              currentPage={currentPage}
              onPageChange={this.onPageChange} />
          </div>
        </div>


      </Fragment>
    );
  }
}
