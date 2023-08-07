import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import axios from 'axios';

export const useGetProducts = () => {
  const context = useContext(ProductContext)
  if (!context) throw new Error('useGetProducts must be used within a ProductContext')
  return context
}

export default useGetProducts;