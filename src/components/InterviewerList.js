import React from 'react';
import "components/InterviewerListItem.scss";
import InterviewerListItem from './InterviewerListItem';

export default function InterviewerList(props) {
  console.log(props);
  const interviewers = (props.interviewers).map((array) => {
    return (
      <InterviewerListItem 
        key={array.id}
        name={array.name}
        avatar={array.avatar}
        selected={array.id === props.interviewer}
        setInterviewer={()=>props.setInterviewer(array.id)}
      />
    )
  })
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers}
      </ul>
    </section>
  )
}