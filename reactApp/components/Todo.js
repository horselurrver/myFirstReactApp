import React from 'react';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    var task = this.props.task;
    return (
      <div>
        <button onClick={this.props.xClick} style={{display:'inline'}} className="btn btn-default">X</button> {task.completed ? <strike><p style={{display:'inline'}}>{task.taskText}</p></strike> : <p style={{display:'inline'}}>{task.taskText}</p>}
        <button onClick={this.props.toggleClick} style={{float: 'right'}} className={task.completed ? "btn btn-success" : "btn btn-warning"}><span className={task.completed ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-hourglass"}></span></button>
      </div>
    );
  }
}
