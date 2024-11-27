import React, { useState, useEffect } from "react";

const BillingManagement = () => {
  const [bills, setBills] = useState([]);
  const [newBill, setNewBill] = useState({ patientName: "", amount: 0, status: "Pending" });

  // Simulating fake data for initial state
  useEffect(() => {
    setBills([
      { patientName: "John Doe", amount: 150.0, status: "Paid" },
      { patientName: "Jane Smith", amount: 200.0, status: "Pending" },
      { patientName: "Mike Johnson", amount: 120.0, status: "Paid" },
    ]);
  }, []);

  // Handle adding a new bill
  const handleAddBill = () => {
    if (newBill.patientName && newBill.amount > 0) {
      setBills([...bills, newBill]);
      setNewBill({ patientName: "", amount: 0, status: "Pending" });
    } else {
      alert("Please fill in all fields with valid values.");
    }
  };

  // Handle deleting a bill
  const handleDeleteBill = (index) => {
    const updatedBills = bills.filter((_, i) => i !== index);
    setBills(updatedBills);
  };

  // Handle changing the status of a bill
  const handleStatusChange = (index, status) => {
    const updatedBills = [...bills];
    updatedBills[index].status = status;
    setBills(updatedBills);
  };

  return (
    <div className="billing-management-container">
      <h2>Billing Management</h2>

      {/* Bill input form */}
      <div className="billing-form">
        <input
          type="text"
          placeholder="Patient Name"
          value={newBill.patientName}
          onChange={(e) => setNewBill({ ...newBill, patientName: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newBill.amount}
          onChange={(e) => setNewBill({ ...newBill, amount: parseFloat(e.target.value) })}
        />
        <select
          value={newBill.status}
          onChange={(e) => setNewBill({ ...newBill, status: e.target.value })}
        >
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
        </select>
        <button onClick={handleAddBill} className="btn btn-primary">Add Bill</button>
      </div>

      {/* Bills table */}
      <table className="bills-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill, index) => (
            <tr key={index}>
              <td>{bill.patientName}</td>
              <td>{bill.amount}</td>
              <td>
                <select
                  value={bill.status}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                </select>
              </td>
              <td>
                <button
                  onClick={() => handleDeleteBill(index)}
                  className="btn btn-danger"
                >
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

export default BillingManagement;
