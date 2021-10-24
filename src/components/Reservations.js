import React, { useEffect } from "react";
import "../basic.css"
export default function Reservations(props) {
  return (
    <div className='reserveBox'>
      <h2>Hi {props.reservations.name} view your reservations: </h2>
      {props.reservations.data
        ? props.reservations.data.map((res, i) => {
            
            return (
              <ul key={`reservation ${res.id}`} className='reservation'>
                {/* <li> */}
                  ReservationID: {res.id} for {res.type} truck <br/>Pickup {res.start.slice(0,21)} Drop-off {res.end.slice(0,19)}
                {res.start.length}
                {/* </li> */}
              </ul>
              
            );
          })
        : props.reservations.message}
    </div>
  );
}
