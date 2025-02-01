import React from 'react'
import Navbar from './Navbar';
import NavbarDown from './NavbarDown';

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <NavbarDown greet="Welcome Back" component="Dashboard" btn="Cypher AI"/>
    </div>
  )
}

export default Dashboard
