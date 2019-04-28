import React, { Component } from 'react'
import Input from './common/input';

class LoginForm extends Component {
    state = { account :{
        username:"",
        password:"",
        isRemember:false},
        errors:{}
    }
    username = React.createRef();
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        //this.login.current.focus();
    }

    validate=()=>{
        const {account} = this.state;
        const errors = {};
        if(account.username.trim()==="")
            errors.username = "Username is required.";
        if(account.password.trim()==="")
            errors.password = "password is required.";
        return Object.keys(errors).length===0 ? null:errors;
    }

    handleSubmit=e=>{
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors:errors||{}});
        console.log(this.state);
    }

    handleChange=({currentTarget:input})=>{
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account:{...account}});
    }

    render() {
        const {account}=this.state;
        return (
            <div>
                <h1>Login</h1>
                
                <form onSubmit={this.handleSubmit} >
                   <Input name="username" error={this.state.errors.username} label="Username" autoFocus="true" type="text" value={account.username} helptext="please type" handleChange={this.handleChange} />
                   <Input name="password" error={this.state.errors.password}  label="Password" type="password" value={account.password} helptext="please type valid password" handleChange={this.handleChange} />
                   <Input name="isRemember" label="is Remember" type="checkbox" value={account.isRemember} helptext="please type valid password" handleChange={this.handleChange} />
                   <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

}

export default LoginForm;