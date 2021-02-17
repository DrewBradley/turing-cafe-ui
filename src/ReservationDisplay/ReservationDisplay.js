import React from 'react';
import Reservation from './Reservation'

const ReservationDisplay = (props) => {
  const reservations = props.data.map(res => <Reservation   
    key={res.id} 
    id={res.id} 
    name={res.name}  
    date={res.date} 
    time={res.time} 
    count={res.number} 
    removeReservation={props.removeReservation}/>)
  return (
    <section className="reservation-grid">
      { reservations }
    </section>
  )
}

export default ReservationDisplay
