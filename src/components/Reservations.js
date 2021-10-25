import React, { useEffect } from "react";
import "../basic.css";
export default function Reservations(props) {
  return (
    <div className='reserveBox'>
      <h2>Hi {props.reservations.name} view your reservations: </h2>
      {props.reservations.data
        ? props.reservations.data.map((res, i) => {
            return (
              <ul key={`reservation ${res.id}`} className='reservation'>
                {/* ReservationID: {res.id} for {res.type} truck <br /> */}


                {/* Pickup {res.start.slice(0, 21)} Drop-off {res.end.slice(0, 19)} */}
                {typeof res.start}{res.start}
                {/* {res.start.toUTCString()} */}
              </ul>
            );
          })
        : props.reservations.message}
    </div>
  );
}
