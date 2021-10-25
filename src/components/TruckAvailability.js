import React, { useEffect, useState } from "react";

export default function TruckAvailability(props){
const [type, setType]=useState(null)
  
//     let diff=JSON.stringify(props.dateRange[0])
//    let date= new Date(diff)
//     let hff=JSON.parse(diff)
//     console.log(props.dateRange[0], diff)
//     console.log(new Date())

    const getTruckTimes=(e,route)=>{
        e.preventDefault()
        console.log(props, "meeep")
        let obj={
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(props)
        }
        fetch(`${route}`,obj).then((res)=>res.json()).then((response)=>{
            console.log(response, "duuude")

            if (route==='/truckAvailability'){
                const type=Object.keys(response)
            //  setType(...type)
            }
        })
    }

    return(
        <div>
            <h2>TruckAvailability login to schedule time</h2>
            <button onClick={(e)=>getTruckTimes(e,'/truckAvailability')}> see truck Availability </button>
            <button onClick={(e)=>getTruckTimes(e,'/reserve')}>Reserve</button>
        </div>
    )
}