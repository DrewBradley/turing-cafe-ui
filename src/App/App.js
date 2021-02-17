import React, { Component } from 'react';
import './App.css';
import ReservationDisplay from '../ReservationDisplay/ReservationDisplay'
import Form from '../Form/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <ReservationDisplay />
        </div>
      </div>
    )
  }
}

export default App;
