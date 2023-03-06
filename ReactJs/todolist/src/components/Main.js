import React, { Component } from 'react';

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
      <div className="container">
        <div className="container d-flex flex-column bg-info mt-2 p-2 justify-content-center align-items-center rounded border border-white">
          <h1 className='text-center'>To-do list</h1>
          <h1 className="text-success">{newTask}</h1>
          <form action="#">
            <div className="d-flex col text-center">
              <input onChange={this.handleChange} type="text" className='form-control' />
              <button type="submit" className='btn btn-success ms-2'>Submit</button>

            </div>
          </form>
        </div>
      </div>
    )
  }
}
