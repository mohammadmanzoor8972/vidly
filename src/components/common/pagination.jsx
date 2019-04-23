import React, { Component, Fragment } from "react";
import propTypes from 'prop-types';
import _ from 'lodash'; //underscore 

const Pagination = props =>{
    const {itemCount, pageSize, currentPage, onPageChange} = props;

    const pagesCount = Math.ceil(itemCount/ pageSize);
    if(pagesCount==1){
        return null;
    }
    const pages = _.range(1, pagesCount+1);

    return (
        <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
        {pages.map(page=>(
        <li key={page} class={currentPage===page ? 'page-item active' : 'page-item'}>
        <a class="page-link"  onClick={()=>onPageChange(page)}>{page}</a>
        </li>    
        ))}
        
        </ul>
    </nav>
    )
}

Pagination.propTypes={
    itemCount:propTypes.number.isRequired, 
    pageSize:propTypes.number, 
    currentPage:propTypes.number, 
    onPageChange:propTypes.func
}
export default Pagination;

