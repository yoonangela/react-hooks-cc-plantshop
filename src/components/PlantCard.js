import React, { useState } from "react";

function PlantCard({plant}) {
  const[instock, setinstock]=useState(true)
  function handleclick(){
    setinstock(!instock)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {instock ? (
        <button onClick={handleclick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleclick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
