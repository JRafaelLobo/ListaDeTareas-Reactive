import React from "react";
import { useState, useEffect } from "react";
import CrearObject from "../../molecules/CrearObject/CrearObject.jsx";
import MarkBox from "../../molecules/MarkBox/MarkBox.jsx";
import './ListaDeHaceres.css'


function ListaDeHaceres() {

  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const tareitas = JSON.parse(localStorage.getItem('tareas'));
    if (tareitas) {
      setTareas(tareitas);
    }
  }, []);

  const handleCheckboxChange = (tareaId, isChecked) => {
    const nuevasTareas = tareas.map(tarea => {
      if (tarea.id === tareaId) {
        return { ...tarea, isChecked: isChecked };
      }
      return tarea;
    });

    setTareas(nuevasTareas);

    const tareasMarcadas = nuevasTareas.filter(tarea => tarea.isChecked);
    localStorage.setItem('tareas', JSON.stringify(tareasMarcadas));
  };


  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
      localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
    }
  }
  const eliminarTareaMarcadas = id => {
    const tareasfiltradas = tareas.filter(tarea => tarea.isChecked === false);
    setTareas(tareasfiltradas);
    localStorage.setItem('tareas', JSON.stringify(tareasfiltradas));
  }
  const eliminarTodo = () => {
    const tareasfiltradas = [];
    setTareas(tareasfiltradas);
    localStorage.setItem('tareas', JSON.stringify(tareasfiltradas));
  }


  return (
    <div className="body-lista-de-haceres">
      <div className="titulo-lista-de-haceres">
        <h1>Lista de que Haceres</h1>
      </div>
      <CrearObject
        onSubmit={agregarTarea}></CrearObject>
      {
        tareas.map(tarea =>
          <MarkBox
            texto={tarea.texto}
            isChecked={tarea.isChecked}
            id={tarea.id}
            handleCheckboxChange={handleCheckboxChange}
            key={tarea.id}
          />
        )
      }
      <div className="seccion-botones-inferiores">
        <input className='botones-inferiores' type="button" onClick={eliminarTareaMarcadas} value='EliminarCompletados' />
        <input className='botones-inferiores' type="button" onClick={eliminarTodo} value='Eliminar Todo' />
      </div>
    </div>
  );
}

export default ListaDeHaceres