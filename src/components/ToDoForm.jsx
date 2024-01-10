import { Component } from 'react'
class TodoForm extends Component {
  state = {
    tasks: [],
    newTask: '',
  }

  // handleChange to moniter changes from input
  handleChange = (event) => {
    this.setState({ newTask: event.target.value })
  }

  // handleAddTask adds task on click of add button
  handleAddTask = () => {
    if (this.state.newTask !== '') {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, this.state.newTask],
        newTask: '',
      }))
    }
  }

  // handleEdit edits task
  handleEditTask = (index) => {
    alert('You click on edit', index)
  }

  // handleDelete delete task
  handleDeleteTask = (index) => {
    const tasks = [...this.state.tasks]
    tasks.splice(index, 1)
    this.setState({ tasks })
  }

  render() {
    return (
      <div className='mainContainer'>
        <div className='todoForm'>
          <div className='inputMainContainer'>
            <h3 className='inputText'>Enter your task</h3>
            <input
              type='text'
              name='enetrTask'
              id='enterToDoTask'
              value={this.state.newTask}
              onChange={this.handleChange}
            />
            <button className='Add' onClick={this.handleAddTask}>
              Add
            </button>
          </div>
          <div className='todoListContainer'>
            <p className='todoList'>This is your to do list</p>
            <ul>
              {this.state.tasks.map((task, index) => (
                <li key={index}>
                  {task}
                  <button
                    className='edit'
                    onClick={() => this.handleEditTask(index)}
                  >
                    Edit
                  </button>
                  <button
                    className='delete'
                    onClick={() => this.handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoForm
