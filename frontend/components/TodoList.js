import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <div key={todo.id}>
            <span onClick={() => this.props.toggleTodo(todo.id)}>
              {todo.completed ? '✔' : ''} {todo.task}
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
