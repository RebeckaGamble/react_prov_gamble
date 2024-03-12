// 1. Lista med useState (3p)
//todo:  Skapa en komponent som visar en lista med hobbies.
//todo: Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
//! Använd useState för att hantera listan.

import React, { useState } from "react";

let count = 1
function App() {
  const [hobbies, setHobbies] = useState([]);
  const [input, setInput] = useState("");

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleAddHobbie() {
    if (input.trim() !== "") {
      const hobbie = {
        id: count++,
        text: input,
      };
    
    setHobbies([...hobbies, hobbie]);
    setInput(""); //reset input filed
    }
  }

  function removeHobbie(id) {
    const filteredHobbies = hobbies.filter((hobbie) => hobbie.id != id);
    setHobbies(filteredHobbies)
  }

  return (
    <div className="w-full h-auto bg-white px-2 py-10">
      <h2 className="font-semibold pb-4 text-lg">Question 1.</h2>
      <div>
        <p>New hobbie:</p>
        <input value={input} onChange={handleInput} type="text" className="" />
        <button onClick={handleAddHobbie}>Add</button>

        <div>
          <p>Your hobbies: </p>
          {hobbies.map((hobbie) => {
            return (
              <div key={hobbie.id}>
                <p>{hobbie.text}</p>
                <button onClick={() => removeHobbie(hobbie.id)}>Remove</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
