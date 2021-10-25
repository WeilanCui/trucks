import React, { useEffect, useState } from "react";
import "../basic.css";

export default function TruckAvailability(props) {
  const [respObj, setRespObj] = useState(null);
  const [reserves, setReserves]=useState(null)

  const getTruckTimes = (e, route) => {
    e.preventDefault();
    if (!props.dateRange[0]) return alert("Please select time");
    let obj = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(props),
    };
    fetch(`${route}`, obj)
      .then((res) => res.json())
      .then((response) => {
        console.log(response, "duuude");

        if (route === "/truckAvailability") {
          const type = Object.keys(response);
          setRespObj([type, response]);
        }
      });
  };

const submitRes=(e)=>{
    e.preventDefault()
    console.log(reserves,"reserving")
    console.log(window.localStorage.username)
    if(!window.localStorage)return alert('signin')

    if(window.localStorage){
        let username=window.localStorage.getItem('username')

    }
}

  return (
    <div>
      <h2>TruckAvailability login to schedule time</h2>
      <button onClick={(e) => getTruckTimes(e, "/truckAvailability")}>
        {" "}
        see truck Availability{" "}
      </button>
      <button onClick={(e) => getTruckTimes(e, "/reserve")}>Reserve</button>
      <h3>Availabile trucks </h3>

      <div className='truck'>
      {respObj ? (
        respObj[0].map((tr, i) => {
          return (
            <span key={i}>
              <h3>
              Reserve <input type="number" onClick={(e)=>{
                  let holdID=respObj[1][tr].slice(-e.target.event)
                  setReserves({[tr]:holdID})
              }} placeholder='0' id="quantity" name="quantity" min="1" max={respObj[1][tr].length}/> {tr} truck
              </h3>
              <button onClick={submitRes}>confirm</button>
            </span>
          );
        })
      ) : (
        <h3>see available trucks:</h3>
      )}
                    

      </div>
    </div>
  );
}
