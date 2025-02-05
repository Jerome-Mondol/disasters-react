import React from "react";
import LocationPage from "./LocationPage";
import Navbar from "../Dashboard/Navbar";
import LocationPageNavDown from "./LocationPageNavDown";
import Locations from "./LocationPage";

const Location = () => {
  return (
    <div>
      <Navbar />
      <LocationPageNavDown
        greet="Incidents - DR-4699 March 2023 Severe Storms"
        component="DR-4699 March 2023 Severe Storms"
        btn="+ New location"
      />
      <Locations />
    </div>
  );
};

export default Location;
