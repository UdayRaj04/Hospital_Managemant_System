import React, { useState, useEffect } from "react";

const AppointmentManagement = () => {
  // State for storing appointments and new appointment data
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({ patientName: "", doctorName: "", date: "" });

  // Simulating fake data
  useEffect(() => {
    setAppointments([
      { patientName: "John Doe", doctorName: "Dr. Smith", date: "2024-12-05" },
      { patientName: "Jane Roe", doctorName: "Dr. Adams", date: "2024-12-06" },
      { patientName: "Alice Johnson", doctorName: "Dr. White", date: "2024-12-07" },
    ]);
  }, []);

  // Handle adding a new appointment
  const handleAddAppointment = () => {
    if (newAppointment.patientName && newAppointment.doctorName && newAppointment.date) {
      setAppointments([...appointments, newAppointment]);
      setNewAppointment({ patientName: "", doctorName: "", date: "" });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="appointment-management-container">
      <h2>Appointment Management</h2>
      
      <div className="appointment-form">
        <input
          type="text"
          placeholder="Patient Name"
          value={newAppointment.patientName}
          onChange={(e) => setNewAppointment({ ...newAppointment, patientName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Doctor Name"
          value={newAppointment.doctorName}
          onChange={(e) => setNewAppointment({ ...newAppointment, doctorName: e.target.value })}
        />
        <input
          type="date"
          value={newAppointment.date}
          onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
        />
        <button onClick={handleAddAppointment} className="btn btn-primary">Add Appointment</button>
      </div>

      <table className="appointments-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Doctor Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.patientName}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentManagement;
