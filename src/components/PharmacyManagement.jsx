import React, { useState, useEffect } from "react";

const PharmacyManagement = () => {
  // State to store the list of medications and the new medication details
  const [medications, setMedications] = useState([]);
  const [newMedication, setNewMedication] = useState({ name: "", stock: 0, price: 0 });

  // Simulating fake data for initial state
  useEffect(() => {
    setMedications([
      { name: "Paracetamol", stock: 50, price: 1.5 },
      { name: "Ibuprofen", stock: 30, price: 2.0 },
      { name: "Amoxicillin", stock: 10, price: 5.0 },
    ]);
  }, []);

  // Handle adding a new medication
  const handleAddMedication = () => {
    if (newMedication.name && newMedication.stock > 0 && newMedication.price > 0) {
      setMedications([...medications, newMedication]);
      setNewMedication({ name: "", stock: 0, price: 0 });
    } else {
      alert("Please fill in all fields with valid values.");
    }
  };

  // Handle deleting a medication
  const handleDeleteMedication = (index) => {
    const updatedMedications = medications.filter((_, i) => i !== index);
    setMedications(updatedMedications);
  };

  return (
    <div className="pharmacy-management-container">
      <h2>Pharmacy Management</h2>
      
      {/* Medication input form */}
      <div className="pharmacy-form">
        <input
          type="text"
          placeholder="Medication Name"
          value={newMedication.name}
          onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Stock"
          value={newMedication.stock}
          onChange={(e) => setNewMedication({ ...newMedication, stock: parseInt(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newMedication.price}
          onChange={(e) => setNewMedication({ ...newMedication, price: parseFloat(e.target.value) })}
        />
        <button onClick={handleAddMedication} className="btn btn-primary">Add Medication</button>
      </div>

      {/* Medications table */}
      <table className="medications-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medications.map((medication, index) => (
            <tr key={index}>
              <td>{medication.name}</td>
              <td>{medication.stock}</td>
              <td>{medication.price}</td>
              <td>
                <button onClick={() => handleDeleteMedication(index)} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PharmacyManagement;
