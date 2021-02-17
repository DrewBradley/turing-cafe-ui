import React from 'react';

const Reservation = ({id, name, date, time, count, removeReservation}) => {
  return (
    <article className="res-card">
      <h1 className="res-name">{name}</h1>
      <p className="res-date">{date}</p>
      <p className="res-time">{time} pm</p>
      <p className="res-count">Number of guests: {count}</p>
      <button 
        className="cancel-btn"
        onClick={() => {removeReservation(id)}}
        >Cancel
      </button>
    </article>
  )
}

export default Reservation