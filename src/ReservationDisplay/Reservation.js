import React from 'react';

const Reservation = () => {
  return (
    <article className="res-card">
      <h1 className="res-name">Person</h1>
      <p className="res-date">Date</p>
      <p className="res-time">Time</p>
      <p className="res-count">Number</p>
      <button className="cancel-btn">Cancel</button>
    </article>
  )
}

export default Reservation