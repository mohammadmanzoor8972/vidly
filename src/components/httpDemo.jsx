import React, { Component, async, Fragment } from 'react'

import http from '../services/httpService';
import {ToastContainer} from 'react-toastify';
import '../App.css'

class HttpDemo extends Component {


    
    state = {
        posts:[]
    }
    urls = "https://jsonplaceholder.typicode.com/posts"


    

    async componentDidMount(){
    const {data:posts} = await http.get(this.urls);
    this.setState({posts});
    

    }

    handleDelete = post =>{
        const originalPosts = this.state.posts;
        
        const posts = this.state.posts.filter(p=> p.id!==post.id)
        this.setState({posts});

        try {
            http.delete(this.urls +"/"+post.id);
           // throw new Error('some failed')
        } catch (ex){
            this.setState({posts: originalPosts})
            alert("something failed")

        }
    }

    handleUpdate = async post =>{
        const originalPost = {...post};
        
        post.title = "UPDATED";
        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index]={...post};
        this.setState({posts});

        try{
            await http.put(this.urls +"/242"+post.id, post);
        }catch{
            alert("something wrong");
            posts[index]={...originalPost};
            this.setState({posts});
        }
        
        
    }

 
    render(){
        const {posts} = this.state;
        return (
            <Fragment>
                <ToastContainer/>
            <table>
            <thead>
                <tr>
                    <th>Title </th>
                    <th>Update</th>    
                    <th>Delete</th>    
                </tr>
            </thead>
            <tbody>
                {posts.map((data, index)=>
                <tr keys={index}>
                    <td>{data.title}</td>
                    <td><button className="btn btn-primary" onClick={()=>this.handleUpdate(data)}>Update</button></td>
                    <td><button className="btn btn-danger" onClick={()=>this.handleDelete(data)} >Delete</button></td>
                </tr>
                )}
            </tbody>
          
        </table>
        </Fragment>)
    }

}

export default HttpDemo;