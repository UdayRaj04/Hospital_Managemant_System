import React, { useState, useEffect } from "react";
import { Button, Form, Table, Alert } from "react-bootstrap";

const PatientManagement = () => {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({ name: "", age: "", disease: "" });
  const [search, setSearch] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Simulating fake data (Initial Patients)
  useEffect(() => {
    const initialPatients = [
      { name: "John Doe", age: 45, disease: "Flu" },
      { name: "Jane Smith", age: 30, disease: "Malaria" },
      { name: "Tom Brown", age: 50, disease: "Diabetes" },
      { name: "Emily Johnson", age: 22, disease: "Asthma" },
      { name: "Michael Lee", age: 35, disease: "Hypertension" },
    ];
    setPatients(initialPatients);
  }, []);

  const handleAddPatient = () => {
    if (!newPatient.name || !newPatient.age || !newPatient.disease) {
      setAlertMessage("Please fill in all fields.");
      setShowAlert(true);
      return;
    }
    setPatients([...patients, newPatient]);
    setNewPatient({ name: "", age: "", disease: "" });
    setAlertMessage("Patient added successfully.");
    setShowAlert(true);
  };

  const handleDeletePatient = (index) => {
    const updatedPatients = patients.filter((_, i) => i !== index);
    setPatients(updatedPatients);
    setAlertMessage("Patient deleted successfully.");
    setShowAlert(true);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="patient-management">
      <h2>Patient Management</h2>
      {showAlert && <Alert variant="success">{alertMessage}</Alert>}

      <Form className="form-group">
        <Form.Control
          type="text"
          placeholder="Search Patients"
          value={search}
          onChange={handleSearch}
        />
      </Form>

      <div className="form-group">
        <Form.Control
          type="text"
          placeholder="Patient Name"
          value={newPatient.name}
          onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
        />
        <Form.Control
          type="number"
          placeholder="Age"
          value={newPatient.age}
          onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
        />
        <Form.Control
          type="text"
          placeholder="Disease"
          value={newPatient.disease}
          onChange={(e) => setNewPatient({ ...newPatient, disease: e.target.value })}
        />
        <Button className="btn-add" onClick={handleAddPatient}>
          Add Patient
        </Button>
      </div>

      <Table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Disease</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients
            .filter((patient) =>
              patient.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.disease}</td>
                <td>
                  <Button className="btn-edit">Edit</Button>
                  <Button
                    className="btn-delete"
                    onClick={() => handleDeletePatient(index)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientManagement;
