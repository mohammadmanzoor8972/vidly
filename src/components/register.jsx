import React, { Component } from 'react'
import Input from './common/input';
import Joi from 'joi-browser';
import Form from './common/Form';

class Register extends Form {
    state = { data : {
        username:"",
        password:"",
        confirmPassword:"",
        question:""},
        errors:{}
    }
    constructor(props) {
        super(props)
    }

    schema = {
        username:Joi.string().required().label("Username"),
        password:Joi.string().required().label("Password"),
        confirmPassword:Joi.string().required().label("Confirm Password"),
        question:Joi.string().required().label("Security Question")
    }

    doSubmit=()=>{
        console.log("Form Submited", this.state.data);
    }

    render() {
        const {data, errors}=this.state;
        return (
            <div>
                <h1>Regiser User</h1>
                
                <form onSubmit={this.handleSubmit} >
                   <Input name="username" error={errors.username} label="Username" autoFocus="true" type="text" value={data.username} helptext="please type" handleChange={this.handleChange} />
                   <Input name="password" error={errors.password}  label="Password" type="password" value={data.password} helptext="please type valid password" handleChange={this.handleChange} />
                   <Input name="confirmPassword"  error={errors.confirmPassword} label="Confirm Password" type="password" value={data.confirmPassword} helptext="please type valid password" handleChange={this.handleChange} />
                   <Input name="question" error={errors.question}  label="Security Question" type="text" value={data.question} helptext="Enter valid questions" handleChange={this.handleChange} />
                   
                   <button  type="submit" className="btn btn-primary">Save</button>
                </form>
          
            </div>
        )
    }

}

export default Register;