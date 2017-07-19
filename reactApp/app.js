import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp.js';
const dummyData = [{taskText: "Finish react-todo exercise", completed: false},
                 {taskText: "Do yoga", completed: true},
                 {taskText: "Practice zither", completed: false}];

ReactDOM.render(<TodoApp data={dummyData}/>, document.getElementById('root'));
