import cx from 'classnames';
import React, { Component } from 'react';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {text:'', isCompleted: false},
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ item: {text:event.target.value, isCompleted:this.state.isCompleted}})
  }

  onSubmit = (event) => {
    event.preventDefault();
    if(this.state.item.text.length>0){
    this.setState({
      items: [...this.state.items,  this.state.item]
    });
    this.setState({ item: {text:"", isCompleted:false}})
    }
  }

  clickHandler = (d, s) =>{
   d.isCompleted=!d.isCompleted;
   this.setState({
    items: [...this.state.items]
  });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.item.text} onChange={this.onChange} />
          <button>Add</button>
        </form>
        <TodoCounter items={this.state.items} />
        <TodoItem items={this.state.items} clickHandler={this.clickHandler} />
        <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
      </div>
    );
  }
}

const TodoCounter = props => (
<div className="task-counter">
        {props.items.filter(d=>!d.isCompleted).length} remaining out of {props.items.length} tasks
</div>
);
// style={{'textDecoration': item.isCompleted ? 'line-through' : 'none'}}
const TodoItem = props => (
    <ul>
      {
        props.items.map((item, index) => <li key={index} onClick={props.clickHandler.bind(this, item)}
        className={item.isCompleted ? "is-done" : ""}>{item.text}</li>)
      }
    </ul>
  );