import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/App.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Hospital Management</h3>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/patients">Patients</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/appointments">Appointments</Link></li>
          <li><Link to="/pharmacy">Pharmacy</Link></li>
          <li><Link to="/billing">Billing</Link></li>
          <li><Link to="/emergency">Emergency</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
