import React from 'react'
import Navbar from '../Dashboard/Navbar'
import IncidentCards from './IncidentCards';
import NewIncidentNavDown from './NewIncidentNavDown';

const NewIncident = () => {
  return (
    <div>
        <Navbar />
        <NewIncidentNavDown component="New Incident" greet="Home - Incidents - New Incident" btn="Next Step"/>
        <IncidentCards />
    </div>
  )
}

export default NewIncident
