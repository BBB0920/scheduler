import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {

  const days = (props.days).map((array) => {
    return (
      <DayListItem
        key={array.id}
        name={array.name}
        spots={array.spots}
        selected={array.name === props.day}
        setDay={props.setDay}
      />
    )
  })
  return (
    <ul>
      {days}
    </ul>
  )
}