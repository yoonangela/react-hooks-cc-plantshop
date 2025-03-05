import React, { useEffect,useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const[plants, setplants]=useState([])
  const[search, setsearch]=useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((response) => response.json())
    .then((plant)=>setplants(plant))

},[])

function handleAddItem(newItem){
  setplants(()=>[...plants, newItem])
}

function searchfunction(event){
  setsearch(event.target.value)
}

const filteredplants = plants.filter((plant) =>
  plant.name.toLowerCase().includes(search.toLowerCase())
)

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} handleAddItem={handleAddItem} search={searchfunction} filteredplants={filteredplants}/>
    </div>
  );
}

export default App;
