import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Incidents from "./components/Incidents/Incidents";
import IncidentStart from "./components/IncidentStarter/IncidentStart";
import NewIncident from './components/NewIncident/NewIncident'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/incidentStarter" element={<IncidentStart />} />
        <Route path="/getStarted" element={<NewIncident />} />
      </Routes>
    </Router>
  );
};

export default App;
