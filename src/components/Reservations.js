import React, { useEffect } from "react";
import "../basic.css";
import { withRouter } from "react-router-dom";

function Reservations(props) {
  window.localStorage.setItem("username", props.reservations.name);
  return (
    <div className='reserveBox'>
      <h2>Hi {props.reservations.name} view your reservations: </h2>
      {props.reservations.data
        ? props.reservations.data.map((res, i) => {
            return (
              <ul key={`reservation ${res.id}`} className='reservation'>
                ReservationID: {res.id} for {res.type} truck <br />
                Pickup {res.start} Drop-off {res.return_time}
              </ul>
            );
          })
        : props.reservations.message}
    </div>
  );
}

export default withRouter(Reservations);
