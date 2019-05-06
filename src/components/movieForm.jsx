import React, { Component } from 'react'
import Input from './common/input';
import Joi from 'joi-browser';
import Form from './common/Form';
import {saveMovie} from '../services/fakeMovieService';

class MovieForm extends Form {
    state = { data :   {
        _id: "233",
        title: "",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "cdcd" },
        numberInStock: "0",
        dailyRentalRate: "2",
        publishDate: new Date().toString(),
        liked: true
      },
        errors:{}
    }
    constructor(props) {
        super(props)

        
        
    }

    schema = {
        title:Joi.string().required().label("Password"),
        numberInStock:Joi.string().required().label("Number In Stock"),
        publishDate:Joi.string().required().label("Publish Date"),
        genre:Joi.object().required(),
        dailyRentalRate:Joi.string().required(),
        liked:Joi.string().required(),
        _id:Joi.string().required()
    }

    doSubmit=()=>{
        const { data } = this.state;
        data["_id"] = new Date().getTime();
        data["genreId"] = "5b21ca3eeb7f6fbccd471818";
        this.setState({data})
        console.log("Form Submited", this.state.data);
        saveMovie(data);
        this.props.history.push("/movies")
    }

    render() {
        const {data, errors}=this.state;
        return (
            <div>
                <h1>Movie Form</h1>
                
                <form onSubmit={this.handleSubmit} >
                   <Input name="title" error={errors.username} label="Username" autoFocus="true" type="text" value={data.username} helptext="please type" handleChange={this.handleChange} />
                   <Input name="numberInStock" error={errors.password}  label="Number in Stock" type="text" value={data.password} helptext="please type valid password" handleChange={this.handleChange} />
                   <Input name="dailyRentalRate"  error={errors.confirmPassword} label="Daily Rental Rate" type="text" value={data.confirmPassword} helptext="please type valid password" handleChange={this.handleChange} />
                   <Input name="liked" error={errors.question}  label="Rate" type="text" value={data.question} helptext="Enter valid questions" handleChange={this.handleChange} />
                   
                   <button  type="submit" className="btn btn-primary">Save</button>
                </form>
          
            </div>
        )
    }

}

export default MovieForm;