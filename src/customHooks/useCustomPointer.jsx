import { useEffect, useState } from "react";

export default function useCustomPointer(InitialValue) {
  const [position, setPosition] = useState({
    posX: 0,
    posY: 0,
  });
  useEffect(() => {
    const PositionFunc = (e) => {
      const positionx = e.clientX;
      const positionY = e.clientY;
      setPosition({ posX: positionx, posY: positionY });
    };
    document.addEventListener("mousemove", PositionFunc);
    return () => document.removeEventListener("mousemove", PositionFunc);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: position.posY,
        left: position.posX,
        transform: "translate(-34%, -50%)",
        cursor: "none",
      }}
    >
      {InitialValue}
    </div>
  );
}

// Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

// Cosa deve fare?

// Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
// Posiziona il componente al posto del puntatore del mouse.
// Il componente segue i movimenti del mouse.
// Esempio di utilizzo:
