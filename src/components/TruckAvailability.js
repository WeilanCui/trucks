import React, { useEffect } from "react";

export default function TruckAvailability(props){
    console.log(props)
useEffect(()=>{
    fetch(`/trucks/:${props.dateRange}`)
})
    return(
        <div>
            <h2>TruckAvailability login to schedule time</h2>
            <button > see truck Availability </button>
        </div>
    )
}