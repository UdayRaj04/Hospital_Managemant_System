import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import PatientManagement from "./components/PatientManagement";
import AppointmentManagement from "./components/AppointmentScheduling";
import PharmacyManagement from "./components/PharmacyManagement";
import BillingManagement from "./components/BillingManagement";
import DoctorManagement from "./components/DoctorManagement";
import EmergencyManagement from "./components/EmergencyManagement";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <ThemeSwitcher />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/patients" component={PatientManagement} />
            <Route path="/doctors" component={DoctorManagement} />
            <Route path="/appointments" component={AppointmentManagement} />
            <Route path="/pharmacy" component={PharmacyManagement} />
            <Route path="/billing" component={BillingManagement} />
            <Route path="/emergency" component={EmergencyManagement} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
