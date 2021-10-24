import React, { useEffect } from "react";

export default function TruckAvailability(props){
    console.log(props)

    const getTruckTimes=()=>{
        console.log(props, "meeep")
        let obj={
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(props)
        }
        fetch('/truckAvailability',obj).then((res)=>res.json()).then((response)=>{
            console.log(response)
        })
    }

    return(
        <div>
            <h2>TruckAvailability login to schedule time</h2>
            <button onClick={getTruckTimes}> see truck Availability </button>
        </div>
    )
}