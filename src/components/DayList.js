import React from "react";
import classNames from "classnames";
import DayListItem from "./DayListItem";


export default function DayList(props) {
  const days = (props.days).map((array) => {
    return (
      <DayListItem
        key={array.id}
        name={array.name}
        spots={array.spots}
        selected={array.name === array.day}
        setDay={array.setDay}
      />
    )
  })
  return (
    <ul>
      {days}
    </ul>
  )
}