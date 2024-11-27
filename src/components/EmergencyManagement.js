import React, { useState } from "react";

const EmergencyManagement = () => {
  const [emergencies, setEmergencies] = useState([]);
  const [newEmergency, setNewEmergency] = useState({ patientName: "", emergencyType: "", responseTime: "" });

  const handleAddEmergency = () => {
    setEmergencies([...emergencies, newEmergency]);
    setNewEmergency({ patientName: "", emergencyType: "", responseTime: "" });
  };

  return (
    <div id="emergency">
      <h2>Emergency Management</h2>
      <input
        type="text"
        placeholder="Patient Name"
        value={newEmergency.patientName}
        onChange={(e) => setNewEmergency({ ...newEmergency, patientName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Emergency Type"
        value={newEmergency.emergencyType}
        onChange={(e) => setNewEmergency({ ...newEmergency, emergencyType: e.target.value })}
      />
      <input
        type="text"
        placeholder="Response Time"
        value={newEmergency.responseTime}
        onChange={(e) => setNewEmergency({ ...newEmergency, responseTime: e.target.value })}
      />
      <button onClick={handleAddEmergency}>Add Emergency</button>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Emergency Type</th>
            <th>Response Time</th>
          </tr>
        </thead>
        <tbody>
          {emergencies.map((emergency, index) => (
            <tr key={index}>
              <td>{emergency.patientName}</td>
              <td>{emergency.emergencyType}</td>
              <td>{emergency.responseTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmergencyManagement;
