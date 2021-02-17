import React from 'react';

const Form = () => {
  return (
    <form>
      <input
        type="text"
        placeHolder="Name"
        name="resName"
        value="">
      </input>
      <input
        type="text"
        placeHolder="Date"
        name="resDate"
        value="">
      </input>
      <input
        type="text"
        placeHolder="Time"
        name="resTime"
        value="">
      </input>
      <input
        type="number"
        placeHolder="Number of Guests"
        name="resCount"
        value="{}">
      </input>
      <button>
        Make a Reservation
      </button>
    </form>
  )
}

export default Form 