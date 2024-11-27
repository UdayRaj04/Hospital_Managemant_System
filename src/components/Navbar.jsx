import React from "react";
import { Link } from "react-router-dom";
import '../styles/App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Hospital Management System</div>
      <div className="menu">
        <Link to="/">Dashboard</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/pharmacy">Pharmacy</Link>
        <Link to="/billing">Billing</Link>
        <Link to="/emergency">Emergency</Link>
      </div>
    </nav>
  );
};

export default Navbar;
