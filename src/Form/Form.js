import React, { Component } from 'react';

class Form extends Component{
  constructor(props) {
    super(props)
    this.state = {
      id: Date.now(),
      name: "",
      date: "",
      time: "",
      number: ""
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  addReservation = (event) => {
    event.preventDefault()
    this.props.addReservation(this.state)
    this.clearFields()
  }

  clearFields = () => {
    this.setState({
      id: Date.now(),
      name: "",
      date: "",
      time: "",
      number: ""
    })
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
        <button 
        className="submit-button" 
        disabled={ !this.state.name || !this.state.date || !this.state.time || this.state.number }
        onClick={this.addReservation}>
          Make a Reservation
        </button>
      </form>
    )
  }
}

export default Form 