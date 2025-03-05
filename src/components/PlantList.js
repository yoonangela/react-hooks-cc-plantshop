import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants,filteredplants}) {
  const display=plants.map((plant)=> <PlantCard key={plant.id} plant={plant}/>)
  return (
    <ul className="cards">{filteredplants ? filteredplants.map((plant)=><PlantCard key={plant.id} plant={plant}/>):display}</ul>
  );
}

export default PlantList;
