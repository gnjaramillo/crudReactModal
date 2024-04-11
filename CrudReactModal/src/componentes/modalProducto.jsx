// ModalProducto.jsx
import React, { useState, useEffect } from 'react';
import './modalProducto.css'

const ModalProducto = ({ visible, onAgregar, onEditar, onCancel, producto }) => {
  const [nombre, setNombre] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');

  useEffect(() => {
    if (producto) {
      setNombre(producto.nombre);
      setCaracteristicas(producto.caracteristicas);
    } else {
      setNombre('');
      setCaracteristicas('');
    }
  }, [producto]);

  

  const handleGuardar = () => {
    if (producto) {
      onEditar({ ...producto, nombre, caracteristicas });
    } else {
      onAgregar({ nombre, caracteristicas });
    }
    setNombre('');
    setCaracteristicas('');
  };



  return (
    <div className='inputContainer' style={{ display: visible ? 'block' : 'none'}}>
      <h2>{producto ? 'Editar Producto' : 'Agregar Producto'}</h2>
      <label className="labelModal">
        Nombre:
        <input  className="inputModal" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label >
      <label className="labelModal">
        Características:
        <input className="inputModal"  type="text" value={caracteristicas} onChange={(e) => setCaracteristicas(e.target.value)} />
      </label >
      <button className='btn-guardar' onClick={handleGuardar}>{producto ? 'Guardar Cambios' : 'Agregar Producto'}</button>
      <button className='btn-cancelar' onClick={onCancel}>Cancelar</button>
    </div>
  );
};

export default ModalProducto;
