import React, { useEffect, useState } from "react";
import "../basic.css";

export default function TruckAvailability(props) {
  const [respObj, setRespObj] = useState(null);
  const [reserves, setReserves]=useState(null)

  const getTruckTimes = (e) => {
    e.preventDefault();
    if (!props.dateRange[0]) return alert("Please select time");
    let obj = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(props),
    };
    fetch(`/truckAvailability`, obj)
      .then((res) => res.json())
      .then((response) => {
          if(response.message){return console.log(response.message)}
        console.log(response, "duuude")
          const type = Object.keys(response);
          setRespObj([type, response]);
        
      });
  };

const submitRes=(e)=>{
    e.preventDefault()
    // console.log(props)
    // console.log(reserves,"reserving")
    // console.log(window.localStorage.username)
    if(!window.localStorage.username)return alert('login to confirm')
   
    const username=window.localStorage.getItem('username')
    let bodyObj={
        username,
        dateRange:props.dateRange,
        truckobj:reserves
    }
    const obj = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(bodyObj),
      };

      fetch(`/reserve`, obj)

    
}

  return (
    <div>
      <button onClick={(e) => getTruckTimes(e, "/truckAvailability")}>
        {" "}
        Check truck Availability{" "}
      </button>
      <h3>Availabile trucks: </h3>

      <div className='truck'>
      {respObj ? (
        respObj[0].map((tr, i) => {
          return (
            <span key={i}>
              <h3>
              Reserve <input type="number" onClick={(e)=>{
                  let holdID=respObj[1][tr].slice(-e.target.event)
                  setReserves(holdID)
              }} placeholder='0' id="quantity" name="quantity" min="1" max={respObj[1][tr].length}/> {tr} truck <button onClick={submitRes}>Confirm</button> </h3> 
            </span>
          );
        })
      ) : (
        <h3>No Available Trucks Try Again</h3>
      )}
      </div>
    </div>
  );
}
