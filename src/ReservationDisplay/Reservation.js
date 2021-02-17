import React from 'react';

const Reservation = ({name, date, time, count, removeRes}) => {
  return (
    <article className="res-card">
      <h1 className="res-name">{name}</h1>
      <p className="res-date">{date}</p>
      <p className="res-time">{time} pm</p>
      <p className="res-count">Number of guest: {count}</p>
      <button 
        className="cancel-btn"
        onClick={removeRes}
        >Cancel
      </button>
    </article>
  )
}

export default Reservation