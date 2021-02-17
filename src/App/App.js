import React, { Component } from 'react';
import './App.css';
import ReservationDisplay from '../ReservationDisplay/ReservationDisplay'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      errorMdg: ""
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({reservations: data}))
      .catch(error => this.setState({errorMsg: error}))
  }

  addReservation = (res) => {
    this.setState({
      reservations: [...this.state.reservations, res]
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addRes={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationDisplay data={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
