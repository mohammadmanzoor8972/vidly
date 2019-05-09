import React, { Component, Fragment } from "react";
import Like from "./common/like";
import { Link } from 'react-router-dom';


const renderIcon=(dd)=>{
    return (<i className={"fa fa-sort-"+dd}/>)
}
const MoviesTable = ({deleteHandler,
    movies,
    count,
    onSort,
    order}) => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={()=> onSort('title')}>Title {renderIcon(order)}</th>
                        <th onClick={()=> onSort('genre.name')}>Genre {renderIcon(order)}</th>
                        <th onClick={()=> onSort('numberInStock')}>Stock {renderIcon(order)}</th>
                        <th onClick={()=> onSort('dailyRentalRate')}>Rate {renderIcon(order)}</th>
                        <th onClick={()=> onSort()}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {count != 0 && movies.map((movie, keys) => (
                        <tr key={keys} >
                            <td> <Link class="nav-link" replace="true" to={"/moviesdet/"+movie._id}>{movie.title}</Link> </td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><Like /></td>
                            <td><i className="fa fa-remove btn btn-danger" onClick={() => deleteHandler(movie)}></i></td>
                        </tr>
                    ))}
                </tbody>
            </table>)
}

export default MoviesTable;