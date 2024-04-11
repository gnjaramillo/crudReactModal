// Tabla.jsx
import React from 'react';
import './tabla.css'

const Tabla = ({ productos, onEditar, onEliminar }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Características</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>{producto.caracteristicas}</td>
            <td className='tdbotones'>  
              <button className='btnEditar' onClick={() => onEditar(producto)}>Editar</button>
              <button className='btnEliminar' onClick={() => onEliminar(producto.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
