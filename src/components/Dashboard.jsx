import React from "react";
import '../styles/App.css';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to the Hospital Management System</h2>
      <div className="row">
        <div className="card">
          <h5>Total Patients</h5>
          <h2>150</h2>
        </div>
        <div className="card">
          <h5>Appointments Today</h5>
          <h2>20</h2>
        </div>
        <div className="card">
          <h5>Pharmacy Orders</h5>
          <h2>50</h2>
        </div>
        <div className="card">
          <h5>Emergency Cases</h5>
          <h2>5</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
