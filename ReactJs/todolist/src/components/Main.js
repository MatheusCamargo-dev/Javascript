import React, { Component } from 'react';
import { Plus } from 'react-bootstrap-icons';
export default class Main extends Component {
  state = {
    newTask: '',
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }

  render(){
    const { newTask } = this.state;
    return(
      <div className="container col-6">
        <div className="container d-flex flex-column bg-white mt-5 p-2 justify-content-center align-items-center rounded border border-info">
          <h1 className='text-center'>To-do list</h1>
          <form action="#">
            <div className="d-flex col text-center">
              <input
                onChange={this.handleChange}
                type="text"
                className='form-control border-right-0'
                value={newTask}
              />
              <button type="submit" className="rounded ms-1">
              <Plus
                size={35}
                className="bg-danger"
              />
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
