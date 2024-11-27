import React, { useState, useEffect } from "react";
import { Button, Form, Table, Alert } from "react-bootstrap";

const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({ name: "", specialty: "", phone: "" });
  const [search, setSearch] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Simulating fake data (Initial Doctors)
  useEffect(() => {
    const initialDoctors = [
      { name: "Dr. John Doe", specialty: "Cardiology", phone: "123-456-7890" },
      { name: "Dr. Jane Smith", specialty: "Neurology", phone: "987-654-3210" },
      { name: "Dr. Tom Brown", specialty: "Pediatrics", phone: "555-123-4567" },
      { name: "Dr. Emily Johnson", specialty: "Orthopedics", phone: "555-987-6543" },
    ];
    setDoctors(initialDoctors);
  }, []);

  const handleAddDoctor = () => {
    if (!newDoctor.name || !newDoctor.specialty || !newDoctor.phone) {
      setAlertMessage("Please fill in all fields.");
      setShowAlert(true);
      return;
    }
    setDoctors([...doctors, newDoctor]);
    setNewDoctor({ name: "", specialty: "", phone: "" });
    setAlertMessage("Doctor added successfully.");
    setShowAlert(true);
  };

  const handleDeleteDoctor = (index) => {
    const updatedDoctors = doctors.filter((_, i) => i !== index);
    setDoctors(updatedDoctors);
    setAlertMessage("Doctor deleted successfully.");
    setShowAlert(true);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="doctor-management">
      <h2>Doctor Management</h2>
      {showAlert && <Alert variant="success">{alertMessage}</Alert>}

      <Form className="form-group">
        <Form.Control
          type="text"
          placeholder="Search Doctors"
          value={search}
          onChange={handleSearch}
        />
      </Form>

      <div className="form-group">
        <Form.Control
          type="text"
          placeholder="Doctor Name"
          value={newDoctor.name}
          onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
        />
        <Form.Control
          type="text"
          placeholder="Specialty"
          value={newDoctor.specialty}
          onChange={(e) => setNewDoctor({ ...newDoctor, specialty: e.target.value })}
        />
        <Form.Control
          type="text"
          placeholder="Phone Number"
          value={newDoctor.phone}
          onChange={(e) => setNewDoctor({ ...newDoctor, phone: e.target.value })}
        />
        <Button className="btn-add" onClick={handleAddDoctor}>
          Add Doctor
        </Button>
      </div>

      <Table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialty</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors
            .filter((doctor) =>
              doctor.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((doctor, index) => (
              <tr key={index}>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>{doctor.phone}</td>
                <td>
                  <Button className="btn-edit">Edit</Button>
                  <Button
                    className="btn-delete"
                    onClick={() => handleDeleteDoctor(index)}
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

export default DoctorManagement;
