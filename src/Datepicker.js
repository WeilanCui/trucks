import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import TruckAvailability from "./TruckAvailability"
// import { addDays } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

function Datepicker() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  useEffect(() => {
    console.log(typeof startDate);
  });
  return (
    <div>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        minDate={new Date()}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        withPortal
      />

      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setDateRange([date, endDate]);
        }}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={60}
        timeCaption='pickup'
        dateFormat='MM/dd h:mm aa'
        withPortal
      />

      <DatePicker
        selected={endDate}
        showTimeSelect
        showTimeSelectOnly
        onChange={(date) => setDateRange([startDate, date])}
        timeIntervals={60}
        timeCaption='return'
        dateFormat='MM/dd h:mm aa'
        withPortal
      />
      <TruckAvailability dateRange={dateRange}/>
    </div>
  );
}
export default Datepicker;