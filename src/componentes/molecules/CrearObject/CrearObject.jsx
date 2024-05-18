import react from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './CrearObject.css'
function CrearObject(props) {

  const [input, setInput] = useState('')

  const manejarCambio = event => {
    setInput(event.target.value);
  }

  const manejarEnvio = event => {
    event.preventDefault();
    const tareanueva = {
      id: uuidv4(),
      texto: input,
      isChecked: false,
    }
    setInput('');
    props.onSubmit(tareanueva);
  }
  return (
    <form onSubmit={manejarEnvio} className="form-crear-objecto">
      <input type="text"
        className="tarea-input"
        placeholder=""
        value={input}
        onChange={manejarCambio} />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default CrearObject