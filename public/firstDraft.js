import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";

 function Datepicker() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(null);
  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  // };


  useEffect(()=>{
    console.log(startDate, "meee")
  })
  return (
    <div>
      <h2>datePicker componet</h2>
      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
        showTimeSelect
        selectsStart
        startDate={startDate}
        endDate={endDate}
        // timeFormat='HH:mm'
        timeIntervals={60}
        timeCaption='Pickup'
        dateFormat='MMMM d, yyyy h:mm aa'
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        inline
        showTimeSelect
        // showTimeSelectOnly
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        // timeFormat='HH:mm'
        timeIntervals={60}
        timeCaption='drop-off'
        dateFormat='MMMM d, yyyy h:mm aa'
      /> */}
      {/* <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      minDate={new Date()}
      endDate={endDate}
      selectsRange
      inline
      showTimeSelect
    /> */}
 
  
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      inline
      // withPortal
      showTimeSelect
    />
  
    </div>
  );
}
// function Datepicker(){
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(null);
//   const onChange = (dates) => {
//     const [start, end] = dates;
//     setStartDate(start);
//     setEndDate(end);
//   };
//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//       minDate={new Date()}
//       endDate={endDate}
//       inline
//       showTimeSelect
//       selectsRange
//       // endDate={endDate}
//       maxDate={addDays(new Date(), 5)}
//       placeholderText="Select a date between today and 5 days in the future"
      
//     />
//   );

// }
export default Datepicker