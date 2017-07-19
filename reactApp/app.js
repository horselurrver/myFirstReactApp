import React from 'react';
import ReactDOM from 'react-dom';

let dummyData = ['Finish react-todo exercise', 'Do yoga', 'Practice zither'];

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
    return (
      <div>
        <button className="btn btn-default">X</button> {this.props.task}
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
          {dummyData.map((string) => <Todo task={string}/>)}
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
