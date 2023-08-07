import { useState } from "react";
import useGetProducts from "../hooks/useGetProducts";

function ProductForm() {

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [unitType, setUnitType] = useState("");
    const [unitMeasure, setUnitMeasure] = useState("");
    const [pum, setPum] = useState("");

    const { createProduct } = useGetProducts();

    const handleSubmit = async (e) => {
        e.preventDefault();
        createProduct(productName, productPrice, unitType, unitMeasure, pum)
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="productName"
                placeholder="Write a Product Name"
                onChange={(e) => setProductName(e.target.value)}
            />
            <input
                type="number"
                name="productPrice"
                placeholder="$000"
                onChange={(e) => setProductPrice(e.target.value)}
            />
            <input
                type="text"
                name="unitType"
                placeholder="Tipo de unidad"
                onChange={(e) => setUnitType(e.target.value)}
            />
            <input
                type="number"
                name="unitMeasure"
                placeholder="Medida unitaria"
                onChange={(e) => setUnitMeasure(e.target.value)}
            />
            <input
                type="number"
                name="pum"
                placeholder="PUM"
                onChange={(e) => setPum(e.target.value)}
            />
            <button>Add</button>
        </form>
    </div>
  )
}

export default ProductForm