import React from 'react'
import Navbar from '../Dashboard/Navbar';
import IncidentNavDown from '../Dashboard/NavbarDown';
import CardContainer from '../Dashboard/CardContainer';

const Incidents = () => {
  return (
    <div>
      <Navbar />
      <IncidentNavDown greet="Home - Incidents" component="Incidents" btn="+ New Incident"/>
      <CardContainer />
    </div>
  )
}

export default Incidents
