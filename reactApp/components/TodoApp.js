import React from 'react';
import TodoList from './TodoList.js';
import InputLine from './InputLine.js';
import axios from 'axios';

const dbUrl = "http://localhost:3000/db";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  componentDidMount() {
    var thisThing = this;
    axios.get(dbUrl + '/all')
      .then(function(response){
    // Do whatever you want with the request's response in here
      //  console.log('the response: ' + JSON.stringify(response['data']));
        thisThing.setState({
          data: response['data']
        });
      })
      .catch(function(error){
    // Do whatever you want in the event of an error in here
        console.log(error);
    });
  }

  toggleTodo(id) {
    /*var arrayCopy = this.state.data.slice();
    arrayCopy[index]['completed'] = !arrayCopy[index]['completed'];
    this.setState({
      data: arrayCopy
    });*/
    var thisThing = this;
    axios.post(dbUrl + '/toggle', {
      id: id
    })
    .then(function(response) {// return entire updated response
      var arrCopy = thisThing.state.data.slice();
      for (var i = 0; i < arrCopy.length; i++) {
        if (arrCopy[i]._id.toString() === id) {
          arrCopy[i].completed = !arrCopy[i].completed;
        }
      }
      thisThing.setState({
        data: arrCopy
      })
    })
    .catch(function(error) {
      console.log(error);
    })
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
    console.log('task to add: ' + task);
    var thisThing = this;
    axios.post(dbUrl + '/add', {
      task: task
      })
      .then(function(response){// return new task
    // Do whatever you want with the request's response in here
        console.log(response);
        thisThing.setState({
          data: thisThing.state.data.concat(response.data)
        });
      })
      .catch(function(error){
    // Do whatever you want in the event of an error in here
        console.log(error);
      });
  }

  removeTodo(id) {
    /*var arrayCopy = this.state.data.slice();
    arrayCopy.splice(index, 1);
    this.setState({
      data: arrayCopy
    });*/
    var thisThing = this;
    axios.post(dbUrl + '/remove', {
      id: id
    })
      .then(function(response) { // return entire new array
        var arrCopy = [];
        for (var i = 0; i < thisThing.state.data.length; i++) {
          if (thisThing.state.data[i]._id.toString() !== id) {
            arrCopy.push(Object.assign({}, thisThing.state.data[i]));
          }
        }
        thisThing.setState({
          data: arrCopy
        })
      })
      .catch(function(error) {
        console.log(error);
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
