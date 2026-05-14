import "./css/App.css";
import useDate from "./customHooks/useDate";
import useSwitch from "./customHooks/useSwitch";

function App() {
  const { isOn, toggle } = useSwitch();

  const currentDate = useDate();
  return (
    <>
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>
    </>
  );
}

export default App;
