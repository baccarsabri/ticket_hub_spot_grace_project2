import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch = () => {
  const [dates, setDates] = useState([
    new DateObject(),
    new DateObject().add(3, "days"),
  ]);
useEffect(()=>{
  const formattedDates = dates.map(date => date.format("YYYY-MM-DDTHH:mm:ss"));
    console.log(formattedDates);
  },[dates[0]&& dates[1]])
  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates}
        onChange={setDates}
        numberOfMonths={1}
        offsetY={10}
        range
        rangeHover
        format="MMMM DD"
      />
    </div>
  );
};

export default DateSearch;
