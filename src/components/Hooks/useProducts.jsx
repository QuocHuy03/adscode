
import { useEffect, useState } from 'react';
import productApi from '../../Api/productApi';
import axios from 'axios';

export default function useProduct() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
// nayf em render
  useEffect(() => {
    (async () => {
      try {
        const result = await productApi.getAll();
        console.log(result);
        setProduct(result);
        // console.log(setProduct);
      } catch (error) {
        console.log('Failed to fetch product', error);
      }
      setLoading(false);
    })();
  }, []);

  return { product, loading };
}