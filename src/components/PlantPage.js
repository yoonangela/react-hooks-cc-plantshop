import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants,handleAddItem,search, filteredplants}) {
  return (
    <main>
      <NewPlantForm handleAddItem={handleAddItem}/>
      <Search search={search}/>
      <PlantList plants={plants} filteredplants={filteredplants}/>
    </main>
  );
}

export default PlantPage;
