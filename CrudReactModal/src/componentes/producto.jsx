// productos.jsx
import React, { useState } from 'react';
import Tabla from './tabla';
import ModalProducto from './modalProducto';

const Producto = () => {
  const [productos, setProductos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const agregarProducto = (nuevoProducto) => {
    const nuevoID = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1;
    setProductos([...productos, { id: nuevoID, ...nuevoProducto }]);
    setModalVisible(false);
  };


  const editarProducto = (productoEditado) => {
    const productosActualizados = productos.map((producto) =>
      producto.id === productoEditado.id ? productoEditado : producto
    );
    setProductos(productosActualizados);
    setModalVisible(false);
    window.confirm('producto editado con exito')
  };

  const eliminarProducto = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      const productosFiltrados = productos.filter((producto) => producto.id !== id);
      setProductos(productosFiltrados);
    }
  };

  const mostrarModalAgregar = () => {
    setProductoSeleccionado(null);
    setModalVisible(true);
  };

  const mostrarModalEditar = (producto) => {
    setProductoSeleccionado(producto);
    setModalVisible(true);
  };

  return (
    <div>
      <button onClick={mostrarModalAgregar}>Agregar Producto</button>
      <Tabla
        productos={productos}
        onEditar={mostrarModalEditar}
        onEliminar={eliminarProducto}
      />
      {modalVisible && (
        <ModalProducto
          visible={modalVisible}
          onAgregar={agregarProducto}
          onEditar={editarProducto}
          producto={productoSeleccionado}
          onCancel={() => setModalVisible(false)}
        />
      )}
    </div>
  );
};

export default Producto;
