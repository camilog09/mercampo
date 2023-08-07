import { createContext, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import axios from "axios";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await supabase.from("Products").select("*");
    setProducts(data);
  };

  const createProduct = async (
    productName,
    productPrice,
    unitType,
    unitMeasure,
    pum
  ) => {
    try {
      const currentTimestamp = new Date();
      const result = await supabase.from("Products").insert({
        name: productName,
        unit_price: productPrice,
        unit_type: unitType,
        unit_measure: unitMeasure,
        pum: pum,
        entry_date: currentTimestamp,
      });

      // Consultar el registro recién insertado usando algún criterio
      const insertedRecord = await supabase
        .from("Products")
        .select("*")
        .eq("name", productName)
        .single(); // Obtener solo un registro (el recién insertado)

      const { error, data } = insertedRecord;
      console.log(data);

      if (error) throw error;

      setProducts((prevProducts) => [...prevProducts, insertedRecord.data]);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductContext.Provider value={{ products, getProducts, createProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
