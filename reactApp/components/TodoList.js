import React from 'react';
import Todo from './Todo.js';
import dummyData from '../app.js';

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
          {this.props.data.map((todoItem, index) => <Todo key={todoItem._id} toggleClick={() => this.props.toggleTodo(todoItem._id)} xClick={() => this.props.todoXClick(todoItem._id)} task={todoItem}/>)}
        </div>
      </div>
    );
  }
}
