import React from 'react';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var task = this.props.task;
    return (
      <div>
        <button onClick={this.props.xClick} style={{display:'inline'}} className="btn btn-default">X</button> {this.props.task.completed ? <strike><p style={{display:'inline'}}>{this.props.task.taskText}</p></strike> : <p style={{display:'inline'}}>{task.taskText}</p>}
        <button onClick={this.props.toggleClick} style={{float: 'right'}} className={this.props.task.completed ? "btn btn-success" : "btn btn-warning"}><span className={this.props.task.completed ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-hourglass"}></span></button>
      </div>
    );
  }
}
