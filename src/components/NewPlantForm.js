import React, { useState } from "react";

function NewPlantForm({handleAddItem}) {
  const[name, setname]=useState("")
  const[image, setimage]=useState("")
  const[price, setprice]=useState("")

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
      "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price
      }),
    })
   .then((r) => r.json())
   .then((newItem) => {
      handleAddItem(newItem); 
      setname("");
      setimage("");
      setprice("");
    });
  }



  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=> setname(e.target.value)} type="text" name="name" placeholder="Plant name" value={name}/>
        <input onChange={(e)=> setimage(e.target.value)} type="text" name="image" placeholder="Image URL" value={image}/>
        <input onChange={(e)=> setprice(e.target.value)}type="number" name="price" step="0.01" placeholder="Price" value={price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
