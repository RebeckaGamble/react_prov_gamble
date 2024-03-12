// Context API för Temahantering (3p)
//todo: Använd Context API för att skapa ett enkelt tema-byte-system.
//todo: Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.

import Button from "./Button";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <div className="w-full h-auto bg-slate-50 px-2 py-10">
      <h2 className="font-semibold pb-4 text-lg">Question 4.</h2>
      <ThemeProvider>
        <div>
          <ChildOne />
          <ChildTwo />
          <Button />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
