/*7*/
import React, { useState } from "react";

/*7*/
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

/*7*/
export const AppointmentsPage = ({
  appointments,
  addAppointment,
  contacts
}) => {
  /*
  Define state variables for 
  appointment info
  */
/*7*/
const [title, setTitle] = useState("");
const [contact, setContact] = useState(
  contacts.length > 0 ? contacts[0].name : ""
);
const [date, setDate] = useState("");
const [time, setTime] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    /*7*/
    addAppointment(title, contact, date, time);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <>
    <section>
      <h2>Add Appointment</h2>
      <AppointmentForm
        contacts={contacts}
        title={title}
        setTitle={setTitle}
        contact={contact}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}
      />
    </section>
    <hr />
    <section>
      <h2>Appointments</h2>
      <TileList tiles={appointments} />
    </section>
  </>
  );
};