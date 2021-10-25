import React, { useEffect, useState } from "react";
import "../basic.css";

export default function TruckAvailability(props) {
  const [respObj, setRespObj] = useState(null);
  const [reserves, setReserves]=useState({})

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
          const type = Object.keys(response);
          setRespObj([type, response]);
      });
  };

const submitRes=(e)=>{
    e.preventDefault()
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
console.log(reserves,"meep")
    //   fetch(`/reserve`, obj)

    
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
                <form>
              <h3>
              Reserve <input type="number" onChange={(e)=>{

                  const holdID=[...respObj[1][tr]]
                  console.log(e.target.value, "herrrr")
                  const truckID=holdID.slice(0,e.target.value)
                  console.log(truckID)

                  setReserves({...reserves, [reserves[tr]]:truckID})
              }} placeholder='0' min='0' max={respObj[1][tr].length}/> {tr} truck </h3> 
              </form>
            </span>
          );
        })
      ) : (
        <h3>No Available Trucks Try Again</h3>
      )}
      <button type="submit"onClick={submitRes}>Confirm</button>
      </div>
    </div>
  );
}
