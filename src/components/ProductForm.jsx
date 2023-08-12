import { useState } from "react";
import useGetProducts from "../hooks/useGetProducts";

import styles from "../styles/ProductForm.module.css";

function ProductForm() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [unitType, setUnitType] = useState("");
  const [unitMeasure, setUnitMeasure] = useState("");

  // Función para calcular el PUM
  const calculatePum = () => {
    if (productPrice && unitMeasure) {
      const pumValue = Number(productPrice) / Number(unitMeasure);
      return Number(pumValue);
    } else {
      return 0;
    }
  };

  const { createProduct, adding } = useGetProducts();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pum = calculatePum();
    createProduct(productName, productPrice, unitType, unitMeasure, pum);
    setProductName("");
    setProductPrice("");
    setUnitType("");
    setUnitMeasure("");
  };

  return (
    <div className={styles.container}>
      <h3>Gestionar productos</h3>
      <form className={styles["form-container"]} onSubmit={handleSubmit}>
        <div className={styles["form-row"]}>
          <div className={styles["form-column"]}>
            <label>Nombre del producto</label>
            <input
              type="text"
              name="productName"
              placeholder="Write a Product Name"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            />
          </div>
          <div className={styles["form-column"]}>
            <label>Precio</label>
            <input
              type="number"
              name="productPrice"
              placeholder="$12.500"
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
            />
          </div>
        </div>
        <div className={styles["form-row"]}>
          <div className={styles["form-column"]}>
            <label>Tipo de unidad</label>
            <select
              type="text"
              name="unitType"
              placeholder="Tipo de unidad"
              onChange={(e) => setUnitType(e.target.value)}
              value={unitType}
            >
              <option value="">Seleccione una opción</option>
              <option value="Gramos">Gramos</option>
              <option value="Kilograms">Kilogramos</option>
              <option value="Mililitros">Mililitros</option>
              <option value="Litros">Litros</option>
            </select>
          </div>
          <div className={styles["form-column"]}>
            <label>Medida unitaria</label>
            <input
              type="number"
              name="unitMeasure"
              placeholder="Medida unitaria"
              onChange={(e) => setUnitMeasure(e.target.value)}
              value={unitMeasure}
            />
          </div>
          <div className={styles["form-column"]}>
            <label>PUM</label>
            <input
              type="number"
              name="pum"
              placeholder="PUM"
              onChange={(e) => setPum(e.target.value)}
              value={calculatePum()}
            />
          </div>
        </div>
        <div className={styles["form-row"]}>
          <button disabled={adding}>{adding ? "Adding..." : "Add"}</button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
