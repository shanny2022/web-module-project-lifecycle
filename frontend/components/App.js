import React from 'react';
import axios from 'axios';
import TodoList from '../components/TodoList';
import Form from '../components/Form';
import styled from 'styled-components';

const TodosLabel = styled.h2`
  color: /* same color as ToDo App */;
  margin-left: /* adjust this to move the label to the left */;
`;

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get('http://localhost:9000/api/todos')
      .then(response => {
        this.setState({ todos: response.data.data });
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }

  addTodo = (task) => {
    this.setState({ todos: [...this.state.todos, { id: Date.now(), task, completed: false }] });
  }

  toggleTodo = (id) => {
    const todo = this.state.todos.find(todo => todo.id === id);
    if (!todo) {
      console.error('Todo not found: ', id);
      return;
    }

    axios.patch(`http://localhost:9000/api/todos/${id}`, { completed: !todo.completed })
      .then(response => {
        this.setState({
          todos: this.state.todos.map(todo => todo.id === id ? response.data.data : todo)
        });
      })
      .catch(error => {
        console.error('Error updating todo: ', error);
      });
  }

  clearCompleted = () => {
    axios.delete('http://localhost:9000/api/todos/completed')
      .then(() => {
        this.setState({ todos: this.state.todos.filter(todo => !todo.completed) });
      })
      .catch(error => {
        console.error('Error deleting completed todos: ', error);
      });
  }

  render() {
    return (
      <div>
        <TodosLabel>ToDos:</TodosLabel>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo} />
        <Form addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
