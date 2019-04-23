import React, { Component, Fragment } from "react";


const Like=(props)=>{
    let isLike = false;
return(
    <i className={isLike ? "fa fa-heart":"fa fa-heart-o"} 
        onClick={(e)=>{
            isLike=!isLike;
            console.log(isLike)
            e.target.className=isLike ? "fa fa-heart":"fa fa-heart-o"
        }}
    aria-hidden="true"></i>
)
}

export default Like;
