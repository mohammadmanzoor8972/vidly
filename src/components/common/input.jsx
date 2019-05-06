import React, { Component } from 'react'

const Input = ({label, name, handleChange, value, type, helptext, error, autoFocus}) => {

    switch(type){
        case "checkbox":
        return(
            <div className="form-check">
                        <input 
                        name={name} 
                        type={type} 
                        onChange={handleChange} 
                         className="form-check-input" checked={value}/>
                        <label className="form-check-label" for="exampleCheck1">{label}</label>
                       { error ? <div class="alert alert-danger" role="alert">
                            {error}
                        </div> : ""}
                    </div>
        )
        break;
        default :
        return(
            <div className="form-group">
            <label for={name}>{label}</label>
            <input 
            name={name} 
            onChange={handleChange} 
            value={value} 
            autoFocus={autoFocus}
            type={type}
            className="form-control"
            aria-describedby="emailHelp" 
            placeholder={"Enter "+label} />
            <small className="form-text text-muted">{helptext}</small>
            { error ? <div class="alert alert-danger" role="alert">
                            {error}
                        </div> : ""}
        </div>
        )
        break;
    }
}

export default Input;