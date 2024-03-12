// 3. Custom Hook för counter (3p)
//todo: Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.

import { useState } from "react";

export function UseCounter() {
  const [count, setCount] = useState(4);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
      <p>Count: {count}</p>

        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="w-full h-auto bg-white px-2 py-10">
      <h2 className="font-semibold pb-4 text-lg">Question 3.</h2>
      <div>
        <UseCounter />
      </div>
    </div>
  );
}

export default App;
