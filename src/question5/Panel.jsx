// När collapsible är true, ska panelen visa en
// "Visa/Mindre"-knapp som låter användaren växla
// mellan att visa och dölja children-innehållet.

import { useState } from "react";

// 2. Om collapsible är true, ska komponenten visa en knapp som låter användaren
//    kollapsa eller expandera innehållet.
// 3. Visa panelens titel oavsett om innehållet är kollapsat eller inte.
// 4. Implementera logik inuti Panel för att hantera visning och döljande av
//    children baserat på användarens interaktion med "Visa/Mindre"-knappen.

export default function Panel({ children, title, collapsible }) {
  const [isOpen, setIsOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    if (collapsible === true) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <>
      <div>
        <h2>{title}</h2>
        <div>
          {isOpen && <>{children}</>}
          {/**() => setIsOpen(!isOpen) */}

          <button onClick={handleModal}> {isOpen ? "Mindre" : "Visa"}</button>
        </div>
      </div>
    </>
  );
}
