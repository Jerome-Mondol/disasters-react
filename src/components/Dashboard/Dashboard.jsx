import React from 'react'
import Navbar from './Navbar';
import NavbarDown from './NavbarDown';
import CardContainer from './CardContainer';

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <NavbarDown greet="Welcome Back" component="Dashboard" btn="Cypher AI"/>
        <CardContainer />
    </div>
  )
}

export default Dashboard
