// 6. Users i Redux (3p)
//todo: Skapa en komponent som lägger till användare i en lista i Redux.
//! Det ska gå att skriva in ett namn i ett inputfält och klicka på en "Lägg till"-knapp
// för att lägga till användaren. Alla användare ska visas i en lista under inputfältet.

import AddUserComp from "./AddUserComp";
import { store } from "./store.jsx";
import { Provider } from "react-redux";

// Som hjälp finns redan en slice (usersSlice.js) som hanterar användarlistan. Dessutom är
// react-redux och @reduxjs/toolkit redan installerat i projektet.
//todo: Skapa en store som använder sig av usersSlice.js och Lägg till en Provider i App-komponenten
// nedanför.

function App() {
  return (
    <div className="w-full h-auto bg-slate-50 px-2 py-10">
      <h2 className="font-semibold pb-4 text-lg">Question 6.</h2>
      <Provider store={store}>
        <div>
          <AddUserComp />
        </div>
      </Provider>
    </div>
  );
}

export default App;
