import { Component } from 'react'
import { toast } from 'react-toastify'

class HobbiesFiller extends Component {
  state = {
    newHobby: '',
    hobbies: [],
  }

  onNewHobbyChange = (e) => {
    this.setState({ newHobby: e.target.value })
  }

  onAddNewHobby = () => {
    const { newHobby, hobbies } = this.state
    const newHobbyLC = newHobby.toLowerCase()
    if (!newHobby) {
      toast('Please enter a valid hobby!')
      return
    }

    if (hobbies.includes(newHobbyLC)) {
      toast(`${newHobbyLC} This hobby already exists!`)
      return
    }

    this.setState({ hobbies: [newHobbyLC, ...hobbies], newHobby: '' })

    toast(`${newHobby} added to your list of hobbies`)
  }

  handleDeletehobby = (index, hobby) => {
    const updateHobbies = [...this.state.hobbies]
    updateHobbies.splice(index, 1)
    this.setState({ hobbies: updateHobbies })
    toast(`${hobby} hobby is deleted`)
  }

  handleDeleteAll = () => {
    this.setState({ hobbies: [] })
    toast('All hobbies are deleted ')
  }

  render() {
    const { newHobby } = this.state
    return (
      <div>
        <div className='form-element'>
          <p>New Hobby</p>
          <input
            type='text'
            placeholder='Enter a hobby'
            value={newHobby}
            onChange={this.onNewHobbyChange}
          />
          <button onClick={this.onAddNewHobby}>Add Hobby</button>
        </div>
        <p className='hobbieList'>This is hobby List</p>
        <button className='deleteAll' onClick={this.handleDeleteAll}>
          Delete All
        </button>
        <ul>
          {this.state.hobbies.map((hobby, index) => (
            <li key={index}>
              {hobby}
              <button
                className='delete'
                onClick={() => this.handleDeletehobby(index, hobby)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default HobbiesFiller
