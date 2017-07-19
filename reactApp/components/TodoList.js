import React from 'react';
import Todo from './Todo.js';
import dummyData from '../app.js';
var counter = 0;

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">Todo List</div>
        <div className="panel-body">
          {this.props.data.map((todoItem, index) => <Todo xClick={() => this.props.todoXClick(index)} key={counter++} task={todoItem}/>)}
        </div>
      </div>
    );
  }
}
