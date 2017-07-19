import React from 'react';
import TodoList from './TodoList.js';
import InputLine from './InputLine.js';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(task) {
    var arrayCopy = this.state.data.slice();
    arrayCopy.push({
      taskText: 'Test Task',
      completed: false
    });
    this.setState({
      data: arrayCopy
    });
  }

  render() {
    return (
      <div style={{margin: '10%'}}>
        <div style={{width:'50%'}}>
          <InputLine submit={() => this.addTodo()}/>
          <br/>
          <TodoList data={this.state.data}/>
        </div>
      </div>
    );
  }
}
