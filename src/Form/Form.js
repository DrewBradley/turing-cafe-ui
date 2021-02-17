import React, { Component } from 'react';

class Form extends Component{
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      number: ""
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
    console.log(this.state)
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}>
        </input>
        <input
          type="text"
          placeholder="Date"
          name="date"
          value={this.state.date}
          onChange={this.handleChange}>
        </input>
        <input
          type="text"
          placeholder="Time"
          name="time"
          value={this.state.time}
          onChange={this.handleChange}>
        </input>
        <input
          type="number"
          placeholder="Number of Guests"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}>
        </input>
        <button>
          Make a Reservation
        </button>
      </form>
    )
  }
}

export default Form 