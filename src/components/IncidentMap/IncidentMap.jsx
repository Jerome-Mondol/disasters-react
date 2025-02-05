import React from 'react'
import Navbar from '../Dashboard/Navbar';
import IncidentMapPage from './IncidentMapPage'
import IncidentInputNavDown from './IncidentInputNavDown';

const IncidentMap = () => {
  return (
    <div>
        <Navbar />
        <IncidentInputNavDown greet="Home - Incidents - New Incident" component="New Incident" btn1="Back" btn="Finished"/>
        <IncidentMapPage />
    </div>
  )
}

export default IncidentMap
