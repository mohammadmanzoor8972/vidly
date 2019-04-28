import React, { Component, Fragment } from "react";

const MovieCard = (props)=>{
    console.log(props)
    const { _id,
        title,
        genre,
        numberInStock,
        dailyRentalRate,
        publishDate,
        liked} = props;
return(
<div className="card">
<h4>{title}</h4>
  <div className="card-body">
    <p className="card-text">{numberInStock}</p>
    <p className="card-text">{dailyRentalRate}</p>
    <p className="card-text">{liked}</p>
    <p className="card-text">{publishDate}</p>
  </div>
  <button type="button" class="btn btn-warning" onClick={()=>window.history.back()}>Back</button>
</div>
    )

}

export default MovieCard