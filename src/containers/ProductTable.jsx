import React, { useEffect, useState } from "react";
import { useGetProducts } from "../hooks/useGetProducts";
import styles from "../styles/ProductTable.module.css"

function ProductTable() {
  const { products, getProducts, loading } = useGetProducts();

  useEffect(() => {
    getProducts();
  }, []);

  function formatCurrency(value) {
    // Supongamos que 'value' es un número, si no, debes convertirlo a número antes de usar toLocaleString()
    return value.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    });
  }
  
  function formatCurrencyDetailed(value) {
    // Supongamos que 'value' es un número, si no, debes convertirlo a número antes de usar toLocaleString()
    return value.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 2,
    });
  }

  return <div>
    <table>
    <thead>
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Tipo de unidad</th>
            <th>Medida por unidad</th>
            <th>PUM</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td><img src={product?.main_image_url}/></td>
              <td>{product.name}</td>
              <td>{formatCurrency(product.unit_price)}</td>
              <td>{product.unit_type}</td>
              <td>{product.unit_measure}</td>
              <td>{product.pum}</td>
              <td>
                <button>Delete</button>
                <button>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
    </table>
  </div>;
}

export default ProductTable;
