import React, { Component, Fragment } from "react";

const MovieCard = (prop)=>{
const {movies}=prop
return(
<ul className="moviecard">
    {movies.map((item,keys)=>{
        return <li>{item.title}</li>
    })}
</ul>
    )

}

export default MovieCard