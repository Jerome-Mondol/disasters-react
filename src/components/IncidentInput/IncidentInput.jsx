import React from 'react'
import Navbar from '../Dashboard/Navbar';
import IncidentInputNavDown from './IncidentInputNavDown';
import Inputs from './Inputs';

const IncidentInput = () => {
  return (
    <div>
        <Navbar />
        <IncidentInputNavDown greet="Home - Incidents - New Incident" component="New Incident" btn="Next Step" btn1="Back"/>
        <Inputs />
    </div>
  )
}

export default IncidentInput
