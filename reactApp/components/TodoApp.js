import React from 'react';
import TodoList from './TodoList.js';
import InputLine from './InputLine.js';
import axios from 'axios';

const dbUrl = "http://localhost:3000/db";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleTodo(index) {
    var arrayCopy = this.state.data.slice();
    arrayCopy[index]['completed'] = !arrayCopy[index]['completed'];
    this.setState({
      data: arrayCopy
    });
  }

  addTodo(task) {
    /*var arrayCopy = this.state.data.slice();
    arrayCopy.push({
      taskText: task,
      completed: false
    });
    this.setState({
      data: arrayCopy
    });*/
    var thisThing = this;
    axios.post(dbUrl + '/add', {
      task: task
      })
      .then(function(response){
    // Do whatever you want with the request's response in here
        thisThing.setState({ todos: thisThing.state.data.concat(response.data)});
      })
      .catch(function(error){
    // Do whatever you want in the event of an error in here
        console.log(error);
      });
  }

  removeTodo(index) {
    var arrayCopy = this.state.data.slice();
    arrayCopy.splice(index, 1);
    this.setState({
      data: arrayCopy
    });
  }

  render() {
    return (
      <div style={{margin: '10%'}}>
        <div style={{width:'50%'}}>
          <InputLine submit={(task) => this.addTodo(task)}/>
          <br/>
          <TodoList toggleTodo={this.toggleTodo} todoXClick={this.removeTodo} data={this.state.data}/>
        </div>
      </div>
    );
  }
}
