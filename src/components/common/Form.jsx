import React, { Component } from 'react'
import Joi from 'joi-browser';

class Form extends Component {


    validate=()=>{

        const result= Joi.validate(this.state.data, this.schema, {abortEarly:false});
       if(!result.error) return false;
 
       const errors = {}
 
       for (let item of result.error.details){
           errors[item.path[0]] = item.message;
       }
 
      return errors;
         
     }


    handleSubmit=e=>{
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors:errors||{}});
        if(errors) return;

        this.doSubmit();
    }
 
     oldVlaidate(){
 
         const {account} = this.state;
         const errors = {};
         if(account.username.trim()==="")
             errors.username = "Username is required.";
         if(account.password.trim()==="")
             errors.password = "password is required.";
         return Object.keys(errors).length===0 ? null:errors;
     }
 
     validateFiled = ({name:label, value}) =>{
         debugger;
         const schemas = {[label]:this.schema[label]};
         const obj = {[label]:value};
         const {errors} = Joi.validate(obj, schemas);
         return errors ? errors.details[0].message : errors;
         
     }
 
     handleChange=({currentTarget:input})=>{
         const data = {...this.state.data};
         data[input.name] = input.value;
         this.setState({data});

         
     }
}

export default Form;