import React from 'react';
import ReactDOM from 'react-dom';

let dummyData = [{taskText: "Finish react-todo exercise", completed: false},
                 {taskText: "Do yoga", completed: true},
                 {taskText: "Practice zither", completed: false}];

var counter = 0;

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control"/>
          <span className="input-group-btn">
            <button className="btn btn-info" type="button">Add todo</button>
          </span>
        </div>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    var task = this.props.task;
    return (
      <div>
        <button style={{display:'inline'}} className="btn btn-default">X</button> {task.completed ? <strike><p style={{display:'inline'}}>{task.taskText}</p></strike> : <p style={{display:'inline'}}>{task.taskText}</p>}
      </div>
    );
  }
}

class TodoList extends React.Component {
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
          {dummyData.map((todoItem) => <Todo key={counter++} task={todoItem}/>)}
        </div>
      </div>
    );
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={{margin: '10%'}}>
        <div style={{width:'50%'}}>
          <InputLine />
          <br/>
          <TodoList />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
