import React, { Component } from 'react'
import Input from './common/input';
import Joi from 'joi-browser';
import MyChild from './childreen';
import Form from './common/Form';

class LoginForm extends Form {
    state = { data :{
        username:"",
        password:"",
        isRemember:false},
        errors:{}
    }

    constructor(props) {
        super(props)
    }

    schema = {
        username:Joi.string().required().label("Username"),
        password:Joi.string().required().label("Password"),
        isRemember:Joi.boolean().required().label("IsRequired")
    }
    
    doSubmit=()=>{
        console.log("Form Submited", this.state.data);
    }

    render() {
        const {data, errors}=this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit} >
                   <Input name="username" error={errors.username} label="Username" autoFocus="true" type="text" value={data.username} helptext="please type" handleChange={this.handleChange} />
                   <Input name="password" error={errors.password}  label="Password" type="password" value={data.password} helptext="please type valid password" handleChange={this.handleChange} />
                   <Input name="isRemember" label="is Remember" type="checkbox" value={data.isRemember} helptext="please type valid password" handleChange={this.handleChange} />
                   <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

}

export default LoginForm;