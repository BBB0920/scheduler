export default function getAppointmentsForDay (state, day) {

  const filteredDayObject = state.days.find(daysInfo => daysInfo.name === day);

  if (!filteredDayObject) {
    return [];
  }

  const appointmentsIdsArray = filteredDayObject.appointments;

  const appointmentsList = appointmentsIdsArray.map(id => state.appointments[id]);

  return appointmentsList;
}