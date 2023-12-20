import React from 'react'


class Todo extends React.Component {
  handleToggle = () => {
    // Call this.props.toggleTodo with this.props.todo.id
  }

  render() {
    return (
      <div onClick={this.handleToggle}>
        {this.props.todo.task} {this.props.todo.completed ? "(completed)" : ""}
      </div>
    );
  }
}

export default Todo;
