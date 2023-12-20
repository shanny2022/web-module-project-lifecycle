import React from 'react'

class Form extends React.Component {
  state = { task: '', hideCompleted: false };

  handleChange = (event) => {
    this.setState({ task: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ task: '' });
  }

  handleToggleCompleted = () => {
    this.setState(prevState => ({ hideCompleted: !prevState.hideCompleted }));
    this.props.toggleCompletedVisibility();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.task} onChange={this.handleChange} />
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <button type="button" onClick={this.handleToggleCompleted}>
            {this.state.hideCompleted ? 'Show Completed' : 'Hide Completed'}
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
