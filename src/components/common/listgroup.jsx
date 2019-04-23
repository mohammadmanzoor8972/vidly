import React, { Component, Fragment, useState, useEffect} from "react";
import propTypes from 'prop-types';
import _ from 'lodash'; //underscore 

const ListGroup = props =>{
    const {listItem, clickHandler} = props; 
    const [selectedItem, setActiveItem] = useState("All");

    useEffect(()=>{
        
        return ()=>{
           
        }
    })
    return (
        <ul class="list-group" onClick={(ev)=>{
            setActiveItem(ev.target.innerText);
            clickHandler(ev.target.innerText);
        }}>
            {listItem.map((item)=><li key={item} class={selectedItem==item ? 'list-group-item active' : 'list-group-item'}>{item}</li>)}
        </ul>
    )
}

ListGroup.propTypes={
    listItem:propTypes.array.isRequired,
    clickHandler:propTypes.func
}

export default ListGroup;


