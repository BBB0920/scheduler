import React, { useState, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";

// Mock data
const appointments = {
  "1": {
    id: 1,
    time: "12pm",
  },
  "2": {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer:{
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  "3": {
    id: 3,
    time: "2pm",
  },
  "4": {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer:{
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  "5": {
    id: 5,
    time: "4pm",
  }
};

export default function Application(props) {
  
  const [state, setState] = useState({
    day: "Monday",
    days: []
    // appointments: {}
  });

  // Update states for day
  const setDay = day => setState({...state, day});

  // Update states for days
  const setDays = days => setState(prev => ({...prev, days}));

  // Gets days data from API, then update with it
  useEffect(() => {
    const testURL = '/api/days';
    axios.get(testURL).then(response => {
      setDays([...response.data])
    })
  }, [])
  
  // Creates all appointment components 
  const appointmentList = Object.values(appointments).map(appointment => {
    return (
      <Appointment
        key={appointment.id}
        {...appointment}    // Spreading: All the object key names match prop names
      />
    )
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
      </section>
      <section className="schedule">
        <nav>
          {appointmentList}
          <Appointment key="last" time="5pm" />
        </nav>
      </section>
    </main>
  );
}
