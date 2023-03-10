import React, { useState } from 'react';
import InterviewerList from "components/InterviewerList";
import Button from "components/Button.js";

export default function Form(props) {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = function() {
    setStudent("");
    setInterviewer(null);
  }

  const cancel = function() {
    reset();
    props.onCancel();
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            // Controlled component
            onChange={(event)=>setStudent(event.target.value)}
          />
        </form>
        <InterviewerList 
          id={interviewer}
          interviewers={props.interviewers}
          onChange={setInterviewer}
          avatar={props.avatar}
          selected={props.value}
          value={interviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={()=>props.onSave(student, interviewer)}>Save</Button>
        </section>
      </section>
    </main>
  )
}