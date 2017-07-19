import React from 'react';
import TodoList from './TodoList.js';
import InputLine from './InputLine.js';

export default class TodoApp extends React.Component {
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
          <TodoList data={this.props.data}/>
        </div>
      </div>
    );
  }
}
